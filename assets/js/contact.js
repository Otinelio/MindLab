// Gestion du formulaire de contact
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Récupérer les valeurs du formulaire
    const formData = {
      name: document.getElementById('contactName').value,
      email: document.getElementById('contactEmail').value,
      phone: document.getElementById('contactPhone').value,
      subject: document.getElementById('contactSubject').value,
      message: document.getElementById('contactMessage').value
    };
    
    // Validation basique
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Veuillez remplir tous les champs obligatoires (*)');
      return;
    }
    
    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Veuillez entrer une adresse email valide');
      return;
    }
    
    // Ici, vous pouvez ajouter l'envoi du formulaire via AJAX ou un service backend
    // Pour l'instant, on simule juste un envoi réussi
    console.log('Données du formulaire:', formData);
    
    // Afficher un message de succès
    alert('Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.');
    
    // Réinitialiser le formulaire
    contactForm.reset();
  });
}

