// Données des formations
const formations = {
  1: {
    badge: "Fondamentaux",
    title: "Formation 1.0 — Les bases",
    price: "7999 FCFA",
    image: "../assets/img/technology-3389885_1920.jpg",
    link: "https://chshhvhs.mychariow.shop/automate-mind-lab-1-0/checkout",
    description: "Plongez dans l'univers de l'automatisation digitale avec cette formation complète conçue pour les débutants. Vous découvrirez les concepts fondamentaux, les outils essentiels et les premières étapes pour créer vos propres workflows d'automatisation. Cette formation vous donnera les bases solides nécessaires pour progresser dans votre parcours d'automatisation.",
    program: [
      {
        title: "Module 1 : Introduction à l'automatisation",
        content: "Découvrez les concepts clés de l'automatisation digitale, son importance dans le monde moderne et les opportunités qu'elle offre aux entreprises et aux particuliers."
      },
      {
        title: "Module 2 : Principes fondamentaux",
        content: "Apprenez les principes de base de l'automatisation : workflows, déclencheurs, actions et conditions. Comprenez comment structurer vos premiers processus automatisés."
      },
      {
        title: "Module 3 : Premiers workflows simples",
        content: "Créez vos premiers workflows fonctionnels étape par étape. Mettez en pratique les concepts appris avec des exemples concrets et faciles à reproduire."
      },
      {
        title: "Module 4 : Compréhension des outils",
        content: "Explorez les principaux outils d'automatisation disponibles sur le marché. Apprenez à choisir le bon outil selon vos besoins et votre niveau."
      },
      {
        title: "Module 5 : Cas pratiques",
        content: "Appliquez vos connaissances à des cas pratiques réels : automatisation de réponses, gestion de contacts, synchronisation de données."
      }
    ],
    objectives: [
      "Comprendre les concepts fondamentaux de l'automatisation digitale",
      "Maîtriser la création de workflows simples et fonctionnels",
      "Connaître les principaux outils d'automatisation disponibles",
      "Savoir identifier les opportunités d'automatisation dans votre contexte",
      "Mettre en place vos premiers processus automatisés"
    ],
    target: "Cette formation est idéale pour les débutants complets qui souhaitent découvrir l'automatisation digitale. Aucun prérequis technique n'est nécessaire. Parfait pour les entrepreneurs, les professionnels du marketing, les assistants virtuels et toute personne souhaitant gagner du temps grâce à l'automatisation.",
    duration: "8 heures",
    format: "En ligne",
    certificate: "Certificat inclus",
    features: [
      "Accès à vie au contenu",
      "Support par email",
      "Ressources téléchargeables",
      "Exercices pratiques",
      "Communauté d'entraide"
    ]
  },
  2: {
    badge: "Avancé",
    title: "Formation 2.0 — Mise en pratique",
    price: "9999 FCFA",
    image: "../assets/img/robot-8781973_1920.jpg",
    link: "https://chshhvhs.mychariow.shop/automate-mind-lab-2-0/checkout",
    description: "Passez à l'action avec cette formation avancée qui vous permettra de créer des automatisations complexes et applicables directement à votre business. Vous apprendrez à structurer vos offres, à gérer des workflows avancés et à résoudre des problèmes concrets grâce à l'automatisation. Cette formation est conçue pour ceux qui veulent transformer leurs connaissances en résultats tangibles.",
    program: [
      {
        title: "Module 1 : Automatisations applicables au business",
        content: "Découvrez comment créer des automatisations qui génèrent de la valeur réelle pour votre business : génération de leads, qualification de prospects, suivi client automatisé."
      },
      {
        title: "Module 2 : Structuration des premières offres",
        content: "Apprenez à structurer et à proposer vos services d'automatisation. Créez des packages attractifs et définissez votre pricing stratégique."
      },
      {
        title: "Module 3 : Cas pratiques réels",
        content: "Plongez dans des cas pratiques complexes : automatisation de campagnes marketing, intégration CRM, gestion de commandes, chatbots avancés."
      },
      {
        title: "Module 4 : Optimisation et scalabilité",
        content: "Découvrez comment optimiser vos workflows existants et les rendre scalables. Apprenez les techniques d'optimisation pour améliorer les performances."
      },
      {
        title: "Module 5 : Gestion de projet d'automatisation",
        content: "Maîtrisez la gestion complète d'un projet d'automatisation : analyse des besoins, conception, développement, tests et déploiement."
      },
      {
        title: "Module 6 : Intégrations avancées",
        content: "Explorez les intégrations complexes entre différents outils : APIs, webhooks, connecteurs personnalisés et solutions sur mesure."
      }
    ],
    objectives: [
      "Créer des automatisations complexes et fonctionnelles",
      "Structurer et commercialiser vos services d'automatisation",
      "Résoudre des problèmes business concrets avec l'automatisation",
      "Optimiser et scaler vos workflows existants",
      "Gérer des projets d'automatisation de A à Z",
      "Maîtriser les intégrations avancées entre outils"
    ],
    target: "Cette formation s'adresse aux personnes ayant déjà des bases en automatisation et qui souhaitent passer à l'action. Idéal pour ceux qui veulent créer une activité professionnelle dans l'automatisation ou améliorer significativement leur productivité. Des connaissances de base en automatisation sont recommandées.",
    duration: "16 heures",
    format: "En ligne + Sessions live",
    certificate: "Certificat avancé inclus",
    features: [
      "Accès à vie au contenu",
      "3 sessions live de coaching",
      "Support prioritaire",
      "Templates de workflows",
      "Accès à la communauté premium",
      "Revue de vos projets"
    ]
  },
  3: {
    badge: "Expert",
    title: "Formation 3.0 — Niveau expert",
    price: "14999 FCFA",
    image: "../assets/img/ai-generated-9342713_1280.jpg",
    link: "https://chshhvhs.mychariow.shop/automate-mind-lab-3-0/checkout",
    description: "Devenez un expert de l'automatisation digitale avec cette formation complète de niveau expert. Vous maîtriserez les systèmes les plus complexes, l'automatisation à grande échelle et l'approche professionnelle pour développer une activité scalable. Cette formation est conçue pour les profils avancés et les entrepreneurs qui souhaitent exceller dans le domaine de l'automatisation.",
    program: [
      {
        title: "Module 1 : Systèmes complexes et avancés",
        content: "Maîtrisez la conception et le développement de systèmes d'automatisation complexes : architectures multi-niveaux, gestion d'erreurs avancée, logique conditionnelle sophistiquée."
      },
      {
        title: "Module 2 : Automatisation à grande échelle",
        content: "Apprenez à créer et gérer des automatisations capables de traiter des volumes importants : optimisation des performances, gestion de la charge, monitoring avancé."
      },
      {
        title: "Module 3 : Approche professionnelle et scalable",
        content: "Développez une approche professionnelle de l'automatisation : méthodologies de développement, documentation, maintenance, versioning et bonnes pratiques."
      },
      {
        title: "Module 4 : Solutions sur mesure et développement",
        content: "Créez des solutions d'automatisation sur mesure : développement de connecteurs personnalisés, intégration d'APIs complexes, solutions hybrides."
      },
      {
        title: "Module 5 : Architecture et infrastructure",
        content: "Comprenez l'architecture des systèmes d'automatisation : choix d'infrastructure, sécurité, conformité, backup et disaster recovery."
      },
      {
        title: "Module 6 : Business et stratégie",
        content: "Développez votre activité d'automatisation : stratégie de croissance, pricing premium, gestion d'équipe, scaling de votre business."
      },
      {
        title: "Module 7 : Innovation et tendances",
        content: "Restez à la pointe de l'innovation : IA et automatisation, nouvelles technologies, veille stratégique et adaptation aux évolutions du marché."
      }
    ],
    objectives: [
      "Maîtriser les systèmes d'automatisation les plus complexes",
      "Créer et gérer des automatisations à grande échelle",
      "Développer une approche professionnelle et scalable",
      "Concevoir des solutions sur mesure pour vos clients",
      "Comprendre l'architecture et l'infrastructure des systèmes",
      "Développer une activité d'automatisation rentable et scalable",
      "Rester à la pointe de l'innovation dans le domaine"
    ],
    target: "Cette formation expert s'adresse aux profils avancés ayant déjà une solide expérience en automatisation. Idéal pour les entrepreneurs, les consultants et les professionnels qui souhaitent exceller et développer une activité d'automatisation à grande échelle. Des connaissances approfondies en automatisation et une expérience pratique sont requises.",
    duration: "24 heures",
    format: "En ligne + Sessions live + Coaching",
    certificate: "Certificat expert + Badge professionnel",
    features: [
      "Accès à vie au contenu",
      "6 sessions live de coaching personnalisé",
      "Support prioritaire 24/7",
      "Bibliothèque de templates experts",
      "Accès à la communauté exclusive",
      "Revue approfondie de vos projets",
      "Mentorat individuel (1 session)",
      "Accès aux ressources premium"
    ]
  }
};

