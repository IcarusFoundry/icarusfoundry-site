// Minimal JS: set active nav based on current path (works for simple static hosting)
(() => {
  const path = (location.pathname || '/').toLowerCase();
  document.querySelectorAll('[data-nav]').forEach(a => {
    const href = (a.getAttribute('href') || '').toLowerCase();
    if (href && (path.endsWith(href) || (href === 'index.html' && (path === '/' || path.endsWith('/index.html'))))) {
      a.setAttribute('aria-current','page');
    }
  });
})();
