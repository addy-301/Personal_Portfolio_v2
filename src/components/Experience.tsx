import { Building2 } from 'lucide-react';
import { personalData } from '../data';
import { Section, SectionHeading } from './ui';

export default function Experience() {
  return (
    <Section id="experience">
      <SectionHeading id="experience" index="02" label="Experience" title="Where I ship." />

      <ol className="relative border-l border-line pl-8 md:pl-12">
        <span aria-hidden="true" className="absolute -left-px top-0 h-40 w-px bg-gradient-to-b from-cyan via-pink to-transparent" />
        {personalData.experience.map((job) => (
          <li key={job.company} data-reveal className="relative">
            <span aria-hidden="true" className="pulse-dot absolute -left-[calc(2rem+5px)] top-2 h-2.5 w-2.5 rounded-full bg-cyan md:-left-[calc(3rem+5px)]" />
            <article data-spot className="panel p-6 md:p-10">
              <header className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-ink md:text-3xl">{job.role}</h3>
                  <p className="mt-2 flex items-center gap-2 text-lg text-cyan">
                    <Building2 size={18} aria-hidden="true" /> {job.company}
                  </p>
                  <p className="mt-1 text-sm text-muted">Client: {job.client}</p>
                </div>
                <div className="font-mono text-sm text-muted md:text-right">
                  <p className="inline-flex items-center gap-2 rounded-full border border-lime/40 px-3 py-1 text-lime">
                    <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-lime" aria-hidden="true" />
                    {job.period}
                  </p>
                  <p className="mt-2">{job.location}</p>
                </div>
              </header>

              <ul className="mt-8 grid gap-4">
                {job.highlights.map((h, i) => (
                  <li key={i} className="flex gap-4 text-muted leading-relaxed">
                    <span aria-hidden="true" className="mt-1 font-mono text-xs text-pink">0{i + 1}</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-2">
                {job.stack.map((t) => (
                  <span key={t} className="chip">{t}</span>
                ))}
              </div>
            </article>
          </li>
        ))}
      </ol>
    </Section>
  );
}
