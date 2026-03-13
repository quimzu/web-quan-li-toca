/* ═══════════════════════════════════════════════
   QUAN LI TOCA — Blog i18n engine
   ═══════════════════════════════════════════════ */

let blogCurrentLang = localStorage.getItem('qlang') || 'ca';

function applyBlogLang(lang) {
  if (!window.BLOG_TRANSLATIONS || !window.BLOG_TRANSLATIONS[lang]) return;
  blogCurrentLang = lang;
  localStorage.setItem('qlang', lang);
  const t = window.BLOG_TRANSLATIONS[lang];

  document.documentElement.lang = lang;
  if (t._title)       document.title = t._title;
  if (t._desc) {
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', t._desc);
  }
  if (t._ogTitle) {
    const og = document.querySelector('meta[property="og:title"]');
    if (og) og.setAttribute('content', t._ogTitle);
  }

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  document.querySelectorAll('[data-i18n-href]').forEach(el => {
    const key = el.dataset.i18nHref;
    if (t[key] !== undefined) el.setAttribute('href', t[key]);
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

function initBlogI18n() {
  const urlLang = new URLSearchParams(location.search).get('lang');
  if (urlLang && window.BLOG_TRANSLATIONS && window.BLOG_TRANSLATIONS[urlLang]) {
    blogCurrentLang = urlLang;
  }
  applyBlogLang(blogCurrentLang);
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyBlogLang(btn.dataset.lang));
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initBlogI18n);
} else {
  initBlogI18n();
}
