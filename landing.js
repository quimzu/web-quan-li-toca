/* ═══════════════════════════════════════════════
   QUAN LI TOCA — Landing JS
   ═══════════════════════════════════════════════ */

/* ── I18N TRANSLATIONS ──────────────────────── */
const TRANSLATIONS = {
  ca: {
    _title: 'Quan Li Toca — Registre intel·ligent per al teu bebè',
    _desc:  'Registra tomes, cacades, siestas i creixement. Sincronitzat amb la teva parella en temps real. Gratuït, sense anuncis, sense venda de dades.',
    nav_cta: 'Accedir →',
    badge:    'Gratuït · Sense anuncis · Privat',
    h1:       'El registre del teu<em>bebè, en temps real.</em>',
    hero_sub: "Tomes, cacades, siestas i creixement — tot en un lloc, sincronitzat a l'instant amb la teva parella. Sense oblidar res a les 3 de la matinada.",
    cta_hero:  '🍼 Comença ara — és gratis',
    cta_ghost: 'Veure funcionalitats',
    story_label:   'La nostra història',
    story_title:   'Perquè les <em>primeres setmanes</em> ho canvien tot.',
    story_sub:     "Vam crear Quan Li Toca perquè el naixement del nostre fill ens va fer adonar que no existia cap app senzilla, gratuïta i en temps real per a parelles amb un nadó.",
    story1_kicker: 'Nit #1',
    story1_title:  'Esgotament i amor barrejats',
    story1_body:   "Li ha menjat fa 40 minuts o fa 2 hores? A les 4 de la matinada, el cervell no funciona. Necessitaves una app, no un bloc de notes.",
    story2_kicker: 'Setmana #2',
    story2_title:  'Dos pares, dos mòbils, un bebè',
    story2_body:   "Tu alletaves al sofà. Jo dormia a l'habitació. Ens enviàvem WhatsApps per saber si havia menjat. Hi havia d'haver una manera millor.",
    story3_kicker: 'Ara',
    story3_title:  'Tan simple que funciona a les 3h',
    story3_body:   "Un tap per registrar una toma. La teva parella ho veu a l'instant. El pediatre veu l'historial. Tu dorms tranquil.",
    feat_label:  'Funcionalitats',
    feat_title:  'Tot el que necessites,<em>res que no necessites.</em>',
    feat_sub:    "Dissenyat per pares que han viscut les nits amb un nadó a braços i un mòbil a la mà.",
    feat1_title: 'Registre de tomes en 1 tap',
    feat1_desc:  "Són les 3h. No recordes si el biberó era de 80 o 90ml. Amb un tap guardes hora, quantitat i font. L'app recorda per tu.",
    feat2_title: 'Compte enrere fins la propera toma',
    feat2_desc:  "Ha menjat fa 47 minuts? La propera toma sempre visible. Si s'ha passat, el comptador puja en vermell. Sense càlculs mentals a mitjanit.",
    feat3_title: 'Sincronització en temps real',
    feat3_desc:  'Tu al sofà, la teva parella a l\'habitació. Ella registra una toma i tu ja ho veus. Sense WhatsApps, sense crits, sense "ja ha menjat?".',
    feat4_title: 'Cacades, son i medicaments',
    feat4_desc:  "El pediatra pregunta quantes vegades ha cagat. Obres l'historial: 14 cops, color groc, consistència normal. Tot registrat en 2 dits.",
    feat5_title: 'Corba de creixement OMS',
    feat5_desc:  "3,2 kg al néixer. 4,8 kg a les 6 setmanes. La gràfica dels percentils de l'OMS actualitzada a cada pesada. I ml recomanats per fórmula calculats automàticament.",
    feat6_title: 'Edició i historial complet',
    feat6_desc:  'Vas posar 14:00 però eren les 15:00? Edita en un segon. Historial de tota la setmana, filtrat per tipus, per hores, per dies.',
    how_label:   'Com funciona',
    how_title:   "Llest en <em>menys d'un minut.</em>",
    how_sub:     "Sense instal·lació, sense targeta de crèdit, sense configuració complicada.",
    step1_title: 'Entra amb el teu email',
    step1_desc:  'Codi de 6 dígits al correu. Sense contrasenya que recordar. Primer accés en 30 segons.',
    step2_title: 'Crea el perfil del bebè',
    step2_desc:  'Nom, data de naixement i sexe. La corba de creixement es configura sola.',
    step3_title: 'Comparteix amb la parella',
    step3_desc:  "Codi de 6 caràcters. L'altra persona entra, introdueix el codi i ja veieu el mateix en temps real.",
    step4_title: "Instal·la com a app",
    step4_desc:  "Safari → Compartir → Afegir a pantalla d'inici. Funciona com una app nativa, fins i tot sense connexió.",
    rt_label:  'Sincronització',
    rt_title:  'Els dos ho veieu<em>a la vegada.</em>',
    rt_sub:    "Quan l'un registra una toma, l'altre ho veu en menys d'un segon. Sense actualitzar, sense esperar. Realtime real.",
    rt_pill1:  'Actualització instantània entre dispositius',
    rt_pill2:  'Funciona en iOS, Android i web',
    rt_pill3:  'Reconexió automàtica si es perd la senyal',
    priv_label: 'Privacitat',
    priv_title: 'Les dades del teu bebè<em>són teves.</em>',
    priv_sub:   'Les dades de salut del teu fill mereixen el màxim respecte. Cap anunci, cap venda de dades, cap sorpresa.',
    priv_p1: 'Sense anuncis, mai',
    priv_p2: 'Dades xifrades (TLS + AES-256)',
    priv_p3: 'Accés exclusiu de la teva família',
    priv_p4: 'Exporta les teves dades quan vulguis',
    priv_p5: "Elimina el compte i tot s'esborra",
    priv_p6: 'Compleix RGPD · dades de salut',
    blog_label:    'Blog',
    blog_title:    'Recursos per a <em>nous pares.</em>',
    blog_sub:      "Articles escrits per pares, per a pares. Consells pràctics per als primers mesos.",
    blog_readmore: 'Llegir →',
    blog_all:      'Veure tots els articles →',
    blog1_kicker:  'Primeres setmanes',
    blog1_title:   'Les 30 primeres nits amb el teu nadó',
    blog1_desc:    "Guia emocional i pràctica per sobreviure i gaudir les primeres setmanes amb un nou membre a la família.",
    blog2_kicker:  'Lactància i biberó',
    blog2_title:   'Com saber si el teu bebè menja prou',
    blog2_desc:    "Signes de que el bebè s'alimenta bé, quantes tomes al dia i com registrar-les per parlar-ne amb el pediatre.",
    blog3_kicker:  'Creixement',
    blog3_title:   'Corba de creixement OMS: guia per a pares',
    blog3_desc:    "Què volen dir els percentils, com s'interpreten i per què el pes sol no ho explica tot.",
    blog4_kicker:  'Parella',
    blog4_title:   'Sincronitzar-se amb la parella quan arriba el bebè',
    blog4_desc:    'Comunicar-se quan esteu els dos esgotats és difícil. Aquí expliquem com una app senzilla va canviar la nostra dinàmica.',
    cta_label: 'Comença avui',
    cta_title: 'Perquè les 3h<em>ja són prou difícils.</em>',
    cta_sub:   'Gratuït, sense instal·lació, sense targeta de crèdit. Tens un bebè, no tens temps.',
    cta_btn:   '🍼 Accedir a Quan Li Toca',
    cta_proof: 'Ja usat per pares des del primer dia 🥰',
    footer_tag:   'Fet amb ❤️ per pares, per a pares.',
    footer_link1: 'Accedir',
    footer_link2: 'Privacitat',
    footer_blog:  'Blog',
  },

  es: {
    _title: 'Quan Li Toca — Registro inteligente para tu bebé',
    _desc:  'Registra tomas, cacas, siestas y crecimiento. Sincronizado con tu pareja en tiempo real. Gratis, sin anuncios, sin venta de datos.',
    nav_cta: 'Acceder →',
    badge:    'Gratuito · Sin anuncios · Privado',
    h1:       'El registro de tu<em>bebé, en tiempo real.</em>',
    hero_sub: 'Tomas, cacas, siestas y crecimiento — todo en un lugar, sincronizado al instante con tu pareja. Sin olvidar nada a las 3 de la madrugada.',
    cta_hero:  '🍼 Empieza ahora — es gratis',
    cta_ghost: 'Ver funcionalidades',
    story_label:   'Nuestra historia',
    story_title:   'Porque las <em>primeras semanas</em> lo cambian todo.',
    story_sub:     'Creamos Quan Li Toca porque el nacimiento de nuestro hijo nos hizo darnos cuenta de que no existía ninguna app sencilla, gratuita y en tiempo real para parejas con un recién nacido.',
    story1_kicker: 'Noche #1',
    story1_title:  'Agotamiento y amor mezclados',
    story1_body:   '¿Ha comido hace 40 minutos o hace 2 horas? A las 4 de la madrugada, el cerebro no funciona. Necesitabas una app, no un bloc de notas.',
    story2_kicker: 'Semana #2',
    story2_title:  'Dos padres, dos móviles, un bebé',
    story2_body:   'Tú amamantabas en el sofá. Yo dormía en la habitación. Nos enviábamos WhatsApps para saber si había comido. Tenía que haber una manera mejor.',
    story3_kicker: 'Ahora',
    story3_title:  'Tan simple que funciona a las 3h',
    story3_body:   'Un tap para registrar una toma. Tu pareja lo ve al instante. El pediatra ve el historial. Tú duermes tranquilo.',
    feat_label:  'Funcionalidades',
    feat_title:  'Todo lo que necesitas,<em>nada que no necesitas.</em>',
    feat_sub:    'Diseñado por padres que han vivido las noches con un recién nacido en brazos y el móvil en la mano.',
    feat1_title: 'Registro de tomas en 1 tap',
    feat1_desc:  'Son las 3h. No recuerdas si el biberón era de 80 o 90ml. Con un tap guardas hora, cantidad y fuente. La app recuerda por ti.',
    feat2_title: 'Cuenta atrás hasta la próxima toma',
    feat2_desc:  '¿Ha comido hace 47 minutos? La próxima toma siempre visible. Si se ha pasado, el contador sube en rojo. Sin cálculos mentales a medianoche.',
    feat3_title: 'Sincronización en tiempo real',
    feat3_desc:  'Tú en el sofá, tu pareja en la habitación. Ella registra una toma y tú ya lo ves. Sin WhatsApps, sin gritos, sin "¿ya ha comido?".',
    feat4_title: 'Cacas, sueño y medicamentos',
    feat4_desc:  'El pediatra pregunta cuántas veces ha hecho caca. Abres el historial: 14 veces, color amarillo, consistencia normal. Todo registrado en 2 dedos.',
    feat5_title: 'Curva de crecimiento OMS',
    feat5_desc:  '3,2 kg al nacer. 4,8 kg a las 6 semanas. La gráfica de percentiles de la OMS actualizada en cada pesada. Y ml recomendados por fórmula calculados automáticamente.',
    feat6_title: 'Edición e historial completo',
    feat6_desc:  '¿Pusiste 14:00 pero eran las 15:00? Edita en un segundo. Historial de toda la semana, filtrado por tipo, por horas, por días.',
    how_label:   'Cómo funciona',
    how_title:   'Listo en <em>menos de un minuto.</em>',
    how_sub:     'Sin instalación, sin tarjeta de crédito, sin configuración complicada.',
    step1_title: 'Entra con tu email',
    step1_desc:  'Código de 6 dígitos al correo. Sin contraseña que recordar. Primer acceso en 30 segundos.',
    step2_title: 'Crea el perfil del bebé',
    step2_desc:  'Nombre, fecha de nacimiento y sexo. La curva de crecimiento se configura sola.',
    step3_title: 'Comparte con tu pareja',
    step3_desc:  'Código de 6 caracteres. La otra persona entra, introduce el código y ya veis lo mismo en tiempo real.',
    step4_title: 'Instala como app',
    step4_desc:  'Safari → Compartir → Añadir a pantalla de inicio. Funciona como app nativa, incluso sin conexión.',
    rt_label:  'Sincronización',
    rt_title:  'Los dos lo veis<em>a la vez.</em>',
    rt_sub:    'Cuando uno registra una toma, el otro lo ve en menos de un segundo. Sin actualizar, sin esperar. Realtime real.',
    rt_pill1:  'Actualización instantánea entre dispositivos',
    rt_pill2:  'Funciona en iOS, Android y web',
    rt_pill3:  'Reconexión automática si se pierde la señal',
    priv_label: 'Privacidad',
    priv_title: 'Los datos de tu bebé<em>son tuyos.</em>',
    priv_sub:   'Los datos de salud de tu hijo merecen el máximo respeto. Sin anuncios, sin venta de datos, sin sorpresas.',
    priv_p1: 'Sin anuncios, nunca',
    priv_p2: 'Datos cifrados (TLS + AES-256)',
    priv_p3: 'Acceso exclusivo de tu familia',
    priv_p4: 'Exporta tus datos cuando quieras',
    priv_p5: 'Elimina la cuenta y todo se borra',
    priv_p6: 'Cumple RGPD · datos de salud',
    blog_label:    'Blog',
    blog_title:    'Recursos para <em>nuevos padres.</em>',
    blog_sub:      'Artículos escritos por padres, para padres. Consejos prácticos para los primeros meses.',
    blog_readmore: 'Leer →',
    blog_all:      'Ver todos los artículos →',
    blog1_kicker:  'Primeras semanas',
    blog1_title:   'Las 30 primeras noches con tu recién nacido',
    blog1_desc:    'Guía emocional y práctica para sobrevivir y disfrutar las primeras semanas con un nuevo miembro en la familia.',
    blog2_kicker:  'Lactancia y biberón',
    blog2_title:   'Cómo saber si tu bebé come suficiente',
    blog2_desc:    'Señales de que el bebé se alimenta bien, cuántas tomas al día y cómo registrarlas para hablar con el pediatra.',
    blog3_kicker:  'Crecimiento',
    blog3_title:   'Curva de crecimiento OMS: guía para padres',
    blog3_desc:    'Qué significan los percentiles, cómo se interpretan y por qué el peso solo no lo explica todo.',
    blog4_kicker:  'Pareja',
    blog4_title:   'Sincronizarse con tu pareja cuando llega el bebé',
    blog4_desc:    'Comunicarse cuando los dos estáis agotados es difícil. Aquí explicamos cómo una app sencilla cambió nuestra dinámica.',
    cta_label: 'Empieza hoy',
    cta_title: 'Porque las 3h<em>ya son bastante difíciles.</em>',
    cta_sub:   'Gratuito, sin instalación, sin tarjeta de crédito. Tienes un bebé, no tienes tiempo.',
    cta_btn:   '🍼 Acceder a Quan Li Toca',
    cta_proof: 'Ya usado por padres desde el primer día 🥰',
    footer_tag:   'Hecho con ❤️ por padres, para padres.',
    footer_link1: 'Acceder',
    footer_link2: 'Privacidad',
    footer_blog:  'Blog',
  },

  en: {
    _title: 'Quan Li Toca — Smart baby tracker for new parents',
    _desc:  'Track feedings, diapers, naps and growth. Synced with your partner in real time. Free, no ads, no data selling.',
    nav_cta: 'Sign in →',
    badge:    'Free · No ads · Private',
    h1:       'Track your<em>baby, in real time.</em>',
    hero_sub: "Feedings, diapers, naps and growth — all in one place, synced instantly with your partner. Never forget anything at 3am.",
    cta_hero:  "🍼 Start now — it's free",
    cta_ghost: 'See features',
    story_label:   'Our story',
    story_title:   'Because the <em>first weeks</em> change everything.',
    story_sub:     "We built Quan Li Toca because when our son was born, we realized there was no simple, free, real-time baby tracker for couples.",
    story1_kicker: 'Night #1',
    story1_title:  'Exhaustion and love all at once',
    story1_body:   "Did they eat 40 minutes ago or 2 hours ago? At 4am your brain doesn't work. You needed an app, not a notebook.",
    story2_kicker: 'Week #2',
    story2_title:  'Two parents, two phones, one baby',
    story2_body:   "You were nursing on the couch. I was asleep in the bedroom. We sent each other texts to find out if the baby had eaten. There had to be a better way.",
    story3_kicker: 'Now',
    story3_title:  'Simple enough to use at 3am',
    story3_body:   "One tap to log a feed. Your partner sees it instantly. The pediatrician sees the log. You sleep easy.",
    feat_label:  'Features',
    feat_title:  "Everything you need,<em>nothing you don't.</em>",
    feat_sub:    "Designed by parents who've lived through newborn nights with a baby in their arms and a phone in their hand.",
    feat1_title: 'Feed tracking in 1 tap',
    feat1_desc:  "It's 3am. You can't remember if the bottle was 80 or 90ml. One tap saves the time, amount and source. The app remembers for you.",
    feat2_title: 'Countdown to next feeding',
    feat2_desc:  'Did they eat 47 minutes ago? Next feeding always visible. If overdue, the counter turns red. No mental math at midnight.',
    feat3_title: 'Real-time sync',
    feat3_desc:  "You on the sofa, your partner in the bedroom. She logs a feed and you see it immediately. No texts, no shouting, no 'did they eat yet?'.",
    feat4_title: 'Diapers, sleep and meds',
    feat4_desc:  'The pediatrician asks how many dirty diapers. You open the log: 14 times, yellow, normal. All recorded in 2 taps.',
    feat5_title: 'WHO growth curve',
    feat5_desc:  '3.2 kg at birth. 4.8 kg at 6 weeks. WHO percentile chart updated at every weigh-in. Formula ml recommendations calculated automatically.',
    feat6_title: 'Full edit & history',
    feat6_desc:  'You entered 2pm but it was 3pm? Edit in a second. Full weekly history, filtered by type, time, or day.',
    how_label:   'How it works',
    how_title:   'Ready in <em>under a minute.</em>',
    how_sub:     'No install, no credit card, no complicated setup.',
    step1_title: 'Enter with your email',
    step1_desc:  '6-digit code to your inbox. No password to remember. First login in 30 seconds.',
    step2_title: "Create your baby's profile",
    step2_desc:  'Name, date of birth and sex. The growth curve sets itself up.',
    step3_title: 'Share with your partner',
    step3_desc:  "6-character code. The other person logs in, enters the code and you're both seeing the same thing in real time.",
    step4_title: 'Install as an app',
    step4_desc:  'Safari → Share → Add to Home Screen. Works like a native app, even offline.',
    rt_label:  'Sync',
    rt_title:  'You both see it<em>at the same time.</em>',
    rt_sub:    'When one of you logs a feed, the other sees it in under a second. No refresh, no waiting. Real realtime.',
    rt_pill1:  'Instant update across devices',
    rt_pill2:  'Works on iOS, Android and web',
    rt_pill3:  'Auto-reconnect if signal drops',
    priv_label: 'Privacy',
    priv_title: "Your baby's data<em>is yours.</em>",
    priv_sub:   "Your child's health data deserves the utmost respect. No ads, no data selling, no surprises.",
    priv_p1: 'No ads, ever',
    priv_p2: 'Encrypted data (TLS + AES-256)',
    priv_p3: 'Family-only access',
    priv_p4: 'Export your data anytime',
    priv_p5: 'Delete account and everything is gone',
    priv_p6: 'GDPR compliant · health data',
    blog_label:    'Blog',
    blog_title:    'Resources for <em>new parents.</em>',
    blog_sub:      'Articles written by parents, for parents. Practical tips for the first months.',
    blog_readmore: 'Read →',
    blog_all:      'See all articles →',
    blog1_kicker:  'First weeks',
    blog1_title:   'The first 30 nights with your newborn',
    blog1_desc:    'An emotional and practical guide to surviving and enjoying the first weeks with a new family member.',
    blog2_kicker:  'Breastfeeding & formula',
    blog2_title:   'How to know if your baby is eating enough',
    blog2_desc:    'Signs your baby is feeding well, how many feeds per day, and how to track them for your pediatrician.',
    blog3_kicker:  'Growth',
    blog3_title:   'WHO baby growth chart: a guide for parents',
    blog3_desc:    "What percentiles mean, how to interpret them, and why weight alone doesn't tell the whole story.",
    blog4_kicker:  'Couple',
    blog4_title:   'Syncing with your partner when the baby arrives',
    blog4_desc:    "Communicating when you're both exhausted is hard. Here's how a simple app changed our dynamic.",
    cta_label: 'Start today',
    cta_title: "Because 3am<em>is hard enough.</em>",
    cta_sub:   "Free, no install, no credit card. You have a baby, you don't have time.",
    cta_btn:   '🍼 Open Quan Li Toca',
    cta_proof: 'Already used by parents since day one 🥰',
    footer_tag:   'Made with ❤️ by parents, for parents.',
    footer_link1: 'Sign in',
    footer_link2: 'Privacy',
    footer_blog:  'Blog',
  }
};

