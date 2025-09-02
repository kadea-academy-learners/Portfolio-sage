document.addEventListener('DOMContentLoaded', function() {
    const submitBtn = document.getElementById('submit-btn');
    const form = document.querySelector('.container');
    
    // Fonction pour valider les champs du formulaire
    function validateForm() {
        const inputs = form.querySelectorAll('input[type="text"], input[type="email"], textarea');
        let isValid = true;
        
        inputs.forEach(input => {
            const value = input.value.trim();
            const parent = input.closest('.form-group');
            
            // Supprimer les messages d'erreur existants
            const existingError = parent.querySelector('.error-message');
            if (existingError) {
                existingError.remove();
            }
            
            // Vérifier si le champ est vide
            if (value === '') {
                showError(parent, 'Ce champ est obligatoire');
                isValid = false;
            } else if (input.type === 'email' && !isValidEmail(value)) {
                showError(parent, 'Veuillez entrer une adresse email valide');
                isValid = false;
            }
        });
        
        return isValid;
    }
    
    // Fonction pour afficher les erreurs
    function showError(parent, message) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        errorDiv.style.color = '#e74c3c';
        errorDiv.style.fontSize = '0.9rem';
        errorDiv.style.marginTop = '5px';
        parent.appendChild(errorDiv);
    }
    
    // Fonction pour valider l'email
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Fonction pour afficher un message de succès
    function showSuccessMessage() {
        // Créer le message de succès
        const successDiv = document.createElement('div');
        successDiv.className = 'success-message';
        successDiv.innerHTML = `
            <div style="
                background-color: #d4edda;
                color: #155724;
                padding: 15px;
                border-radius: 5px;
                border: 1px solid #c3e6cb;
                margin: 20px 0;
                text-align: center;
                font-weight: bold;
            ">
                <i class="fas fa-check-circle" style="margin-right: 10px;"></i>
                Message envoyé avec succès ! Nous vous répondrons bientôt.
            </div>
        `;
        
        // Insérer le message au début du formulaire
        form.insertBefore(successDiv, form.firstChild);
        
        // Faire défiler vers le message
        successDiv.scrollIntoView({ behavior: 'smooth' });
        
        // Supprimer le message après 5 secondes
        setTimeout(() => {
            successDiv.remove();
        }, 5000);
        
        // Réinitialiser le formulaire
        resetForm();
    }
    
    // Fonction pour réinitialiser le formulaire
    function resetForm() {
        const inputs = form.querySelectorAll('input[type="text"], input[type="email"], textarea');
        inputs.forEach(input => {
            input.value = '';
        });
    }
    
    // Gestionnaire d'événement pour le bouton d'envoi
    submitBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Valider le formulaire
        if (validateForm()) {
            // Simuler l'envoi (en réalité, vous devriez envoyer à un serveur)
            submitBtn.textContent = 'Envoi en cours...';
            submitBtn.disabled = true;
            
            // Simuler un délai d'envoi
            setTimeout(() => {
                showSuccessMessage();
                submitBtn.textContent = 'Envoyer';
                submitBtn.disabled = false;
            }, 1500);
        }
    });
    
    // Supprimer les messages d'erreur lors de la saisie
    const inputs = form.querySelectorAll('input[type="text"], input[type="email"], textarea');
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            const parent = input.closest('.form-group');
            const errorMessage = parent.querySelector('.error-message');
            if (errorMessage) {
                errorMessage.remove();
            }
        });
    });
});
