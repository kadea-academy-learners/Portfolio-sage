/* ==========================================================
   navbar.js — injecte la barre de navigation sur chaque page
   ========================================================== */
(function () {
  if (document.getElementById('siteNav')) {
    return;
  }

  const pages = [
    { href: 'index.html', label: 'Accueil', match: ['', 'index.html'] },
    { href: 'cv.html', label: 'CV', match: ['cv.html'] },
    { href: 'projet.html', label: 'Projets', match: ['projet.html'] },
    { href: 'contact.html', label: 'Contact', match: ['contact.html'] }
  ];

  const currentFile = location.pathname.split('/').pop() || 'index.html';

  const linksHTML = pages.map(function (page) {
    const isActive = page.match.includes(currentFile);
    return '<li><a href="' + page.href + '"' +
      (isActive ? ' class="is-active" aria-current="page"' : '') +
      '>' + page.label + '</a></li>';
  }).join('');

  const navHTML =
    '<nav class="site-nav" id="siteNav">' +
      '<div class="site-nav__inner">' +
        '<a href="index.html" class="site-nav__brand" aria-label="Accueil - Sage Dimumbe">' +
          '<span class="site-nav__badge">SD</span>' +
          '<span class="site-nav__name">Sage Dimumbe</span>' +
        '</a>' +
        '<button class="site-nav__toggle" id="navToggle" type="button" aria-expanded="false" aria-controls="navMenu" aria-label="Ouvrir le menu">' +
          '<span></span><span></span><span></span>' +
        '</button>' +
        '<ul class="site-nav__menu" id="navMenu">' + linksHTML + '</ul>' +
      '</div>' +
    '</nav>';

  document.body.insertAdjacentHTML('afterbegin', navHTML);

  const nav = document.getElementById('siteNav');
  const toggle = document.getElementById('navToggle');
  const menu = document.getElementById('navMenu');

  function closeMenu() {
    menu.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  }

  toggle.addEventListener('click', function () {
    const isOpen = menu.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  menu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && menu.classList.contains('is-open')) {
      closeMenu();
    }
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth >= 768) {
      closeMenu();
    }
  });

  function onScroll() {
    nav.classList.toggle('is-scrolled', window.scrollY > 8);
  }

  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
})();
