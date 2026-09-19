import { useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { personalData } from '../data';
import { ExternalLink } from './ui';

const GLYPHS = '!<>-_\\/[]{}—=+*^?#01';

/** Decodes each role in with a short glyph-scramble. Plain text for SSR / reduced motion. */
function RoleScramble({ roles }: { roles: string[] }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % roles.length), 3200);
    return () => clearInterval(id);
  }, [roles.length]);

  useEffect(() => {
    const el = ref.current;
    if (!el || index === 0) return;
    const target = roles[index];
    let frame = 0;
    let raf = 0;
    const total = 22;
    const step = () => {
      frame++;
      const done = Math.floor((frame / total) * target.length);
      let out = target.slice(0, done);
      for (let i = done; i < target.length; i++) {
        out += target[i] === ' ' ? ' ' : GLYPHS[(Math.random() * GLYPHS.length) | 0];
      }
      el.textContent = out;
      if (frame < total) raf = requestAnimationFrame(step);
      else el.textContent = target;
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [index, roles]);

  return (
    <span ref={ref} aria-hidden="true" className="caret text-ink">
      {roles[0]}
    </span>
  );
}

function PipelineHud() {
  const steps = [
    { k: 'ingest', v: '20k–100k+ rows / return' },
    { k: 'map', v: 'dimension mapping · lossless' },
    { k: 'validate', v: 'sanity gates passed' },
    { k: 'promote', v: '→ production' },
  ];
  return (
    <div data-spot className="panel overflow-hidden p-5 font-mono text-xs shadow-[0_30px_80px_-30px_color-mix(in_srgb,var(--violet)_55%,transparent)] md:p-6">
      <div className="scanline" aria-hidden="true" />
      <div className="mb-5 flex items-center justify-between">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-pink" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber" />
          <span className="h-2.5 w-2.5 rounded-full bg-lime" />
        </div>
        <span className="text-muted">cims-batch · run #1024</span>
      </div>

      <p className="text-muted">
        <span className="text-pink">$</span> spark-submit <span className="text-cyan">--profile tuned</span>
      </p>
      <ul className="mt-3 space-y-2">
        {steps.map((s, i) => (
          <li key={s.k} className="hud-line flex gap-3" style={{ ['--i' as string]: i + 1 }}>
            <span className="text-lime">✓</span>
            <span className="w-16 text-ink">{s.k}</span>
            <span className="text-muted">{s.v}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 space-y-3">
        <div>
          <div className="mb-1.5 flex justify-between text-muted">
            <span>legacy runtime</span>
            <span>60:00</span>
          </div>
          <div className="h-2 rounded-full bg-ink/10">
            <div className="h-full w-full rounded-full bg-muted/40" />
          </div>
        </div>
        <div>
          <div className="mb-1.5 flex justify-between">
            <span className="text-ink">optimised runtime</span>
            <span className="text-lime">15:00</span>
          </div>
          <div className="h-2 rounded-full bg-ink/10">
            <div className="hud-fill h-full w-1/4 rounded-full bg-gradient-to-r from-cyan via-violet to-pink" />
          </div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-2 border-t border-line pt-4 text-center">
        {[
          ['4×', 'faster'],
          ['200+', 'elements/run'],
          ['0', 'timeouts'],
        ].map(([n, l]) => (
          <div key={l}>
            <div className="text-lg font-bold text-ink">{n}</div>
            <div className="text-[10px] uppercase tracking-wider text-muted">{l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  const { socials } = personalData;
  return (
    <section id="top" aria-labelledby="hero-title" className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-20">
      <div className="floor" aria-hidden="true" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-5 md:px-8 lg:grid-cols-[1.25fr_1fr]">
        <div>
          <p className="rise mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 text-sm text-muted backdrop-blur">
            <MapPin size={14} className="text-pink" aria-hidden="true" />
            Software Engineer @ TCS · Mumbai, India
          </p>

          <h1 id="hero-title" style={{ ['--d' as string]: 1 }} className="rise text-[clamp(3.2rem,11vw,7.5rem)] font-bold leading-[0.9] tracking-[-0.04em]">
            Aditya <span className="text-chroma">Verma</span>
          </h1>

          <p style={{ ['--d' as string]: 2 }} className="rise mt-6 font-mono text-lg text-muted md:text-xl">
            <span className="text-cyan">~/</span> <span className="sr-only">{personalData.roles.join(', ')}</span>
            <RoleScramble roles={personalData.roles} />
          </p>

          <p style={{ ['--d' as string]: 3 }} className="rise mt-6 max-w-xl text-lg leading-relaxed text-muted md:text-xl">
            {personalData.tagline}
          </p>

          <div style={{ ['--d' as string]: 4 }} className="rise mt-10 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn btn-primary">
              Explore my work <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <a href="#contact" className="btn btn-ghost">
              Let’s talk
            </a>
            <div className="ml-1 flex items-center gap-1">
              <ExternalLink href={socials.github} label="GitHub profile" className="grid h-11 w-11 place-items-center rounded-full text-muted transition-colors hover:bg-ink/10 hover:text-ink">
                <Github size={20} aria-hidden="true" />
              </ExternalLink>
              <ExternalLink href={socials.linkedin} label="LinkedIn profile" className="grid h-11 w-11 place-items-center rounded-full text-muted transition-colors hover:bg-ink/10 hover:text-ink">
                <Linkedin size={20} aria-hidden="true" />
              </ExternalLink>
              <a href={socials.email} aria-label="Send an email" className="grid h-11 w-11 place-items-center rounded-full text-muted transition-colors hover:bg-ink/10 hover:text-ink">
                <Mail size={20} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div style={{ ['--d' as string]: 3 }} className="rise relative">
          <div aria-hidden="true" className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-cyan/25 via-violet/20 to-pink/25 blur-3xl" />
          <PipelineHud />
        </div>
      </div>

      <a href="#impact" aria-label="Scroll to impact" className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 animate-bounce text-muted hover:text-ink md:block">
        <ArrowDown size={22} />
      </a>
    </section>
  );
}
