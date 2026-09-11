document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('navLinks');

    if (!menuToggle || !navLinks) {
        return;
    }

    menuToggle.addEventListener('click', function () {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');

        const bars = document.querySelectorAll('.bar');
        bars.forEach(function (bar) {
            bar.classList.toggle('active');
        });

        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });

    const navItems = document.querySelectorAll('nav a');
    navItems.forEach(function (item) {
        item.addEventListener('click', function () {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';

            const bars = document.querySelectorAll('.bar');
            bars.forEach(function (bar) {
                bar.classList.remove('active');
            });
        });
    });
});