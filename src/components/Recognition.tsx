import { Award, BadgeCheck, GraduationCap } from 'lucide-react';
import { personalData } from '../data';
import { Section, SectionHeading } from './ui';

function Funnel() {
  const stages = [
    { label: 'Participants', value: '22,000+', w: 1 },
    { label: 'Mumbai Regional', value: 'Winner', w: 0.55 },
    { label: 'National Finals', value: 'Top 32 teams', w: 0.28 },
  ];
  return (
    <div data-reveal className="panel p-6 md:p-8">
      <p className="eyebrow">TCS AI Hackathon · 2026</p>
      <ol className="mt-6 space-y-3">
        {stages.map((s, i) => (
          <li key={s.label}>
            <div className="mb-1.5 flex justify-between font-mono text-xs">
              <span className="text-muted">{s.label}</span>
              <span className={i === stages.length - 1 ? 'text-lime' : 'text-ink'}>{s.value}</span>
            </div>
            <div className="h-8 overflow-hidden rounded-lg bg-ink/5">
              <div
                className="bar h-full rounded-lg bg-gradient-to-r from-cyan via-violet to-pink"
                style={{ ['--w' as string]: s.w, opacity: 0.45 + i * 0.27 }}
              />
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function Recognition() {
  const { achievements, certifications, education } = personalData;
  return (
    <Section id="recognition">
      <SectionHeading id="recognition" index="05" label="Recognition" title={<>Awards, certs &amp; <span className="text-chroma">foundations</span>.</>} />

      <div className="grid gap-4 lg:grid-cols-[1fr_1.3fr]">
        <Funnel />
        <ul className="grid gap-4">
          {achievements.map((a, i) => (
            <li key={a.title} data-reveal data-spot style={{ ['--d' as string]: i }} className="panel flex gap-4 p-6">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-amber/25 to-pink/25 text-amber">
                <Award size={22} aria-hidden="true" />
              </span>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg font-bold text-ink">{a.title}</h3>
                  <span className="rounded-full bg-pink/15 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-pink">{a.tag}</span>
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{a.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-[1.3fr_1fr]">
        <div data-reveal className="panel p-6 md:p-8">
          <h3 className="flex items-center gap-2 text-lg font-bold text-ink">
            <BadgeCheck size={20} className="text-cyan" aria-hidden="true" /> Certifications
          </h3>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {certifications.map((c) => (
              <li key={c.name} className="rounded-2xl border border-line bg-bg/40 p-4 transition-colors hover:border-cyan">
                <p className="font-medium text-ink">{c.name}</p>
                <p className="mt-1 font-mono text-xs text-muted">{c.issuer}</p>
              </li>
            ))}
          </ul>
        </div>

        <div data-reveal data-spot className="panel p-6 md:p-8">
          <h3 className="flex items-center gap-2 text-lg font-bold text-ink">
            <GraduationCap size={20} className="text-violet" aria-hidden="true" /> Education
          </h3>
          <div className="mt-6">
            <p className="text-xl font-bold text-ink">{education.degree}</p>
            <p className="mt-1 text-muted">{education.institute}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="chip">{education.period}</span>
              <span className="chip !border-lime/40 !text-lime">{education.score}</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
