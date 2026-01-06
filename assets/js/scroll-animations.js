// Gestion des animations au scroll
(function() {
    'use strict';

    // Vérifier si l'utilisateur préfère les animations réduites
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
        // Si l'utilisateur préfère les animations réduites, on les désactive
        return;
    }

    // Configuration de l'Intersection Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -50px 0px', // L'animation se déclenche un peu avant que l'élément soit visible
        threshold: 0.1 // L'animation se déclenche quand 10% de l'élément est visible
    };

    // Fonction pour ajouter automatiquement les classes d'animation aux éléments principaux
    function autoAnimateElements() {
        // Sélectionner les sections principales
        const sections = document.querySelectorAll('section:not(#section7):not(header section)');
        sections.forEach((section, index) => {
            if (!section.classList.contains('animate-slide-up')) {
                section.classList.add('animate-slide-up');
                // Ajouter un délai progressif
                if (index % 2 === 0) {
                    section.classList.add('animate-delay-200');
                }
            }
        });

        // Sélectionner les cartes
        const cards = document.querySelectorAll([
            '.section3-service-card',
            '.section4-card',
            '.section5-card',
            '.service-card',
            '.course-section',
            '.course-card',
            '.contact-info-card',
            '.contact-form-wrapper',
            '.testimonial-card'
        ].join(','));
        
        cards.forEach((card, index) => {
            if (!card.classList.contains('animate-fade-in')) {
                card.classList.add('animate-fade-in');
                // Ajouter un délai progressif pour un effet en cascade
                const delayIndex = index % 3;
                if (delayIndex === 1) {
                    card.classList.add('animate-delay-100');
                } else if (delayIndex === 2) {
                    card.classList.add('animate-delay-200');
                }
            }
        });

        // Sélectionner les titres principaux
        const titles = document.querySelectorAll([
            'h2:not(.section5-title):not(.section8-title)',
            'h3:not(.section5-card-title)',
            '.services-header-title',
            '.contact-header-title',
            '.course-hero-title'
        ].join(','));
        
        titles.forEach((title, index) => {
            if (!title.classList.contains('animate-slide-up')) {
                title.classList.add('animate-slide-up');
            }
        });

        // Sélectionner les listes et éléments de liste
        const listItems = document.querySelectorAll([
            '.service-features-item',
            '.course-list-item',
            '.course-features-item',
            '.course-program-item'
        ].join(','));
        
        listItems.forEach((item, index) => {
            if (!item.classList.contains('animate-fade-in')) {
                item.classList.add('animate-fade-in');
                const delayIndex = index % 4;
                if (delayIndex === 1) {
                    item.classList.add('animate-delay-100');
                } else if (delayIndex === 2) {
                    item.classList.add('animate-delay-200');
                } else if (delayIndex === 3) {
                    item.classList.add('animate-delay-300');
                }
            }
        });
    }

    // Fonction pour initialiser les animations
    function initScrollAnimations() {
        // Ajouter automatiquement les classes d'animation
        autoAnimateElements();

        // Sélectionner tous les éléments avec une classe d'animation
        const animatedElements = document.querySelectorAll([
            '.animate-on-scroll',
            '.animate-fade-in',
            '.animate-slide-up',
            '.animate-slide-down',
            '.animate-slide-left',
            '.animate-slide-right',
            '.animate-zoom-in',
            '.animate-zoom-out'
        ].join(','));

        if (animatedElements.length === 0) {
            return;
        }

        // Créer l'Intersection Observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Ajouter la classe 'animated' quand l'élément est visible
                    entry.target.classList.add('animated');
                    
                    // Optionnel : arrêter d'observer cet élément après l'animation
                    // observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observer chaque élément
        animatedElements.forEach(element => {
            observer.observe(element);
        });
    }

    // Initialiser les animations au chargement de la page
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initScrollAnimations);
    } else {
        initScrollAnimations();
    }

    // Réinitialiser les animations pour les éléments dynamiquement ajoutés
    // (utile si du contenu est ajouté via JavaScript)
    const mutationObserver = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.addedNodes.length > 0) {
                // Réinitialiser les animations pour les nouveaux éléments
                setTimeout(initScrollAnimations, 100);
            }
        });
    });

    // Observer les changements dans le DOM
    mutationObserver.observe(document.body, {
        childList: true,
        subtree: true
    });
})();

