import { personalData } from '../data';
import { formatNumber } from '../lib/fx';
import { Section, SectionHeading } from './ui';

const accents = ['from-cyan', 'from-violet', 'from-pink', 'from-amber'];

export default function Impact() {
  return (
    <Section id="impact">
      <SectionHeading id="impact" index="01" label="Impact" title={<>Numbers from <span className="text-chroma">production</span>, not prototypes.</>}>
        Backend and data engineering for the Reserve Bank of India’s CIMS modernization — the platform banks across India use to file regulatory returns.
      </SectionHeading>

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {personalData.impact.map((s, i) => (
          <li key={s.label} data-reveal data-spot style={{ ['--d' as string]: i }} className="panel group overflow-hidden p-6">
            <div aria-hidden="true" className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${accents[i]} to-transparent`} />
            <p className="text-5xl font-bold tracking-tight text-ink tabular-nums">
              <span data-count={s.value}>{formatNumber(s.value)}</span>
              <span className="text-chroma">{s.suffix}</span>
            </p>
            <p className="mt-3 font-medium text-ink">{s.label}</p>
            <p className="mt-1 font-mono text-xs text-muted">{s.detail}</p>
          </li>
        ))}
      </ul>

      <div data-reveal className="panel mt-4 grid gap-6 p-6 md:grid-cols-[1fr_2fr] md:items-center md:p-8">
        <div>
          <p className="eyebrow">Throughput per batch run</p>
          <p className="mt-2 text-muted">Re-tuned PySpark resource allocation and refactored execution logic.</p>
        </div>
        <div className="space-y-4 font-mono text-sm">
          <div>
            <div className="mb-1.5 flex justify-between text-muted"><span>before</span><span>~50 elements</span></div>
            <div className="h-3 overflow-hidden rounded-full bg-ink/10">
              <div className="bar h-full rounded-full bg-muted/50" style={{ ['--w' as string]: 0.25 }} />
            </div>
          </div>
          <div>
            <div className="mb-1.5 flex justify-between"><span className="text-ink">after</span><span className="text-lime">200+ elements</span></div>
            <div className="h-3 overflow-hidden rounded-full bg-ink/10">
              <div className="bar h-full rounded-full bg-gradient-to-r from-cyan via-violet to-pink" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
