document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ Contact script chargé');
    
    // Vérifier si il y a un paramètre de succès dans l'URL
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === '1') {
        // Supprimer le paramètre de l'URL sans recharger la page
        const newUrl = window.location.origin + window.location.pathname;
        window.history.replaceState({}, document.title, newUrl);
    }
});
