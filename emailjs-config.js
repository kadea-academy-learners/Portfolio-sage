// Configuration EmailJS pour Sage Dimumbe
// Email de destination: Sagedimumbe7@gmail.com

// Configuration EmailJS - Définie en premier
const EMAILJS_CONFIG = {
    // Clé publique EmailJS
    PUBLIC_KEY: 'aLWj8oMGZBR8cUZo6',
    
    // Service Gmail ID
    SERVICE_ID: 'service_q87tgll',
    
    // Template ID
    TEMPLATE_ID: 'template_t1rut2n'
};

// Fonction d'envoi d'email
function sendMail() {
    let params = {
        nom: document.getElementById("nom").value,
        prenom: document.getElementById("prenom").value,
        email: document.getElementById("email").value,
        sujet: document.getElementById("sujet").value,
        message: document.getElementById("message").value
    };

    return emailjs.send(EMAILJS_CONFIG.SERVICE_ID, EMAILJS_CONFIG.TEMPLATE_ID, params, EMAILJS_CONFIG.PUBLIC_KEY)
}

// Initialiser EmailJS
emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

// Fonction pour gérer la soumission du formulaire
function handleFormSubmit(event) {
    event.preventDefault();
    
    const submitBtn = document.getElementById('submit-btn');
    const originalText = submitBtn.textContent;
    
    // Afficher l'état de chargement
    submitBtn.textContent = 'Envoi en cours...';
    submitBtn.disabled = true;
    
    // Envoyer l'email
    sendMail()
        .then(() => {
            // Succès
            showSuccessMessage();
            // Réinitialiser le formulaire
            document.getElementById('contact-form').reset();
        })
        .catch((error) => {
            // Erreur
            console.error('Erreur lors de l\'envoi:', error);
            showErrorMessage();
        })
        .finally(() => {
            // Restaurer le bouton
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        });
    
    return false;
}

// Fonction pour afficher un message de succès
function showSuccessMessage() {
    const container = document.querySelector('.container');
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.innerHTML = `
        <div style="
            background-color: #d4edda;
            color: #155724;
            padding: 20px;
            border-radius: 8px;
            border: 2px solid #c3e6cb;
            margin: 20px 0;
            text-align: center;
            font-weight: bold;
            font-size: 16px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        ">
            <i class="fas fa-check-circle" style="margin-right: 10px; color: #28a745; font-size: 20px;"></i>
            ✅ Message envoyé avec succès !<br>
            <span style="font-weight: normal; font-size: 14px; color: #155724;">
                Votre message a été envoyé à Sage Dimumbe. Vous recevrez une réponse bientôt.
            </span>
        </div>
    `;
    
    container.insertBefore(successDiv, container.firstChild);
    successDiv.scrollIntoView({ behavior: 'smooth' });
    
    // Supprimer le message après 8 secondes
    setTimeout(() => {
        if (successDiv && successDiv.parentNode) {
            successDiv.remove();
        }
    }, 8000);
}

// Fonction pour afficher un message d'erreur
function showErrorMessage() {
    const container = document.querySelector('.container');
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.innerHTML = `
        <div style="
            background-color: #f8d7da;
            color: #721c24;
            padding: 20px;
            border-radius: 8px;
            border: 2px solid #f5c6cb;
            margin: 20px 0;
            text-align: center;
            font-weight: bold;
            font-size: 16px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        ">
            <i class="fas fa-exclamation-triangle" style="margin-right: 10px; color: #dc3545; font-size: 20px;"></i>
            ❌ Erreur lors de l'envoi !<br>
            <span style="font-weight: normal; font-size: 14px; color: #721c24;">
                Une erreur s'est produite. Veuillez réessayer ou contactez directement par email.
            </span>
        </div>
    `;
    
    container.insertBefore(errorDiv, container.firstChild);
    errorDiv.scrollIntoView({ behavior: 'smooth' });
    
    // Supprimer le message après 8 secondes
    setTimeout(() => {
        if (errorDiv && errorDiv.parentNode) {
            errorDiv.remove();
        }
    }, 8000);
}

// Configuration validée le 08/09/2025 15:52:20
console.log('✅ EmailJS configuré pour Sagedimumbe7@gmail.com');

/* 
INSTRUCTIONS POUR CONFIGURER EMAILJS:

1. Allez sur https://www.emailjs.com/
2. Créez un compte gratuit
3. Connectez votre service email (Gmail, Outlook, etc.)
4. Créez un template d'email
5. Remplacez les valeurs ci-dessus par vos identifiants

TEMPLATE RECOMMANDÉ:
Sujet: Nouveau message de {{subject}} - Portfolio Sage Dimumbe
Corps:
Bonjour Sage,

Vous avez reçu un nouveau message depuis votre portfolio:

De: {{from_name}}
Email: {{from_email}}
Sujet: {{subject}}

Message:
{{message}}

---
Ce message a été envoyé depuis votre site web.
*/
