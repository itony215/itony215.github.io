// Store only checklist state on this device; no network requests.
document.querySelectorAll('[data-tour-check]').forEach(input => {
  const key = 'iceland-2026-tour-' + input.dataset.tourCheck;
  try { input.checked = localStorage.getItem(key) === 'done'; } catch (_) {}
  input.addEventListener('change', () => {
    try { localStorage.setItem(key, input.checked ? 'done' : ''); } catch (_) {}
  });
});
