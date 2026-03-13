#!/usr/bin/env node
/* ═══════════════════════════════════════════════
   QUAN LI TOCA — Blog build script
   Usage: node blog/build.js

   Reads  blog/posts/*.md  →  generates blog/*.html + blog/index.html

   Post format:
     KEY: value         (metadata lines)
     ===CA===           (Catalan content in Markdown)
     ===ES===           (Spanish content)
     ===EN===           (English content)
   ═══════════════════════════════════════════════ */

const fs   = require('fs');
const path = require('path');

// ── Tiny Markdown → HTML converter ───────────────
function mdToHtml(md) {
  if (!md || !md.trim()) return '';
  const blocks = md.trim().split(/\n{2,}/);
  const out = [];
  for (const block of blocks) {
    const lines = block.trim().split('\n').map(l => l.trim()).filter(Boolean);
    if (!lines.length) continue;
    const first = lines[0];
    if      (first.startsWith('## '))  out.push(`<h2>${inl(first.slice(3))}</h2>`);
    else if (first.startsWith('### ')) out.push(`<h3>${inl(first.slice(4))}</h3>`);
    else if (first.startsWith('> '))   out.push(`<div class="blog-callout">${lines.map(l => inl(l.replace(/^>\s?/, ''))).join(' ')}</div>`);
    else if (first.startsWith('- '))   out.push(`<ul>\n${lines.filter(l => l.startsWith('- ')).map(l => `  <li>${inl(l.slice(2))}</li>`).join('\n')}\n</ul>`);
    else                                out.push(`<p>${lines.map(l => inl(l)).join(' ')}</p>`);
  }
  return out.join('\n');
}

function inl(t) {
  return (t || '')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>');
}

