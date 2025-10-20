// Script EmailJS pour formulaire de contact
// Initialiser EmailJS
emailjs.init('aLWj8oMGZBR8cUZo6');

// Configuration
const CONFIG = {
    SERVICE_ID: 'service_q87tgll',
    TEMPLATE_ID: 'template_t1rut2n',
    PUBLIC_KEY: 'aLWj8oMGZBR8cUZo6'
};

// Fonction pour afficher les messages
function showMessage(text, type, containerId = 'message-container') {
    let messageContainer = document.getElementById(containerId);
    
    // Créer le conteneur de messages s'il n'existe pas
    if (!messageContainer) {
        messageContainer = document.createElement('div');
        messageContainer.id = containerId;
        messageContainer.style.cssText = `
            margin: 20px 0;
            padding: 0;
        `;
        
        // Insérer avant le formulaire
        const form = document.getElementById('form');
        form.parentNode.insertBefore(messageContainer, form);
    }
    
    // Styles pour les messages
    const messageStyles = {
        success: `
            background-color: #d4edda;
            color: #155724;
            border: 1px solid #c3e6cb;
        `,
        error: `
            background-color: #f8d7da;
            color: #721c24;
            border: 1px solid #f5c6cb;
        `,
        loading: `
            background-color: #d1ecf1;
            color: #0c5460;
            border: 1px solid #bee5eb;
        `
    };
    
    messageContainer.innerHTML = `
        <div style="
            padding: 15px;
            margin: 10px 0;
            border-radius: 5px;
            font-weight: bold;
            ${messageStyles[type] || messageStyles.loading}
        ">
            ${text}
        </div>
    `;
    
    // Faire défiler vers le message
    messageContainer.scrollIntoView({ behavior: 'smooth' });
    
    // Auto-supprimer après 8 secondes pour les messages de succès/erreur
    if (type === 'success' || type === 'error') {
        setTimeout(() => {
            messageContainer.innerHTML = '';
        }, 8000);
    }
}

// Fonction principale d'envoi d'email
function sendEmail(event) {
    event.preventDefault();
    
    const button = document.getElementById('button');
    const originalText = button.value || button.textContent;
    
    // Afficher l'état de chargement
    button.disabled = true;
    if (button.tagName === 'INPUT') {
        button.value = 'Envoi en cours...';
    } else {
        button.textContent = 'Envoi en cours...';
    }
    showMessage('🔄 Envoi de votre message en cours...', 'loading');
    
    // Récupérer les données du formulaire
    const templateParams = {
        name: document.getElementById('name')?.value || '',
        nom: document.getElementById('nom')?.value || '',
        prenom: document.getElementById('prenom')?.value || '',
        email: document.getElementById('email')?.value || '',
        sujet: document.getElementById('sujet')?.value || '',
        title: document.getElementById('title')?.value || '',
        message: document.getElementById('message')?.value || '',
        // Informations supplémentaires
        timestamp: new Date().toLocaleString('fr-FR'),
        from_name: document.getElementById('name')?.value || document.getElementById('prenom')?.value || '',
        from_email: document.getElementById('email')?.value || '',
        subject: document.getElementById('sujet')?.value || document.getElementById('title')?.value || ''
    };

    console.log('📋 Paramètres envoyés:', templateParams);

    // Envoyer l'email via EmailJS
    emailjs.send(CONFIG.SERVICE_ID, CONFIG.TEMPLATE_ID, templateParams, CONFIG.PUBLIC_KEY)
        .then(function(response) {
            console.log('✅ SUCCESS!', response.status, response.text);
            
            // Afficher le message de succès
            showMessage(`
                <div style="text-align: center;">
                    <div style="font-size: 24px; margin-bottom: 10px;">🎉</div>
                    <strong>Message envoyé avec succès !</strong><br>
                    <small>Votre message a été transmis à Sage Dimumbe. Vous recevrez une réponse bientôt.</small>
                </div>
            `, 'success');
            
            // Réinitialiser le formulaire
            document.getElementById('form').reset();
            
            // Réinitialiser les bordures des champs
            const fields = document.querySelectorAll('#form input, #form textarea');
            fields.forEach(field => {
                field.style.borderColor = '#ddd';
            });
            
        }, function(error) {
            console.log('❌ FAILED...', error);
            
            // Afficher le message d'erreur avec plus de détails
            const errorMessage = error.text || error.message || 'Erreur inconnue';
            showMessage(`
                <div style="text-align: center;">
                    <div style="font-size: 24px; margin-bottom: 10px;">❌</div>
                    <strong>Erreur lors de l'envoi</strong><br>
                    <small>Erreur: ${errorMessage}</small><br>
                    <small>Veuillez réessayer ou contactez directement: <a href="mailto:Sagedimumbe7@gmail.com">Sagedimumbe7@gmail.com</a></small>
                </div>
            `, 'error');
        })
        .finally(function() {
            // Restaurer le bouton
            button.disabled = false;
            if (button.tagName === 'INPUT') {
                button.value = originalText;
            } else {
                button.textContent = originalText;
            }
        });
}

// Fonction de validation en temps réel
function setupValidation() {
    const requiredFields = ['name', 'nom', 'prenom', 'email', 'sujet', 'title', 'message'];
    
    requiredFields.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        if (field) {
            field.addEventListener('input', function() {
                if (this.value.trim()) {
                    this.style.borderColor = '#28a745';
                } else {
                    this.style.borderColor = '#ddd';
                }
            });
        }
    });
}

// Initialisation quand le DOM est chargé
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Script EmailJS initialisé');
    
    // Attacher l'événement au formulaire
    const form = document.getElementById('form');
    if (form) {
        form.addEventListener('submit', sendEmail);
        console.log('✅ Événement submit attaché au formulaire');
    } else {
        console.error('❌ Formulaire avec ID "form" non trouvé');
    }
    
    // Configurer la validation
    setupValidation();
    
    console.log('📧 Configuration EmailJS:', CONFIG);
});

// Export des fonctions pour usage externe (optionnel)
window.EmailJSForm = {
    sendEmail,
    showMessage,
    setupValidation,
    CONFIG
};
