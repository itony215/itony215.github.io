const bookingTable = document.querySelector('#main-bookings');
if (bookingTable) {
  const rows = [...bookingTable.querySelectorAll('tbody tr')];
  const status = document.querySelector('#booking-status');
  const country = document.querySelector('#booking-country');
  const search = document.querySelector('#booking-search');
  for (const key of ['booked', 'unbooked', 'pending']) {
    document.querySelector(`#${key}-count`).textContent = `${rows.filter(row => row.dataset.status === key).length} 項`;
  }
  const update = () => {
    const query = search.value.trim().toLocaleLowerCase();
    let visible = 0;
    for (const row of rows) {
      const matchesStatus = status.value === 'all' || (status.value === 'todo' ? row.dataset.status !== 'booked' : row.dataset.status === status.value);
      const matchesCountry = country.value === 'all' || row.dataset.country.split(' ').includes(country.value);
      const matchesSearch = row.textContent.toLocaleLowerCase().includes(query);
      row.hidden = !(matchesStatus && matchesCountry && matchesSearch);
      if (!row.hidden) visible++;
    }
    document.querySelector('#booking-results').textContent = `顯示 ${visible} / ${rows.length} 項。篩選只作用於這張總表；列印會包含全部行程項目與待確認事項。`;
    document.querySelector('#booking-empty').hidden = visible > 0;
  };
  status.addEventListener('change', update);
  country.addEventListener('change', update);
  search.addEventListener('input', update);
  document.querySelector('#booking-reset').addEventListener('click', () => {
    status.value = 'all'; country.value = 'all'; search.value = ''; update();
  });
  update();
}
