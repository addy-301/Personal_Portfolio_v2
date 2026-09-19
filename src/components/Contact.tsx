import { useState } from 'react';
import { ArrowUpRight, Check, Copy, Github, Linkedin, Mail } from 'lucide-react';
import { personalData } from '../data';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const { email, socials } = personalData;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = socials.email;
    }
  };

  return (
    <section id="contact" aria-labelledby="contact-title" className="relative mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
      <div data-reveal data-spot className="panel overflow-hidden px-6 py-16 text-center md:px-16 md:py-24">
        <div aria-hidden="true" className="absolute -top-40 left-1/2 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan/30 via-violet/30 to-pink/30 blur-3xl" />
        <p className="eyebrow relative">06 · Contact</p>
        <h2 id="contact-title" className="relative mt-4 text-[clamp(2.5rem,7vw,5.5rem)] font-bold leading-[0.95] tracking-[-0.03em] text-ink">
          Let’s build something <span className="text-chroma">remarkable</span>.
        </h2>
        <p className="relative mx-auto mt-6 max-w-xl text-lg text-muted">
          Based in Mumbai. Always up for conversations about data platforms, applied AI and hard engineering problems.
        </p>

        <div className="relative mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href={socials.email} className="btn btn-primary text-base">
            <Mail size={18} aria-hidden="true" /> {email}
          </a>
          <button type="button" onClick={copy} className="btn btn-ghost" aria-live="polite">
            {copied ? <Check size={17} className="text-lime" aria-hidden="true" /> : <Copy size={17} aria-hidden="true" />}
            {copied ? 'Copied!' : 'Copy email'}
          </button>
        </div>

        <div className="relative mt-8 flex justify-center gap-6 text-sm">
          <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-1.5 text-muted hover:text-ink">
            <Linkedin size={16} aria-hidden="true" /> LinkedIn
            <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
          </a>
          <a href={socials.github} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-1.5 text-muted hover:text-ink">
            <Github size={16} aria-hidden="true" /> GitHub
            <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
