const current = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav a').forEach(link => { if (link.getAttribute('href') === current) link.setAttribute('aria-current', 'page'); });
document.querySelectorAll('[data-print]').forEach(button => button.addEventListener('click', () => window.print()));
