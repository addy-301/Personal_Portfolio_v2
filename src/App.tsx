import { useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Impact from './components/Impact';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Recognition from './components/Recognition';
import Contact from './components/Contact';
import { initFx } from './lib/fx';

function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-8 font-mono text-xs text-muted md:flex-row md:px-8">
        <p>
          © <span suppressHydrationWarning>{new Date().getFullYear()}</span> Aditya Verma · Mumbai, India
        </p>
        <p>
          Built with ❤️ ·{' '}
          <a href="#top" className="text-cyan hover:underline">back to top ↑</a>
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  useEffect(() => initFx(), []);

  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <div className="progress" aria-hidden="true" />
      <div className="aurora" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <Nav />
      <main id="main">
        <Hero />
        <Impact />
        <Experience />
        <Projects />
        <Skills />
        <Recognition />
        <Contact />
      </main>
      <Footer />
      <Analytics />
      <SpeedInsights />
    </>
  );
}
