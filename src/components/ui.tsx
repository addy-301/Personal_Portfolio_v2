import type { ReactNode } from 'react';

export function SectionHeading({
  id,
  index,
  label,
  title,
  children,
}: {
  id: string;
  index: string;
  label: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <header data-reveal className="mb-12 max-w-3xl md:mb-16">
      <p className="eyebrow mb-4 flex items-center gap-3">
        <span className="text-pink">{index}</span>
        <span aria-hidden="true" className="h-px w-10 bg-gradient-to-r from-cyan to-pink" />
        {label}
      </p>
      <h2 id={`${id}-title`} className="text-4xl font-bold tracking-tight text-ink md:text-6xl">{title}</h2>
      {children && <p className="mt-5 text-lg leading-relaxed text-muted">{children}</p>}
    </header>
  );
}

export function Section({ id, children, className = '' }: { id: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`relative mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24 ${className}`}>
      {children}
    </section>
  );
}

export function ExternalLink({ href, children, className = '', label }: { href: string; children: ReactNode; className?: string; label?: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className={className}>
      {children}
    </a>
  );
}
