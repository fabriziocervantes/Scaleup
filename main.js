(() => {
  const WA = 'https://wa.me/526623996278';

  // Mobile menu
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.getElementById('menu-movil');
  const setMenu = (open) => {
    menu.hidden = !open;
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  };
  toggle.addEventListener('click', () => setMenu(menu.hidden));
  menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setMenu(false)));

  // Projects tabs
  const tabs = Array.from(document.querySelectorAll('[role="tab"]'));
  const selectTab = (tab) => {
    tabs.forEach((t) => {
      const on = t === tab;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
  };
  tabs.forEach((t, i) => {
    t.addEventListener('click', () => selectTab(t));
    t.addEventListener('keydown', (e) => {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      const next = tabs[(i + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length];
      selectTab(next);
      next.focus();
    });
  });

  // FAQ accordion: one open at a time
  const faqButtons = Array.from(document.querySelectorAll('.faq__q'));
  const setFaq = (btn, open) => {
    btn.setAttribute('aria-expanded', String(open));
    btn.querySelector('.faq__sign').textContent = open ? '−' : '+';
    document.getElementById(btn.getAttribute('aria-controls')).hidden = !open;
  };
  faqButtons.forEach((btn) => btn.addEventListener('click', () => {
    const wasOpen = btn.getAttribute('aria-expanded') === 'true';
    faqButtons.forEach((b) => setFaq(b, false));
    if (!wasOpen) setFaq(btn, true);
  }));

  // Contact form -> WhatsApp message
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const f = Object.fromEntries(new FormData(form));
    const msg = `Hola, quiero cotizar para mi negocio.\nNombre: ${f.nombre}\nNegocio: ${f.negocio}\nRubro: ${f.rubro}\nWhatsApp: ${f.whatsapp}`;
    window.open(`${WA}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
  });

  // Portfolio videos play muted only while on screen
  const videos = document.querySelectorAll('.media video');
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches && 'IntersectionObserver' in window) {
    const vio = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.play().catch(() => {});
      else entry.target.pause();
    }), { threshold: 0.5 });
    videos.forEach((v) => vio.observe(v));
  }

  document.getElementById('year').textContent = new Date().getFullYear();

  // Fade-in on scroll for sections that start below the fold
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduce && 'IntersectionObserver' in window) {
    const els = Array.from(document.querySelectorAll('[data-reveal]'))
      .filter((el) => el.getBoundingClientRect().top > window.innerHeight);
    const io = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('is-hidden');
        io.unobserve(entry.target);
      }
    }), { threshold: 0.08 });
    els.forEach((el) => { el.classList.add('is-hidden'); io.observe(el); });
    document.documentElement.classList.add('reveal-ready');
  }
})();