/* ── I18N ENGINE ────────────────────────────── */
let currentLang = localStorage.getItem('qlang') || 'ca';

function applyLang(lang) {
  if (!TRANSLATIONS[lang]) return;
  currentLang = lang;
  localStorage.setItem('qlang', lang);
  const t = TRANSLATIONS[lang];

  document.documentElement.lang = lang;
  if (t._title) document.title = t._title;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && t._desc) metaDesc.setAttribute('content', t._desc);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

function initI18n() {
  const urlLang = new URLSearchParams(location.search).get('lang');
  if (urlLang && TRANSLATIONS[urlLang]) currentLang = urlLang;
  applyLang(currentLang);
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  });
}

/* ── SCROLL REVEAL ─────────────────────────────── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));


/* ── MOCKUP ANIMATION ──────────────────────────── */
const ANIM_INTERVAL = 4500;

function runMockupAnimation() {
  const btn      = document.querySelector('.mockup-btn-quick');
  const finger   = document.querySelector('.mockup-finger');
  const toast    = document.querySelector('.mockup-toast');
  const logList  = document.querySelector('.mockup-log');
  const statVal  = document.querySelector('.mockup-stat-feeds');
  const timer    = document.querySelector('.mockup-timer');

  if (!btn || !finger || !logList || !statVal || !timer) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  let feedCount = parseInt(statVal.textContent, 10) || 8;
  let timerMin  = 1;
  let timerSec  = 42;
  let paused    = false;

  document.addEventListener('visibilitychange', () => {
    paused = document.hidden;
  });

  setInterval(() => {
    if (paused) return;
    if (timerSec === 0) {
      if (timerMin === 0) { timerMin = 2; timerSec = 59; return; }
      timerMin--;
      timerSec = 59;
    } else {
      timerSec--;
    }
    const mm = String(timerMin).padStart(1, '0');
    const ss = String(timerSec).padStart(2, '0');
    timer.textContent = `${mm}:${ss}`;
  }, 1000);

  function tapCycle() {
    if (paused) return;

    const btnRect   = btn.getBoundingClientRect();
    const phoneRect = btn.closest('.mockup-phone').getBoundingClientRect();
    const left = btnRect.left - phoneRect.left + btnRect.width / 2 - 12;
    const top  = btnRect.top  - phoneRect.top  - 10;

    finger.style.left = left + 'px';
    finger.style.top  = top  + 'px';
    finger.classList.remove('tap-anim');
    void finger.offsetWidth;
    finger.classList.add('tap-anim');

    setTimeout(() => { btn.classList.add('tapped'); }, 150);

    setTimeout(() => {
      btn.classList.remove('tapped');
      if (toast) toast.classList.add('show');
    }, 300);

    setTimeout(() => {
      const now = new Date();
      const hh  = String(now.getHours()).padStart(2, '0');
      const mm  = String(now.getMinutes()).padStart(2, '0');
      const newItem = document.createElement('div');
      newItem.className = 'mockup-log-item new-entry';
      newItem.innerHTML = `
        <div class="mockup-log-dot" style="background:#4fa8d5"></div>
        <div>
          <div class="mockup-log-type">Toma</div>
          <div class="mockup-log-detail">fórmula · 90ml</div>
        </div>
        <div class="mockup-log-time">${hh}:${mm}</div>
      `;
      logList.insertBefore(newItem, logList.firstChild);
      const items = logList.querySelectorAll('.mockup-log-item');
      if (items.length > 3) items[items.length - 1].remove();
    }, 450);

    setTimeout(() => {
      feedCount++;
      statVal.textContent = feedCount;
      statVal.classList.remove('flash');
      void statVal.offsetWidth;
      statVal.classList.add('flash');
    }, 500);

    setTimeout(() => {
      timerMin = 2; timerSec = 59;
      timer.textContent = '2:59';
      timer.classList.add('counting');
      setTimeout(() => timer.classList.remove('counting'), 1200);
    }, 600);

    setTimeout(() => {
      if (toast) toast.classList.remove('show');
    }, 1800);
  }

  setTimeout(() => {
    tapCycle();
    setInterval(tapCycle, ANIM_INTERVAL);
  }, 1500);
}

/* ── INIT ──────────────────────────────────────── */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    initI18n();
    runMockupAnimation();
  });
} else {
  initI18n();
  runMockupAnimation();
}
