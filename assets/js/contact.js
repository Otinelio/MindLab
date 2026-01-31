// Gestion du formulaire de contact
const contactForm = document.getElementById('contactForm');
const contactSubmitBtn = document.querySelector('.form-submit-btn');
const contactApiUrl = 'https://api.web3forms.com/submit';
const contactAccessKey = '28fd1530-e6df-41df-b826-2e1462182a3b';

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
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Veuillez remplir tous les champs obligatoires (*)');
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Veuillez entrer une adresse email valide');
      return;
    }

    const payload = {
      access_key: contactAccessKey,
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message
    };

    if (!contactAccessKey || contactAccessKey === 'YOUR_WEB3FORMS_ACCESS_KEY') {
      alert('Le service d’envoi automatique n’est pas configuré.');
      return;
    }

    if (contactSubmitBtn) {
      contactSubmitBtn.disabled = true;
      contactSubmitBtn.textContent = 'Envoi en cours...';
    }

    fetch(contactApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(payload)
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        if (data && data.success) {
          alert('Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.');
          contactForm.reset();
        } else {
          alert('Une erreur est survenue lors de l’envoi. Veuillez réessayer.');
        }
      })
      .catch(function() {
        alert('Impossible de contacter le service d’envoi. Vérifiez votre connexion et réessayez.');
      })
      .finally(function() {
        if (contactSubmitBtn) {
          contactSubmitBtn.disabled = false;
          contactSubmitBtn.textContent = 'Envoyer le message';
        }
      });
  });
}

