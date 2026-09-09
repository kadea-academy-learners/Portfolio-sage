/* ==========================================================
   navbar.js — injecte la barre de navigation sur chaque page
   ========================================================== */
(function () {
  var pages = [
    { href: 'index.html', label: 'Accueil', match: ['', 'index.html'] },
    { href: 'cv.html', label: 'CV', match: ['cv.html'] },
    { href: 'projet.html', label: 'Projets', match: ['projet.html'] },
    { href: 'contact.html', label: 'Contact', match: ['contact.html'] }
  ];

  var currentFile = location.pathname.split('/').pop();

  var linksHTML = pages.map(function (p) {
    var isActive = p.match.indexOf(currentFile) !== -1;
    return '<li><a href="' + p.href + '"' +
      (isActive ? ' class="is-active" aria-current="page"' : '') +
      '>' + p.label + '</a></li>';
  }).join('');

  var navHTML =
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

  var nav = document.getElementById('siteNav');
  var toggle = document.getElementById('navToggle');
  var menu = document.getElementById('navMenu');

  toggle.addEventListener('click', function () {
    var isOpen = menu.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  menu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      menu.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth >= 768) {
      menu.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });

  function onScroll() {
    nav.classList.toggle('is-scrolled', window.scrollY > 8);
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
})();