// Fonction pour charger les données de la formation
function loadCourseData() {
  // Récupérer le paramètre de l'URL
  const urlParams = new URLSearchParams(window.location.search);
  const formationId = urlParams.get('formation') || '1';
  const formation = formations[formationId] || formations[1];

  // Mettre à jour le hero
  document.getElementById('courseHeroImage').src = formation.image;
  document.getElementById('courseHeroBadge').textContent = formation.badge;
  document.getElementById('courseHeroTitle').textContent = formation.title;
  document.getElementById('courseHeroPrice').textContent = formation.price;

  // Mettre à jour la description
  document.getElementById('courseDescription').textContent = formation.description;

  // Mettre à jour le programme
  const programContainer = document.getElementById('courseProgram');
  programContainer.innerHTML = '';
  formation.program.forEach((item, index) => {
    const programItem = document.createElement('div');
    programItem.className = 'course-program-item';
    programItem.innerHTML = `
      <div class="course-program-item-title">
        <i class="bi bi-check-circle"></i>
        ${item.title}
      </div>
      <p class="course-program-item-text">${item.content}</p>
    `;
    programContainer.appendChild(programItem);
  });

  // Mettre à jour les objectifs
  const objectivesContainer = document.getElementById('courseObjectives');
  objectivesContainer.innerHTML = '';
  formation.objectives.forEach(objective => {
    const listItem = document.createElement('li');
    listItem.className = 'course-list-item';
    listItem.innerHTML = `
      <i class="bi bi-check-circle-fill"></i>
      <span class="course-list-item-text">${objective}</span>
    `;
    objectivesContainer.appendChild(listItem);
  });

  // Mettre à jour le public cible
  document.getElementById('courseTarget').textContent = formation.target;

  // Mettre à jour la sidebar
  document.getElementById('courseCardPrice').textContent = formation.price;
  document.getElementById('courseDuration').textContent = formation.duration;
  document.getElementById('courseFormat').textContent = formation.format;
  document.getElementById('courseCertificate').textContent = formation.certificate;

  // Mettre à jour le lien d'inscription
  const inscriptionBtn = document.querySelector('.course-card-btn');
  if (inscriptionBtn && formation.link) {
    inscriptionBtn.href = formation.link;
  }

  // Mettre à jour les caractéristiques
  const featuresContainer = document.getElementById('courseFeatures');
  featuresContainer.innerHTML = '';
  formation.features.forEach(feature => {
    const featureItem = document.createElement('li');
    featureItem.className = 'course-features-item';
    featureItem.innerHTML = `
      <i class="bi bi-check-circle-fill"></i>
      <span>${feature}</span>
    `;
    featuresContainer.appendChild(featureItem);
  });

  // Mettre à jour le titre de la page
  document.title = `${formation.title} - MindLab`;
}

// Charger les données au chargement de la page
document.addEventListener('DOMContentLoaded', loadCourseData);

