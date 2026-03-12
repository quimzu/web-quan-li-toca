/* ═══════════════════════════════════════════════
   QUAN LI TOCA — Landing JS
   ═══════════════════════════════════════════════ */

/* ── SCROLL REVEAL ─────────────────────────────── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));


/* ── MOCKUP ANIMATION ──────────────────────────── */
// L'animació simula: dedo baixa → tap "Repetir toma" →
// el botó s'enfonsas → apareix toast → nou registre entra per dalt del log
// → el comptador de tomes puja → el timer es reseteja → bucle

const ANIM_INTERVAL = 4500; // ms entre cicles

function runMockupAnimation() {
  const btn      = document.querySelector('.mockup-btn-quick');
  const finger   = document.querySelector('.mockup-finger');
  const toast    = document.querySelector('.mockup-toast');
  const logList  = document.querySelector('.mockup-log');
  const statVal  = document.querySelector('.mockup-stat-feeds');
  const timer    = document.querySelector('.mockup-timer');

  if (!btn || !finger || !logList || !statVal || !timer) return;

  // Respecta prefers-reduced-motion: no arrenca l'animació
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  let feedCount = parseInt(statVal.textContent, 10) || 8;
  let timerMin  = 1;
  let timerSec  = 42;
  let paused    = false;

  // Pausa quan el tab no és visible (Page Visibility API)
  document.addEventListener('visibilitychange', () => {
    paused = document.hidden;
  });

  // Tick the timer every second (visual only)
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

  // Tap cycle
  function tapCycle() {
    if (paused) return;

    // 1. Mostra el dit
    const btnRect  = btn.getBoundingClientRect();
    const phoneRect = btn.closest('.mockup-phone').getBoundingClientRect();
    const left = btnRect.left - phoneRect.left + btnRect.width / 2 - 12;
    const top  = btnRect.top  - phoneRect.top  - 10;

    finger.style.left = left + 'px';
    finger.style.top  = top  + 'px';
    finger.classList.remove('tap-anim');
    void finger.offsetWidth; // reflow
    finger.classList.add('tap-anim');

    // 2. Tap al botó (150ms)
    setTimeout(() => {
      btn.classList.add('tapped');
    }, 150);

    // 3. Allibera botó + mostra toast (300ms)
    setTimeout(() => {
      btn.classList.remove('tapped');
      if (toast) { toast.classList.add('show'); }
    }, 300);

    // 4. Afegeix nou registre al log (450ms)
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

      // Elimina l'últim si n'hi ha més de 3
      const items = logList.querySelectorAll('.mockup-log-item');
      if (items.length > 3) items[items.length - 1].remove();
    }, 450);

    // 5. Actualitza el comptador de tomes amb flash (500ms)
    setTimeout(() => {
      feedCount++;
      statVal.textContent = feedCount;
      statVal.classList.remove('flash');
      void statVal.offsetWidth;
      statVal.classList.add('flash');
    }, 500);

    // 6. Reseteja el timer a 2:59 (600ms)
    setTimeout(() => {
      timerMin = 2; timerSec = 59;
      timer.textContent = '2:59';
      timer.classList.add('counting');
      setTimeout(() => timer.classList.remove('counting'), 1200);
    }, 600);

    // 7. Amaga toast (1800ms)
    setTimeout(() => {
      if (toast) toast.classList.remove('show');
    }, 1800);
  }

  // Primer tap als 1.5s de carregar, després cada ANIM_INTERVAL
  setTimeout(() => {
    tapCycle();
    setInterval(tapCycle, ANIM_INTERVAL);
  }, 1500);
}

// Arrenca quan la pàgina és llesta
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', runMockupAnimation);
} else {
  runMockupAnimation();
}
