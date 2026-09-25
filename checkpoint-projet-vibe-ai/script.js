// ===== Gestion du thème =====
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

// Charger le thème sauvegardé (ou respecter la préférence système)
const savedTheme = localStorage.getItem('theme') ||
  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
html.setAttribute('data-theme', savedTheme);

themeToggle.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  const next = current === 'light' ? 'dark' : 'light';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
});

// ===== Animation au clic sur "Acheter" =====
document.querySelectorAll('.btn-buy').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    btn.textContent = '✓ Ajouté';
    btn.style.background = '#10b981';
    setTimeout(() => {
      btn.textContent = 'Acheter';
      btn.style.background = '';
    }, 1500);
  });
});