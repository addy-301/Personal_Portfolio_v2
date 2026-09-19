const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const formatNumber = (n: number) => n.toLocaleString('en-IN');

function countUp(el: HTMLElement) {
  const target = Number(el.dataset.count);
  if (!target || reducedMotion()) return;
  const start = performance.now();
  const duration = 1600;
  const tick = (now: number) => {
    const t = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - t, 4);
    el.textContent = formatNumber(Math.round(target * eased));
    if (t < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

/**
 * Wires every decorative effect on the page with a single IntersectionObserver
 * and a single pointer listener. Returns a cleanup function.
 */
export function initFx() {
  document.documentElement.classList.add('js', 'fx-ready');

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const el = entry.target as HTMLElement;
        el.classList.add('is-in');
        el.querySelectorAll<HTMLElement>('[data-count]').forEach(countUp);
        io.unobserve(el);
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
  );
  document.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el));

  // Cursor spotlight on cards — fine pointers only, rAF-throttled.
  let frame = 0;
  let active: HTMLElement | null = null;
  const onMove = (e: PointerEvent) => {
    if (frame) return;
    frame = requestAnimationFrame(() => {
      frame = 0;
      const card = (e.target as Element | null)?.closest<HTMLElement>('[data-spot]') ?? null;
      if (active && active !== card) active.style.setProperty('--spot', '0');
      active = card;
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - r.left}px`);
      card.style.setProperty('--my', `${e.clientY - r.top}px`);
      card.style.setProperty('--spot', '1');
    });
  };
  const fine = window.matchMedia('(pointer: fine)').matches;
  if (fine) document.addEventListener('pointermove', onMove, { passive: true });

  return () => {
    io.disconnect();
    if (fine) document.removeEventListener('pointermove', onMove);
    cancelAnimationFrame(frame);
  };
}
