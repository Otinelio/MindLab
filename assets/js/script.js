// Gestion du menu burger personnalisé
const customBurger = document.getElementById('customBurger');
const mobileMenu = document.getElementById('mobileMenu');
const menuOverlay = document.getElementById('menuOverlay');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

// Toggle menu
if (customBurger) {
  customBurger.addEventListener('click', function() {
    customBurger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    menuOverlay.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
  });
}

// Fermer le menu en cliquant sur l'overlay
if (menuOverlay) {
  menuOverlay.addEventListener('click', function() {
    customBurger.classList.remove('active');
    mobileMenu.classList.remove('active');
    menuOverlay.classList.remove('active');
    document.body.style.overflow = '';
  });
}

// Fermer le menu en cliquant sur un lien
mobileNavLinks.forEach(link => {
  link.addEventListener('click', function() {
    customBurger.classList.remove('active');
    mobileMenu.classList.remove('active');
    menuOverlay.classList.remove('active');
    document.body.style.overflow = '';
  });
});

// Fermer le menu lors du redimensionnement de la fenêtre (si on passe en desktop)
window.addEventListener('resize', function() {
  if (window.innerWidth >= 992) {
    if (customBurger) customBurger.classList.remove('active');
    if (mobileMenu) mobileMenu.classList.remove('active');
    if (menuOverlay) menuOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }
});

// Gestion du bouton retour en haut
const flecheBtn = document.getElementById('fleche');

if (flecheBtn) {
  // Fonction pour gérer l'affichage du bouton
  function toggleFlecheButton() {
    // Utiliser requestAnimationFrame pour de meilleures performances
    requestAnimationFrame(function() {
      if (window.scrollY === 0 || window.pageYOffset === 0 || document.documentElement.scrollTop === 0) {
        // En haut de la page : masquer le bouton
        flecheBtn.classList.remove('active');
      } else {
        // En scrollant : afficher le bouton
        flecheBtn.classList.add('active');
      }
    });
  }

  // Vérifier la position au chargement de la page
  toggleFlecheButton();

  // Écouter l'événement de scroll avec throttling pour de meilleures performances
  let ticking = false;
  window.addEventListener('scroll', function() {
    if (!ticking) {
      window.requestAnimationFrame(function() {
        toggleFlecheButton();
        ticking = false;
      });
      ticking = true;
    }
  });
}

// Carousel de témoignages
const testimonialCarousel = document.getElementById('testimonialCarousel');
const testimonialPrev = document.getElementById('testimonialPrev');
const testimonialNext = document.getElementById('testimonialNext');
const testimonialPrevMobile = document.getElementById('testimonialPrevMobile');
const testimonialNextMobile = document.getElementById('testimonialNextMobile');
const testimonialDots = document.getElementById('testimonialDots');

