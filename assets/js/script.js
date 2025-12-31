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