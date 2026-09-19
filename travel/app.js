const current = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav a').forEach((link) => {
  const href = link.getAttribute('href');
  if (href === current || (current === '' && href === 'index.html')) link.setAttribute('aria-current', 'page');
});

const calculator = document.querySelector('[data-calculator]');
if (calculator) {
  const people = calculator.querySelector('#people');
  const flight = calculator.querySelector('#flight');
  const cityStay = calculator.querySelector('#city-stay');
  const output = calculator.querySelector('#total');
  const perPerson = calculator.querySelector('#per-person');
  const sharedPerPerson = 1078 + 179 + 70 + 120 + 70;
  const update = () => {
    const count = Math.max(1, Number(people.value) || 1);
    const total = count * (Number(flight.value) + sharedPerPerson) + Number(cityStay.value);
    output.textContent = `USD ${Math.round(total).toLocaleString('en-US')}`;
    perPerson.textContent = `每人約 USD ${Math.round(total / count).toLocaleString('en-US')}，未含午晚餐與購物`;
  };
  calculator.addEventListener('input', update);
  update();
}

document.querySelectorAll('[data-print]').forEach((button) => button.addEventListener('click', () => window.print()));
