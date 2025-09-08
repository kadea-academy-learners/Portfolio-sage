// Navigation standardisée pour tout le site
function createNavbar() {
    const navbarHTML = `
        <div class="header-container">
            <div class="name">Sage Dimumbe</div>
            
            <!-- Menu Burger -->
            <div class="menu-toggle" id="mobile-menu">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>

            <nav class="nav-links" id="navLinks">
                <a href="index.html">Accueil</a>
                <a href="cv.html">CV</a>
                <a href="projet.html">Projets</a>
                <a href="contact.html">Contact</a>
            </nav>
        </div>
    `;
    
    // Insérer la navbar au début du body
    document.body.insertAdjacentHTML('afterbegin', navbarHTML);
    
    // Initialiser le menu burger
    initializeMobileMenu();
    
    // Marquer la page active
    markActivePage();
}

function initializeMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('navLinks');
    
    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }
}

function markActivePage() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// Initialiser la navbar quand le DOM est chargé
document.addEventListener('DOMContentLoaded', createNavbar);