if (testimonialCarousel && testimonialPrev && testimonialNext && testimonialDots) {
  const slides = testimonialCarousel.querySelectorAll('.testimonial-slide');
  const totalSlides = slides.length;
  let currentIndex = 0;
  let slidesToShow = window.innerWidth >= 768 ? 2 : 1;
  let autoPlayInterval = null;
  const autoPlayDelay = 5000; // 5 secondes

  // Fonction pour mettre à jour le nombre de slides à afficher
  function updateSlidesToShow() {
    slidesToShow = window.innerWidth >= 768 ? 2 : 1;
    updateCarousel();
  }

  // Mettre à jour l'état des boutons mobiles
  function updateMobileButtons() {
    const maxIndex = Math.max(0, totalSlides - slidesToShow);
    if (testimonialPrevMobile) {
      testimonialPrevMobile.disabled = currentIndex === 0 || totalSlides <= slidesToShow;
    }
    if (testimonialNextMobile) {
      testimonialNextMobile.disabled = currentIndex >= maxIndex || totalSlides <= slidesToShow;
    }
  }

  // Créer les dots de navigation
  function createDots() {
    testimonialDots.innerHTML = '';
    const maxIndex = Math.max(0, totalSlides - slidesToShow);
    const totalDots = maxIndex + 1;
    
    // Si on peut tout afficher, pas besoin de dots
    if (totalSlides <= slidesToShow) {
      return;
    }
    
    for (let i = 0; i < totalDots; i++) {
      const dot = document.createElement('button');
      dot.classList.add('testimonial-carousel-dot');
      if (i === 0) dot.classList.add('active');
      dot.setAttribute('aria-label', `Aller au témoignage ${i + 1}`);
      dot.addEventListener('click', () => goToSlide(i));
      testimonialDots.appendChild(dot);
    }
  }

  // Mettre à jour le carousel
  function updateCarousel() {
    const maxIndex = Math.max(0, totalSlides - slidesToShow);
    
    // S'assurer que l'index est valide
    if (currentIndex > maxIndex) {
      currentIndex = maxIndex;
    }
    
    const translateX = -(currentIndex * (100 / slidesToShow));
    testimonialCarousel.style.transform = `translateX(${translateX}%)`;
    
    // Mettre à jour les dots
    const dots = testimonialDots.querySelectorAll('.testimonial-carousel-dot');
    dots.forEach((dot, index) => {
      if (index === currentIndex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });

    // Mettre à jour les boutons de navigation desktop
    testimonialPrev.disabled = currentIndex === 0 || totalSlides <= slidesToShow;
    testimonialNext.disabled = currentIndex >= maxIndex || totalSlides <= slidesToShow;
    
    // Mettre à jour les boutons mobiles
    updateMobileButtons();
  }

  // Aller à un slide spécifique
  function goToSlide(index) {
    const maxIndex = Math.max(0, totalSlides - slidesToShow);
    currentIndex = Math.max(0, Math.min(index, maxIndex));
    updateCarousel();
    resetAutoPlay();
  }

  // Slide suivant
  function nextSlide() {
    const maxIndex = Math.max(0, totalSlides - slidesToShow);
    if (totalSlides <= slidesToShow) return; // Pas de navigation si tout est visible
    
    if (currentIndex < maxIndex) {
      currentIndex++;
    } else {
      currentIndex = 0; // Retour au début
    }
    updateCarousel();
    resetAutoPlay();
  }

  // Slide précédent
  function prevSlide() {
    const maxIndex = Math.max(0, totalSlides - slidesToShow);
    if (totalSlides <= slidesToShow) return; // Pas de navigation si tout est visible
    
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = maxIndex; // Aller à la fin
    }
    updateCarousel();
    resetAutoPlay();
  }

  // Démarrer la lecture automatique
  function startAutoPlay() {
    // Ne démarrer que s'il y a plus de slides que ce qui peut être affiché
    if (totalSlides > slidesToShow) {
      stopAutoPlay(); // S'assurer qu'il n'y a pas déjà un intervalle en cours
      autoPlayInterval = setInterval(nextSlide, autoPlayDelay);
    }
  }

  // Arrêter la lecture automatique
  function stopAutoPlay() {
    if (autoPlayInterval) {
      clearInterval(autoPlayInterval);
      autoPlayInterval = null;
    }
  }

  // Réinitialiser la lecture automatique
  function resetAutoPlay() {
    stopAutoPlay();
    startAutoPlay();
  }

  // Événements - Boutons desktop
  testimonialNext.addEventListener('click', nextSlide);
  testimonialPrev.addEventListener('click', prevSlide);
  
  // Événements - Boutons mobile
  if (testimonialNextMobile) {
    testimonialNextMobile.addEventListener('click', nextSlide);
  }
  if (testimonialPrevMobile) {
    testimonialPrevMobile.addEventListener('click', prevSlide);
  }

  // Pause au survol (sur tout le wrapper)
  const carouselWrapper = testimonialCarousel.closest('.testimonial-carousel-wrapper');
  if (carouselWrapper) {
    carouselWrapper.addEventListener('mouseenter', stopAutoPlay);
    carouselWrapper.addEventListener('mouseleave', startAutoPlay);
  }

  // Gestion du redimensionnement avec debounce
  let resizeTimeout;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function() {
      const newSlidesToShow = window.innerWidth >= 768 ? 2 : 1;
      if (newSlidesToShow !== slidesToShow) {
        const maxIndex = Math.max(0, totalSlides - newSlidesToShow);
        if (currentIndex > maxIndex) {
          currentIndex = maxIndex;
        }
        updateSlidesToShow();
        createDots();
      }
    }, 250);
  });

  // Initialisation
  createDots();
  updateCarousel();
  startAutoPlay();

  // Pause automatique si la page n'est pas visible
  document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
      stopAutoPlay();
    } else {
      startAutoPlay();
    }
  });
}