(() => {
  const boxes = [...document.querySelectorAll('[data-gift]')];
  const status = document.getElementById('check-status');
  const key = 'nl-souvenirs-20261027';
  const read = () => { try { const v = JSON.parse(localStorage.getItem(key) || '[]'); return Array.isArray(v) ? v : []; } catch { return []; } };
  const saved = read();
  boxes.forEach(box => { box.checked = saved.includes(box.dataset.gift); });
  const update = () => {
    const values = boxes.filter(box => box.checked).map(box => box.dataset.gift);
    let available = true;
    try { localStorage.setItem(key, JSON.stringify(values)); } catch { available = false; }
    status.textContent = `已勾選 ${values.length}／${boxes.length} 項${available ? '，已儲存在此瀏覽器。' : '；此瀏覽器無法保存，重新開啟會重設。'}`;
  };
  boxes.forEach(box => box.addEventListener('change', update));
  document.getElementById('clear-gifts').addEventListener('click', () => { boxes.forEach(box => { box.checked = false; }); update(); });
  update();
})();