function esc(s)    { return (s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
function escj(s)   { return (s||'').replace(/\\/g,'\\\\').replace(/"/g,'\\"').replace(/\n/g,'\\n').replace(/\r/g,''); }

// ── Parse a .md post file ─────────────────────────
function parsePost(filepath) {
  const raw = fs.readFileSync(filepath, 'utf8');
  const [header, rest = ''] = raw.split(/^===CA===/m);
  const meta = {};
  for (const line of header.trim().split('\n')) {
    const m = line.match(/^([A-Z_0-9]+):\s*(.+)$/);
    if (m) meta[m[1]] = m[2].trim();
  }
  const [caRaw = '', esRest = ''] = rest.split(/^===ES===/m);
  const [esRaw = '', enRaw  = ''] = esRest.split(/^===EN===/m);
  return {
    meta,
    ca: mdToHtml(caRaw),
    es: mdToHtml(esRaw),
    en: mdToHtml(enRaw),
    slug: meta.SLUG,
    filename: meta.SLUG + '.html',
  };
}

// ── Generate a post HTML file ─────────────────────
function postHtml(post) {
  const { meta, slug } = post;
  const imgUrl = `${meta.IMAGE}?auto=format&fit=crop&w=1200&h=620&q=80`;
  const ogImg  = `${meta.IMAGE}?auto=format&fit=crop&w=1200&h=630&q=80`;
  return `<!doctype html>
<html lang="ca">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>${esc(meta.TITLE_CA)} | Quan Li Toca</title>
  <meta name="description" content="${esc(meta.DESC_CA)}"/>
  <meta property="og:type"        content="article"/>
  <meta property="og:url"         content="https://quantiloca.com/blog/${slug}.html"/>
  <meta property="og:title"       content="${esc(meta.TITLE_CA)} | Quan Li Toca"/>
  <meta property="og:description" content="${esc(meta.DESC_CA)}"/>
  <meta property="og:image"       content="${ogImg}"/>
  <link rel="canonical"  href="https://quantiloca.com/blog/${slug}.html"/>
  <link rel="alternate" hreflang="ca" href="https://quantiloca.com/blog/${slug}.html"/>
  <link rel="alternate" hreflang="es" href="https://quantiloca.com/blog/${slug}.html?lang=es"/>
  <link rel="alternate" hreflang="en" href="https://quantiloca.com/blog/${slug}.html?lang=en"/>
  <link rel="icon" type="image/png" sizes="192x192" href="/icons/icon-192.png"/>
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,300;0,600;0,700;1,400&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet"/>
  <link rel="stylesheet" href="blog.css"/>
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "${escj(meta.TITLE_CA)}",
    "description": "${escj(meta.DESC_CA)}",
    "image": "${ogImg}",
    "author": { "@type": "Organization", "name": "Quan Li Toca" },
    "publisher": { "@type": "Organization", "name": "Quan Li Toca", "url": "https://quantiloca.com" },
    "datePublished": "${meta.DATE}",
    "dateModified": "${meta.MODIFIED || meta.DATE}",
    "inLanguage": "ca",
    "url": "https://quantiloca.com/blog/${slug}.html"
  }
  </script>
</head>
<body>
<nav class="blog-nav">
  <a href="/" class="blog-nav-logo">
    <img src="/icons/icon-192.png" alt="QLT" onerror="this.style.display='none'">
    <span data-i18n="nav_brand">Quan Li Toca</span>
  </a>
  <div class="blog-nav-right">
    <div class="lang-switcher">
      <button class="lang-btn active" data-lang="ca">CA</button>
      <button class="lang-btn" data-lang="es">ES</button>
      <button class="lang-btn" data-lang="en">EN</button>
    </div>
    <a href="https://app.quantiloca.com" class="nav-cta" data-i18n="nav_cta">Accedir →</a>
  </div>
</nav>
<article>
  <header class="blog-hero">
    <span class="blog-kicker" data-i18n="kicker">${esc(meta.KICKER_CA)}</span>
    <h1 class="blog-h1" data-i18n="h1">${esc(meta.TITLE_CA)}</h1>
    <div class="blog-meta">
      <span data-i18n="author">${esc(meta.AUTHOR_CA || "Per l'equip de Quan Li Toca")}</span>
      <span class="blog-meta-dot"></span>
      <span data-i18n="date">${esc(meta.DATE_CA || meta.DATE)}</span>
      <span class="blog-meta-dot"></span>
      <span data-i18n="readtime">${esc(meta.READTIME_CA)}</span>
    </div>
    <div class="blog-hero-img">
      <img src="${imgUrl}" alt="${esc(meta.IMAGE_ALT_CA)}" loading="eager"/>
    </div>
  </header>
  <div class="blog-body">
    <div data-i18n-html="body">
${post.ca}
    </div>
    <div class="blog-cta-box">
      <h3 data-i18n="cta_title">${esc(meta.CTA_TITLE_CA)}</h3>
      <p data-i18n="cta_desc">${esc(meta.CTA_DESC_CA)}</p>
      <a href="https://app.quantiloca.com" class="btn-primary" data-i18n="cta_btn">${esc(meta.CTA_BTN_CA)}</a>
    </div>
  </div>
</article>
<footer class="blog-footer">
  <div class="blog-footer-logo">Quan Li Toca</div>
  <div data-i18n="footer_tag">Fet amb ❤️ per pares, per a pares.</div>
  <div>
    <a href="/" data-i18n="footer_home">Inici</a>
    &nbsp;·&nbsp;
    <a href="/blog/index.html" data-i18n="footer_blog">Blog</a>
    &nbsp;·&nbsp;
    <a href="https://app.quantiloca.com/#privacy" data-i18n="footer_privacy">Privacitat</a>
  </div>
</footer>
<script>
window.BLOG_TRANSLATIONS = {
  ca: {
    _title: ${JSON.stringify(meta.TITLE_CA + ' | Quan Li Toca')},
    _desc:  ${JSON.stringify(meta.DESC_CA)},
    nav_brand: 'Quan Li Toca', nav_cta: 'Accedir →',
    kicker:   ${JSON.stringify(meta.KICKER_CA)},
    h1:       ${JSON.stringify(meta.TITLE_CA)},
    author:   ${JSON.stringify(meta.AUTHOR_CA || "Per l'equip de Quan Li Toca")},
    date:     ${JSON.stringify(meta.DATE_CA || meta.DATE)},
    readtime: ${JSON.stringify(meta.READTIME_CA)},
    body:     ${JSON.stringify(post.ca)},
    cta_title: ${JSON.stringify(meta.CTA_TITLE_CA)},
    cta_desc:  ${JSON.stringify(meta.CTA_DESC_CA)},
    cta_btn:   ${JSON.stringify(meta.CTA_BTN_CA)},
    footer_tag: 'Fet amb ❤️ per pares, per a pares.', footer_home: 'Inici', footer_blog: 'Blog', footer_privacy: 'Privacitat',
  },
  es: {
    _title: ${JSON.stringify(meta.TITLE_ES + ' | Quan Li Toca')},
    _desc:  ${JSON.stringify(meta.DESC_ES)},
    nav_brand: 'Quan Li Toca', nav_cta: 'Acceder →',
    kicker:   ${JSON.stringify(meta.KICKER_ES)},
    h1:       ${JSON.stringify(meta.TITLE_ES)},
    author:   ${JSON.stringify(meta.AUTHOR_ES || 'Por el equipo de Quan Li Toca')},
    date:     ${JSON.stringify(meta.DATE_ES || meta.DATE)},
    readtime: ${JSON.stringify(meta.READTIME_ES)},
    body:     ${JSON.stringify(post.es)},
    cta_title: ${JSON.stringify(meta.CTA_TITLE_ES)},
    cta_desc:  ${JSON.stringify(meta.CTA_DESC_ES)},
    cta_btn:   ${JSON.stringify(meta.CTA_BTN_ES)},
    footer_tag: 'Hecho con ❤️ por padres, para padres.', footer_home: 'Inicio', footer_blog: 'Blog', footer_privacy: 'Privacidad',
  },
  en: {
    _title: ${JSON.stringify(meta.TITLE_EN + ' | Quan Li Toca')},
    _desc:  ${JSON.stringify(meta.DESC_EN)},
    nav_brand: 'Quan Li Toca', nav_cta: 'Sign in →',
    kicker:   ${JSON.stringify(meta.KICKER_EN)},
    h1:       ${JSON.stringify(meta.TITLE_EN)},
    author:   ${JSON.stringify(meta.AUTHOR_EN || 'By the Quan Li Toca team')},
    date:     ${JSON.stringify(meta.DATE_EN || meta.DATE)},
    readtime: ${JSON.stringify(meta.READTIME_EN)},
    body:     ${JSON.stringify(post.en)},
    cta_title: ${JSON.stringify(meta.CTA_TITLE_EN)},
    cta_desc:  ${JSON.stringify(meta.CTA_DESC_EN)},
    cta_btn:   ${JSON.stringify(meta.CTA_BTN_EN)},
    footer_tag: 'Made with ❤️ by parents, for parents.', footer_home: 'Home', footer_blog: 'Blog', footer_privacy: 'Privacy',
  }
};
</script>
<script src="blog.js"></script>
</body>
</html>`;
}

// ── Generate blog/index.html ──────────────────────
function indexHtml(posts) {
  function cards(lang) {
    return posts.map((p, i) => {
      const m = p.meta;
      const delay = ['reveal-delay-1','reveal-delay-2','reveal-delay-3','reveal-delay-1'];
      const kicker = m[`KICKER_${lang.toUpperCase()}`];
      const title  = m[`TITLE_${lang.toUpperCase()}`];
      const desc   = m[`DESC_${lang.toUpperCase()}`];
      return `
    <a href="/blog/${p.slug}.html" class="blog-list-card reveal ${delay[i % 4]}">
      <div class="blog-list-img">
        <img src="${m.IMAGE}?auto=format&fit=crop&w=600&h=400&q=80" alt="${esc(m[`IMAGE_ALT_${lang.toUpperCase()}`] || title)}" loading="lazy">
      </div>
      <div class="blog-list-body">
        <div class="blog-list-kicker" data-i18n="card${i+1}_kicker">${esc(kicker)}</div>
        <h2 data-i18n="card${i+1}_title">${esc(title)}</h2>
        <p data-i18n="card${i+1}_desc">${esc(desc)}</p>
        <span class="blog-list-read" data-i18n="read_more">Llegir →</span>
      </div>
    </a>`;
    }).join('');
  }

  function translationsObj(lang, label, navCta, readMore, footerTag, footerHome, footerApp, footerPrivacy) {
    const keys = {};
    posts.forEach((p, i) => {
      const m = p.meta;
      const L = lang.toUpperCase();
      keys[`card${i+1}_kicker`] = m[`KICKER_${L}`] || '';
      keys[`card${i+1}_title`]  = m[`TITLE_${L}`]  || '';
      keys[`card${i+1}_desc`]   = m[`DESC_${L}`]   || '';
    });
    return JSON.stringify({
      _title: `Blog — Quan Li Toca · ${label}`,
      nav_brand: 'Quan Li Toca', nav_cta: navCta,
      listing_kicker: 'Blog',
      listing_title: lang === 'ca' ? 'Consells per a <em>nous pares.</em>'
                   : lang === 'es' ? 'Consejos para <em>nuevos padres.</em>'
                   : 'Tips for <em>new parents.</em>',
      listing_sub: lang === 'ca' ? 'Articles escrits per pares, per a pares. Pràctics, honests i sense floritures.'
                 : lang === 'es' ? 'Artículos escritos por padres, para padres. Prácticos, honestos y sin rodeos.'
                 : 'Articles written by parents, for parents. Practical, honest and no-nonsense.',
      read_more: readMore,
      footer_tag: footerTag, footer_home: footerHome, footer_app: footerApp, footer_privacy: footerPrivacy,
      ...keys,
    }, null, 2);
  }

  return `<!doctype html>
<html lang="ca">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Blog — Quan Li Toca · Consells per a nous pares</title>
  <meta name="description" content="Articles pràctics per a pares de nadons: registre de tomes, corba de creixement, sincronització en parella i molt més."/>
  <meta property="og:type"  content="website"/>
  <meta property="og:url"   content="https://quantiloca.com/blog/index.html"/>
  <meta property="og:title" content="Blog Quan Li Toca — Consells per a nous pares"/>
  <meta property="og:image" content="https://quantiloca.com/og-image.png"/>
  <link rel="canonical" href="https://quantiloca.com/blog/index.html"/>
  <link rel="alternate" hreflang="ca" href="https://quantiloca.com/blog/index.html"/>
  <link rel="alternate" hreflang="es" href="https://quantiloca.com/blog/index.html?lang=es"/>
  <link rel="alternate" hreflang="en" href="https://quantiloca.com/blog/index.html?lang=en"/>
  <link rel="icon" type="image/png" sizes="192x192" href="/icons/icon-192.png"/>
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,300;0,600;0,700;1,400&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet"/>
  <link rel="stylesheet" href="blog.css"/>
</head>
<body>
<nav class="blog-nav">
  <a href="/" class="blog-nav-logo">
    <img src="/icons/icon-192.png" alt="QLT" onerror="this.style.display='none'">
    <span data-i18n="nav_brand">Quan Li Toca</span>
  </a>
  <div class="blog-nav-right">
    <div class="lang-switcher">
      <button class="lang-btn active" data-lang="ca">CA</button>
      <button class="lang-btn" data-lang="es">ES</button>
      <button class="lang-btn" data-lang="en">EN</button>
    </div>
    <a href="https://app.quantiloca.com" class="nav-cta" data-i18n="nav_cta">Accedir →</a>
  </div>
</nav>
<main class="blog-listing">
  <header class="blog-listing-header">
    <div class="blog-kicker" data-i18n="listing_kicker">Blog</div>
    <h1 class="blog-listing-title" data-i18n-html="listing_title">Consells per a <em>nous pares.</em></h1>
    <p class="blog-listing-sub" data-i18n="listing_sub">Articles escrits per pares, per a pares. Pràctics, honests i sense floritures.</p>
  </header>
  <div class="blog-listing-grid">
${cards('ca')}
  </div>
</main>
<footer class="blog-footer">
  <div class="blog-footer-logo">Quan Li Toca</div>
  <div data-i18n="footer_tag">Fet amb ❤️ per pares, per a pares.</div>
  <div>
    <a href="/" data-i18n="footer_home">Inici</a>
    &nbsp;·&nbsp;
    <a href="https://app.quantiloca.com" data-i18n="footer_app">Accedir</a>
    &nbsp;·&nbsp;
    <a href="https://app.quantiloca.com/#privacy" data-i18n="footer_privacy">Privacitat</a>
  </div>
</footer>
<script>
window.BLOG_TRANSLATIONS = {
  ca: ${translationsObj('ca','Consells per a nous pares','Accedir →','Llegir →','Fet amb ❤️ per pares, per a pares.','Inici','Accedir','Privacitat')},
  es: ${translationsObj('es','Consejos para nuevos padres','Acceder →','Leer →','Hecho con ❤️ por padres, para padres.','Inicio','Acceder','Privacidad')},
  en: ${translationsObj('en','Tips for new parents','Sign in →','Read →','Made with ❤️ by parents, for parents.','Home','Sign in','Privacy')}
};
</script>
<script src="blog.js"></script>
</body>
</html>`;
}

// ── Main ──────────────────────────────────────────
const postsDir = path.join(__dirname, 'posts');
const outDir   = __dirname;

const mdFiles = fs.readdirSync(postsDir)
  .filter(f => f.endsWith('.md'))
  .sort();

if (!mdFiles.length) {
  console.error('No .md files found in blog/posts/');
  process.exit(1);
}

const posts = mdFiles.map(f => parsePost(path.join(postsDir, f)));

for (const post of posts) {
  const html    = postHtml(post);
  const outPath = path.join(outDir, post.filename);
  fs.writeFileSync(outPath, html);
  console.log(`✓  ${post.filename}`);
}

const idx     = indexHtml(posts);
fs.writeFileSync(path.join(outDir, 'index.html'), idx);
console.log('✓  index.html');
console.log(`\nDone — ${posts.length} posts + index generated.`);
