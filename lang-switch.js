function switchLang(lang) {
    const elements = document.querySelectorAll('[data-th]');
    elements.forEach(el => {
      el.textContent = el.dataset[lang];
    });
  }
  