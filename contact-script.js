document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container');
    
    // Vérifier si il y a un paramètre de succès dans l'URL
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === '1') {
        showSuccessMessage();
        // Supprimer le paramètre de l'URL sans recharger la page
        const newUrl = window.location.origin + window.location.pathname;
        window.history.replaceState({}, document.title, newUrl);
    }
    
    // Fonction pour afficher un message de succès
    function showSuccessMessage() {
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
    
    // Ajouter de l'interactivité au bouton d'envoi
    const form = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit-btn');
    
    if (form && submitBtn) {
        form.addEventListener('submit', function() {
            submitBtn.textContent = 'Envoi en cours...';
            submitBtn.disabled = true;
            submitBtn.style.opacity = '0.6';
        });
    }
});
