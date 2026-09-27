(() => {
  'use strict';
  const $ = selector => document.querySelector(selector);
  const cards = [...document.querySelectorAll('.project-card')];
  let filter = 'all';
  let language = 'en';
  const text = (en, th) => language === 'th' ? th : en;
  const photoKey = 'nattapong.profile-preview.v1';
  const input = $('#photo-input');
  const photo = $('#profile-photo');
  const message = $('#photo-message');
  let photoRequest = 0;

  function showPhoto(url) {
    photo.src = url;
    photo.hidden = false;
    $('#portrait-placeholder').hidden = true;
    $('#remove-photo').hidden = false;
  }
  $('.photo-editor').hidden = false;
  try {
    const stored = localStorage.getItem(photoKey);
    if (stored && /^data:image\/(png|jpeg|webp);base64,/.test(stored)) showPhoto(stored);
  } catch { /* Browser storage is optional. */ }

  input.addEventListener('change', async () => {
    const file = input.files[0];
    if (!file) return;
    const request = ++photoRequest;
    if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type) || file.size > 3 * 1024 * 1024) {
      message.textContent = text('Choose a JPG, PNG or WebP image under 3 MB.', 'กรุณาเลือกรูป JPG, PNG หรือ WebP ขนาดไม่เกิน 3 MB');
      input.value = '';
      return;
    }
    try {
      const url = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
      const image = new Image();
      image.src = url;
      await image.decode();
      if (request !== photoRequest) return;
      showPhoto(url);
      try {
        localStorage.setItem(photoKey, url);
        message.textContent = text('Photo saved in this browser only.', 'บันทึกรูปไว้ในเบราว์เซอร์นี้เท่านั้น');
      } catch {
        message.textContent = text('Photo preview ready. Browser storage is unavailable; it will reset on reload.', 'แสดงตัวอย่างแล้ว แต่บันทึกในเบราว์เซอร์ไม่ได้ รูปจะหายเมื่อรีโหลด');
      }
    } catch {
      message.textContent = text('This image could not be opened. Please try another file.', 'เปิดรูปนี้ไม่ได้ กรุณาเลือกไฟล์อื่น');
    }
    input.value = '';
  });
  $('#remove-photo').addEventListener('click', () => {
    ++photoRequest;
    try { localStorage.removeItem(photoKey); } catch { /* Still clear the visible preview. */ }
    photo.hidden = true;
    photo.removeAttribute('src');
    $('#portrait-placeholder').hidden = false;
    $('#remove-photo').hidden = true;
    message.textContent = text('Profile photo removed from this browser.', 'ลบรูปโปรไฟล์ออกจากเบราว์เซอร์นี้แล้ว');
  });

  function applyFilters() {
    const query = $('#project-search').value.trim().toLocaleLowerCase();
    let count = 0;
    cards.forEach((card) => {
      const matches = (filter === 'all' || card.dataset.project === filter) && card.textContent.toLocaleLowerCase().includes(query);
      card.hidden = !matches;
      if (matches) count++;
    });
    $('#project-count').textContent = text(`${count} of ${cards.length} projects`, `แสดง ${count} จาก ${cards.length} ผลงาน`);
    $('#project-empty').hidden = count !== 0;
  }
  $('.project-tools').hidden = false;
  document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
    filter = button.dataset.filter;
    document.querySelectorAll('[data-filter]').forEach(b => b.setAttribute('aria-pressed', String(b === button)));
    applyFilters();
  }));
  $('#project-search').addEventListener('input', applyFilters);
  $('#reset-filters').addEventListener('click', () => {
    $('#project-search').value = '';
    $('[data-filter="all"]').click();
    $('#project-search').focus();
  });
  applyFilters();

  // Translate visible text nodes, preserving native controls, focus, and disclosure state.
  const translations = new Map(Object.entries(TRANSLATIONS));
  const original = new Map();
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (['SCRIPT', 'STYLE'].includes(node.parentElement?.tagName)) continue;
    const key = node.textContent.trim();
    if (translations.has(key)) original.set(node, node.textContent);
  }
  const toggle = $('#language-toggle');
  function setLanguage(next) {
    language = next;
    document.documentElement.lang = next;
    original.forEach((value, node) => { node.textContent = next === 'th' ? value.replace(value.trim(), translations.get(value.trim())) : value; });
    toggle.textContent = next === 'en' ? 'TH' : 'EN';
    toggle.setAttribute('aria-label', next === 'en' ? 'Switch to Thai' : 'Switch to English');
    $('#project-search').placeholder = text('Try Next.js or automation', 'ลองค้นหา Next.js หรือ automation');
    applyFilters();
    try { localStorage.setItem('portfolio.language', next); } catch { /* Optional preference. */ }
  }
  toggle.hidden = false;
  toggle.addEventListener('click', () => setLanguage(language === 'en' ? 'th' : 'en'));
  try { if (localStorage.getItem('portfolio.language') === 'th') setLanguage('th'); } catch { /* Default English. */ }

  const pause = $('#pause-motion');
  try { pause.checked = localStorage.getItem('portfolio.pause') === 'true'; } catch { /* Default animation. */ }
  pause.addEventListener('change', () => { try { localStorage.setItem('portfolio.pause', String(pause.checked)); } catch { /* Optional preference. */ } });
})();
