document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('navLinks');
    
    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
        
        // Animation des barres du burger
        const bars = document.querySelectorAll('.bar');
        bars.forEach(bar => bar.classList.toggle('active'));
        
        // Bloquer le défilement quand le menu est ouvert
        if (navLinks.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });
    
    // Fermer le menu quand on clique sur un lien
    const navItems = document.querySelectorAll('nav a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
            
            // Réinitialiser l'animation des barres
            const bars = document.querySelectorAll('.bar');
            bars.forEach(bar => bar.classList.remove('active'));
        });
    });
})