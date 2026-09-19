export const SITE_URL = 'https://averma.vercel.app';

export const personalData = {
  name: 'Aditya Verma',
  role: 'Software Engineer',
  location: 'Mumbai, Maharashtra, India',
  email: 'vaditya832@gmail.com',
  resume: '/Aditya_Verma_resume.pdf',
  roles: ['Software Engineer', 'Data Pipeline Engineer', 'AI Systems Builder', 'Full-Stack Developer'],
  tagline:
    'I build data platforms that move regulatory filings for 5,000+ banks, and AI systems that know when not to call an LLM.',
  socials: {
    linkedin: 'https://www.linkedin.com/in/-aditya-verma-/',
    github: 'https://github.com/addy-301',
    email: 'mailto:vaditya832@gmail.com',
  },

  impact: [
    { value: 4, suffix: '×', label: 'faster batch runs', detail: '60 → 15 min PySpark runtime' },
    { value: 230, suffix: '+', label: 'regulatory returns migrated', detail: 'RBI CIMS modernization' },
    { value: 50000, suffix: '+', label: 'data elements modelled', detail: 'element-based architecture' },
    { value: 5000, suffix: '+', label: 'banks & institutions served', detail: 'filing through the platform' },
  ],

  experience: [
    {
      role: 'Software Engineer',
      company: 'Tata Consultancy Services',
      client: 'Reserve Bank of India · CIMS',
      location: 'Mumbai, Maharashtra',
      period: 'Nov 2025 — Present',
      highlights: [
        'Engineered backend Python and PySpark services for the Reserve Bank of India’s CIMS modernization, migrating 230+ regulatory returns from a report-based repository to an element-based architecture spanning 50,000+ elements and serving filings from 5,000+ banks and financial institutions.',
        'Cut end-to-end batch runtime from 60 to 15 minutes by re-tuning PySpark resource allocation and refactoring execution logic, raising per-run throughput from ~50 to 200+ elements while eliminating timeouts.',
        'Built dual ingestion flows — direct element-based collection and report-to-element conversion — with dimension-mapping logic that guarantees lossless transformation across bulk historical migration and daily batches of 20,000–100,000+ rows.',
        'Designed automated validation and sanity-check routines gating every environment promotion, catching defects pre-release and driving 20 returns to live production for active bank filing.',
        'Lead a team of 3 engineers in an Agile environment, coordinating with cross-functional teams on requirements, defect triage and release readiness.',
      ],
      stack: ['Python', 'PySpark', 'SQL', 'Agile'],
    },
  ],

  projects: [
    {
      title: 'Revenue Risk & Growth Copilot',
      kicker: 'TCS AI Hackathon · National Finals · Sep 2026',
      description:
        'A multi-source intelligence layer above existing GTM systems. It correlates CRM, ticketing, messaging and email signals to surface revenue risks that are invisible when CRM is the only source of truth.',
      points: [
        'Three role-scoped surfaces (AE, RevOps, VP/CRO) over one shared signal pipeline.',
        'Deterministic, real-time risk scoring with per-signal attribution + XGBoost forecasting.',
        'Gated RAG layer (GPT-4o-mini, Claude Sonnet 4.6): LLM only when genuinely needed — lower token spend, grounded output.',
        'Human-in-the-loop by design. Shipped production-grade in 5 days.',
      ],
      tech: ['Python', 'React', 'PostgreSQL', 'XGBoost', 'RAG', 'Kafka', 'Redis'],
      link: null as string | null,
      viz: 'gate' as const,
      featured: true,
    },
    {
      title: 'Self-Driving Car Agent',
      kicker: 'Reinforcement Learning · Sep — Dec 2023',
      description:
        'An autonomous driving agent in Unity3D with ML-Agents — custom track, vehicle control, sensors and reward shaping in C#, trained end-to-end.',
      points: [
        'Benchmarked PPO vs SAC over 800k steps.',
        'SAC hit ~50% higher reward (144 vs 94); PPO matched policy in 33 min vs SAC’s 2.5 h.',
        'Diagnosed SAC entropy collapse vs PPO’s sustained exploration from TensorBoard curves.',
      ],
      tech: ['Unity3D', 'C#', 'ML-Agents', 'PPO', 'SAC'],
      link: 'https://github.com/addy-301/Self-Driving-Car-Agent-with-RL',
      viz: 'rl' as const,
      featured: true,
    },
    {
      title: 'Real-Time Vehicle Tracking',
      kicker: 'Smart India Hackathon 2023',
      description: 'Live vehicle tracking with socket-driven location updates and a map-first interface.',
      points: [],
      tech: ['React', 'Socket.IO', 'Express', 'MongoDB'],
      link: 'https://github.com/addy-301/RealTime-Vehicle-Tracking-System-SIH2023',
      viz: null,
      featured: false,
    },
    {
      title: 'WordSphere',
      kicker: 'Full-stack blogging platform',
      description: 'Blogging app with rich-text editing (TinyMCE), post management and filtering.',
      points: [],
      tech: ['React', 'Appwrite', 'Tailwind CSS'],
      link: 'https://word-sphere.vercel.app/',
      viz: null,
      featured: false,
    },
  ],

  skills: [
    { group: 'Languages', items: ['Python', 'Java', 'TypeScript', 'C++', 'HTML', 'CSS'] },
    { group: 'Frameworks', items: ['PySpark', 'React.js', 'Node.js', 'Express.js', 'REST APIs', 'Tailwind CSS'] },
    { group: 'AI / ML', items: ['Generative AI', 'RAG', 'Agentic AI', 'Reinforcement Learning', 'XGBoost'] },
    { group: 'Data', items: ['SQL', 'PostgreSQL', 'MongoDB', 'Mongoose'] },
    { group: 'Cloud & Tools', items: ['Microsoft Azure', 'Google Cloud', 'Docker', 'Git', 'GitHub', 'Vercel'] },
    { group: 'Practice', items: ['SDLC', 'Agile / Scrum', 'OOP', 'Data Structures & Algorithms'] },
  ],

  achievements: [
    {
      title: 'TCS AI Hackathon — National Finalist',
      body: 'One of 32 teams to reach the National Finals from 22,000+ participants after winning the Mumbai Regional Finals. Shipped a production-grade AI app in 5 days and presented to TCS leadership, including the CIO.',
      tag: 'Top 32 · 22k+',
    },
    {
      title: 'Innovation Superstar Award — TCS',
      body: 'Recognized by project leadership for sustained performance, and as the only engineer from the business unit to win the Mumbai Regional Finals.',
      tag: 'Award',
    },
    {
      title: 'Intra-University Coding Competition',
      body: 'Secured 3rd rank in a coding contest hosted by Graphic Era University.',
      tag: '3rd Rank',
    },
  ],

  certifications: [
    { name: 'Agentblazer Innovator', issuer: 'Salesforce' },
    { name: 'AWS GenAI Practitioner', issuer: 'AWS' },
    { name: 'Introduction to Generative AI', issuer: 'Google Cloud' },
    { name: 'Google Cloud Computing Fundamentals', issuer: 'Google Cloud' },
  ],

  education: {
    degree: 'B.Tech, Computer Science & Engineering',
    institute: 'Graphic Era University, Dehradun',
    period: '2021 — 2025',
    score: 'CGPA 8.32',
  },
};

export type Project = (typeof personalData.projects)[number];
