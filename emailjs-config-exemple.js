// EXEMPLE DE CONFIGURATION EMAILJS POUR SAGEDIMUMBE7@GMAIL.COM
// Remplacez les valeurs par vos vrais identifiants EmailJS

const EMAILJS_CONFIG_EXEMPLE = {
    // 🔑 Votre clé publique EmailJS (trouvée dans Account → General)
    // Exemple: 'abcd1234efgh5678'
    PUBLIC_KEY: 'REMPLACEZ_PAR_VOTRE_PUBLIC_KEY',
    
    // 📧 Votre Service ID Gmail (trouvé dans Email Services)  
    // Exemple: 'service_gmail_abc123'
    SERVICE_ID: 'REMPLACEZ_PAR_VOTRE_SERVICE_ID',
    
    // 📝 Votre Template ID (trouvé dans Email Templates)
    // Exemple: 'template_portfolio_xyz789' 
    TEMPLATE_ID: 'REMPLACEZ_PAR_VOTRE_TEMPLATE_ID'
};

/* 
📋 ÉTAPES RAPIDES POUR CONFIGURER:

1. Allez sur: https://www.emailjs.com/
2. Créez un compte avec: Sagedimumbe7@gmail.com
3. Connectez votre Gmail dans "Email Services"
4. Créez un template dans "Email Templates" 
5. Copiez vos 3 identifiants
6. Remplacez les valeurs ci-dessus
7. Renommez ce fichier en "emailjs-config.js"

🎯 TEMPLATE RECOMMANDÉ:
Subject: Nouveau message de {{subject}} - Portfolio Sage Dimumbe

Body: 
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
  <h2 style="color: #333;">💌 Nouveau message depuis votre Portfolio</h2>
  
  <div style="background: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
    <h3 style="color: #2196F3; margin-top: 0;">Détails du contact :</h3>
    <p><strong>👤 Nom :</strong> {{from_name}}</p>
    <p><strong>📧 Email :</strong> {{from_email}}</p>
    <p><strong>📌 Sujet :</strong> {{subject}}</p>
  </div>
  
  <div style="background: white; padding: 20px; border: 1px solid #e9ecef; border-radius: 5px;">
    <h3 style="color: #333;">📝 Message :</h3>
    <p style="line-height: 1.6;">{{message}}</p>
  </div>
  
  <hr style="margin: 30px 0;">
  <p style="color: #666; font-size: 14px; text-align: center;">
    ✅ Ce message a été envoyé depuis votre site web portfolio.<br>
    🌐 https://kadea-academy-learners.github.io/Portfolio-sage/
  </p>
</div>

📧 DESTINATION: Tous les messages arriveront dans Sagedimumbe7@gmail.com
✅ GRATUIT: 200 emails par mois
🔒 SÉCURISÉ: Pas de serveur requis
*/
