import { useEffect, useState } from 'react';
import { Menu, Moon, Sun, X, FileDown } from 'lucide-react';
import { personalData } from '../data';

const links = [
  { id: 'impact', label: 'Impact' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'recognition', label: 'Recognition' },
  { id: 'contact', label: 'Contact' },
];

function Clock() {
  const [time, setTime] = useState<string | null>(null);
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
      timeZone: 'Asia/Kolkata',
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <span className="hidden items-center gap-2 rounded-full border border-line px-3 py-1 font-mono text-[11px] text-muted lg:inline-flex">
      <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-lime" aria-hidden="true" />
      <span className="tabular-nums">{time ?? '--:--:--'}</span> IST · Mumbai
    </span>
  );
}

function toggleTheme() {
  const root = document.documentElement;
  const next = root.classList.contains('dark') ? 'light' : 'dark';
  root.classList.remove('light', 'dark');
  root.classList.add(next);
  try {
    localStorage.setItem('theme', next);
  } catch {
    /* storage unavailable — theme still applies for this visit */
  }
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const spy = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) spy.observe(el);
    });
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      spy.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6">
      <nav
        aria-label="Primary"
        className={`mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-full border px-3 py-2 transition-[background-color,border-color,box-shadow] duration-300 md:px-4 ${
          scrolled || open
            ? 'border-line bg-bg/75 shadow-[0_10px_40px_-20px_rgb(0_0_0/0.5)] backdrop-blur-xl'
            : 'border-transparent'
        }`}
      >
        <div className="flex items-center gap-3">
          <a href="#top" className="group flex items-center gap-2 font-bold" aria-label="Aditya Verma — back to top">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-cyan via-violet to-pink text-sm text-white transition-transform duration-500 group-hover:rotate-[360deg]">
              AV
            </span>
            <span className="hidden text-ink sm:inline">Aditya Verma</span>
          </a>
          <Clock />
        </div>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                aria-current={active === l.id ? 'location' : undefined}
                className={`relative rounded-full px-3 py-2 text-sm transition-colors ${
                  active === l.id ? 'bg-ink/[0.07] text-ink' : 'text-muted hover:text-ink'
                }`}
              >
                {l.label}
                {active === l.id && (
                  <span aria-hidden="true" className="absolute inset-x-3 -bottom-px h-px bg-gradient-to-r from-cyan to-pink" />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle colour theme"
            className="grid h-9 w-9 place-items-center rounded-full text-ink transition-colors hover:bg-ink/10"
          >
            <Sun size={17} className="hidden dark:block" aria-hidden="true" />
            <Moon size={17} className="block dark:hidden" aria-hidden="true" />
          </button>
          <a
            href={personalData.resume}
            target="_blank"
            rel="noopener"
            className="btn btn-primary hidden !px-4 !py-2 text-sm sm:inline-flex"
          >
            <FileDown size={15} aria-hidden="true" /> Resume
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="grid h-9 w-9 place-items-center rounded-full text-ink hover:bg-ink/10 md:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        hidden={!open}
        className="panel mx-auto mt-2 max-w-6xl !rounded-3xl !bg-bg/90 p-3 backdrop-blur-xl md:hidden"
      >
        <ul className="grid gap-1">
          {links.map((l, i) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-2xl px-4 py-3 text-lg text-ink hover:bg-ink/5"
              >
                {l.label}
                <span className="font-mono text-xs text-muted">0{i + 1}</span>
              </a>
            </li>
          ))}
          <li>
            <a href={personalData.resume} target="_blank" rel="noopener" className="btn btn-primary mt-2 w-full justify-center">
              <FileDown size={16} aria-hidden="true" /> Download résumé
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
