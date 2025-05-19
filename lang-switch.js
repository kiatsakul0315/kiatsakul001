function switchLang(lang) {
    document.querySelectorAll('[data-th], [data-en]').forEach(el => {
      el.textContent = el.dataset[lang];
    });
  }
  