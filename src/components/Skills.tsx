import { Brain, Cloud, Code2, Database, Layers, Workflow } from 'lucide-react';
import { personalData } from '../data';
import { Section, SectionHeading } from './ui';

const icons = [Code2, Layers, Brain, Database, Cloud, Workflow];
const tints = ['text-cyan', 'text-violet', 'text-pink', 'text-lime', 'text-amber', 'text-cyan'];

export default function Skills() {
  const all = personalData.skills.flatMap((g) => g.items);
  return (
    <Section id="skills">
      <SectionHeading id="skills" index="04" label="Skills" title={<>The <span className="text-chroma">toolkit</span>.</>} />

      <div data-reveal className="marquee -mx-5 mb-12 py-2 md:mx-0" aria-hidden="true">
        {[0, 1].map((copy) => (
          <div key={copy}>
            {all.map((s, i) => (
              <span key={s} className="whitespace-nowrap text-2xl font-semibold text-muted/70 md:text-4xl">
                {s}
                <span className={`ml-4 ${tints[i % tints.length]}`}>✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {personalData.skills.map((g, i) => {
          const Icon = icons[i];
          return (
            <li key={g.group} data-reveal data-spot style={{ ['--d' as string]: i % 3 }} className="panel p-6">
              <h3 className="flex items-center gap-3 text-lg font-bold text-ink">
                <span className={`grid h-10 w-10 place-items-center rounded-xl border border-line bg-bg/50 ${tints[i]}`}>
                  <Icon size={20} aria-hidden="true" />
                </span>
                {g.group}
              </h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <li key={s} className="chip">{s}</li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
