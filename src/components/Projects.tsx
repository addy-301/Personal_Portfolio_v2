import { ArrowUpRight, Github, Trophy } from 'lucide-react';
import { personalData, type Project } from '../data';
import { ExternalLink, Section, SectionHeading } from './ui';

/** Signals → deterministic scoring → LLM only when the gate opens. */
function GateViz() {
  const inputs = ['CRM', 'Tickets', 'Chat', 'Email'];
  return (
    <figure className="rounded-2xl border border-line bg-bg/40 p-4">
      <svg viewBox="0 0 440 170" className="h-auto w-full font-mono text-[10px]" role="img" aria-labelledby="gate-title">
        <title id="gate-title">Signals from CRM, tickets, chat and email feed a deterministic scoring engine; only unresolved cases pass a gate to the LLM.</title>
        {inputs.map((label, i) => {
          const y = 22 + i * 38;
          return (
            <g key={label}>
              <rect x="4" y={y - 12} width="64" height="24" rx="12" className="fill-surface stroke-line" />
              <text x="36" y={y + 3.5} textAnchor="middle" className="fill-muted">{label}</text>
              <path d={`M68 ${y} C 100 ${y}, 104 85, 130 85`} fill="none" className="flow stroke-cyan" strokeWidth="1.5" />
            </g>
          );
        })}
        <rect x="130" y="60" width="112" height="50" rx="10" className="fill-violet/15 stroke-violet" />
        <text x="186" y="81" textAnchor="middle" className="fill-ink font-semibold">scoring</text>
        <text x="186" y="97" textAnchor="middle" className="fill-muted">deterministic</text>

        <path d="M242 85 H 262" className="stroke-violet" strokeWidth="1.5" />
        <rect x="263" y="73" width="24" height="24" transform="rotate(45 275 85)" className="fill-pink/20 stroke-pink" />
        <text x="275" y="88.5" textAnchor="middle" className="fill-ink">?</text>

        <path d="M292 78 C 310 50, 320 38, 332 38" fill="none" className="flow stroke-lime" strokeWidth="2" />
        <text x="336" y="30" className="fill-lime">resolved</text>
        <text x="336" y="44" className="fill-muted">no LLM call</text>

        <path d="M292 92 C 310 120, 320 132, 332 132" fill="none" className="stroke-pink" strokeWidth="1.2" strokeDasharray="2 5" />
        <text x="336" y="128" className="fill-pink">LLM</text>
        <text x="336" y="142" className="fill-muted">only if needed</text>
      </svg>
      <figcaption className="mt-2 text-center font-mono text-[11px] text-muted">gated invocation → lower token spend, grounded output</figcaption>
    </figure>
  );
}

function RlViz() {
  const rows = [
    { metric: 'Cumulative reward', a: ['SAC', 144, 'from-cyan to-violet'], b: ['PPO', 94, 'from-violet to-pink'], max: 144, unit: '' },
    { metric: 'Wall-clock training', a: ['PPO', 33, 'from-lime to-cyan'], b: ['SAC', 150, 'from-amber to-pink'], max: 150, unit: ' min' },
  ] as const;
  return (
    <figure className="grid gap-5 rounded-2xl border border-line bg-bg/40 p-5 font-mono text-xs">
      {rows.map((r) => (
        <div key={r.metric}>
          <p className="mb-2 text-muted">{r.metric}</p>
          {[r.a, r.b].map(([name, v, grad]) => (
            <div key={name} className="mb-1.5 flex items-center gap-3">
              <span className="w-8 text-ink">{name}</span>
              <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-ink/10">
                <div className={`bar h-full rounded-full bg-gradient-to-r ${grad}`} style={{ ['--w' as string]: v / r.max }} />
              </div>
              <span className="w-14 text-right text-ink tabular-nums">{v}{r.unit}</span>
            </div>
          ))}
        </div>
      ))}
      <figcaption className="text-center text-[11px] text-muted">800k steps · sample efficiency vs training cost</figcaption>
    </figure>
  );
}

function FeaturedCard({ p, i }: { p: Project; i: number }) {
  return (
    <article data-reveal data-spot style={{ ['--d' as string]: i }} className="panel grid gap-8 overflow-hidden p-6 md:p-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
      <div>
        <p className="eyebrow flex items-center gap-2">
          {p.viz === 'gate' && <Trophy size={14} className="text-amber" aria-hidden="true" />}
          {p.kicker}
        </p>
        <h3 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">{p.title}</h3>
        <p className="mt-4 leading-relaxed text-muted">{p.description}</p>
        <ul className="mt-5 space-y-2">
          {p.points.map((pt) => (
            <li key={pt} className="flex gap-3 text-sm leading-relaxed text-muted">
              <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-pink" />
              {pt}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-2">
          {p.tech.map((t) => <span key={t} className="chip">{t}</span>)}
        </div>
        {p.link && (
          <ExternalLink href={p.link} className="btn btn-ghost mt-8">
            <Github size={17} aria-hidden="true" /> View source <ArrowUpRight size={16} aria-hidden="true" />
          </ExternalLink>
        )}
      </div>
      {p.viz === 'gate' ? <GateViz /> : <RlViz />}
    </article>
  );
}

export default function Projects() {
  const featured = personalData.projects.filter((p) => p.featured);
  const more = personalData.projects.filter((p) => !p.featured);
  return (
    <Section id="projects">
      <SectionHeading id="projects" index="03" label="Projects" title={<>Things I’ve <span className="text-chroma">built</span>.</>}>
        From a national-final AI copilot to reinforcement-learning agents.
      </SectionHeading>

      <div className="grid gap-6">
        {featured.map((p, i) => <FeaturedCard key={p.title} p={p} i={i} />)}
      </div>

      <h3 data-reveal className="mt-16 mb-6 font-mono text-sm uppercase tracking-[0.2em] text-muted">More builds</h3>
      <ul className="grid gap-4 md:grid-cols-2">
        {more.map((p, i) => (
          <li key={p.title} data-reveal style={{ ['--d' as string]: i }}>
            <a href={p.link!} target="_blank" rel="noopener noreferrer" data-spot className="panel group flex h-full flex-col p-6 transition-transform duration-300 hover:-translate-y-1">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-xs text-muted">{p.kicker}</p>
                  <h4 className="mt-2 text-xl font-bold text-ink">{p.title}</h4>
                </div>
                <ArrowUpRight className="shrink-0 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-pink" aria-hidden="true" />
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted">{p.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tech.map((t) => <span key={t} className="chip">{t}</span>)}
              </div>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
