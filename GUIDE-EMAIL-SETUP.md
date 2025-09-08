# 📧 Guide de Configuration EmailJS pour votre Portfolio

Ce guide vous explique comment connecter votre formulaire de contact à votre adresse Gmail pour recevoir les messages directement dans votre boîte mail.

## 🚀 Étapes de Configuration

### 1. Créer un compte EmailJS

1. Allez sur [https://www.emailjs.com/](https://www.emailjs.com/)
2. Cliquez sur "Sign Up" pour créer un compte gratuit
3. Confirmez votre email

### 2. Configurer votre service email

1. Dans le dashboard EmailJS, allez à "Email Services"
2. Cliquez sur "Add New Service"
3. Choisissez "Gmail" (ou votre fournisseur d'email)
4. Suivez les instructions pour connecter votre compte Gmail
5. Notez votre **Service ID** (ex: `service_xxxxxxx`)

### 3. Créer un template d'email

1. Allez à "Email Templates" dans le dashboard
2. Cliquez sur "Create New Template"
3. Configurez votre template avec ces paramètres :

**Template Name:** Portfolio Contact Form

**Subject:** `Nouveau message de {{subject}} - Portfolio Sage Dimumbe`

**Content (HTML):**
```html
<p>Bonjour Sage,</p>

<p>Vous avez reçu un nouveau message depuis votre portfolio :</p>

<ul>
  <li><strong>De :</strong> {{from_name}}</li>
  <li><strong>Email :</strong> {{from_email}}</li>
  <li><strong>Sujet :</strong> {{subject}}</li>
</ul>

<p><strong>Message :</strong></p>
<p>{{message}}</p>

<hr>
<p><em>Ce message a été envoyé depuis votre site web.</em></p>
```

4. Sauvegardez et notez votre **Template ID** (ex: `template_xxxxxxx`)

### 4. Obtenir votre clé publique

1. Allez à "Account" → "General"
2. Trouvez votre **Public Key** (ex: `xxxxxxxxx`)

### 5. Configurer les paramètres dans votre projet

Ouvrez le fichier `emailjs-config.js` et remplacez les valeurs :

```javascript
const EMAILJS_CONFIG = {
    PUBLIC_KEY: 'votre_public_key_ici',
    SERVICE_ID: 'votre_service_id_ici', 
    TEMPLATE_ID: 'votre_template_id_ici'
};
```

## 📋 Exemple de configuration complète

```javascript
const EMAILJS_CONFIG = {
    PUBLIC_KEY: 'abcdef123456',
    SERVICE_ID: 'service_gmail_123', 
    TEMPLATE_ID: 'template_portfolio_456'
};
```

## 🧪 Test de votre configuration

1. Publiez vos modifications sur GitHub
2. Visitez votre site web
3. Remplissez le formulaire de contact
4. Vérifiez votre boîte Gmail pour recevoir le message

## ❗ Important

- Le plan gratuit d'EmailJS permet **200 emails/mois**
- Gardez vos identifiants sécurisés
- Ne partagez jamais vos clés privées
- Les clés publiques peuvent être visibles dans votre code

## 🔧 Dépannage

**Erreur "Service not found":** Vérifiez votre SERVICE_ID
**Erreur "Template not found":** Vérifiez votre TEMPLATE_ID  
**Erreur "Invalid public key":** Vérifiez votre PUBLIC_KEY
**Email non reçu:** Vérifiez vos spams et la configuration Gmail

## 📞 Support

En cas de problème, consultez la documentation EmailJS : https://www.emailjs.com/docs/
