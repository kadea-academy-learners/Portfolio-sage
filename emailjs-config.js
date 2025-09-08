// Configuration EmailJS
// IMPORTANT: Remplacez ces valeurs par vos propres identifiants EmailJS

const EMAILJS_CONFIG = {
    // Votre clé publique EmailJS (récupérée depuis votre dashboard EmailJS)
    PUBLIC_KEY: 'VOTRE_PUBLIC_KEY_ICI',
    
    // Votre Service ID (ex: service_gmail, service_outlook, etc.)
    SERVICE_ID: 'VOTRE_SERVICE_ID_ICI',
    
    // Votre Template ID (créé dans EmailJS)
    TEMPLATE_ID: 'VOTRE_TEMPLATE_ID_ICI'
};

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
