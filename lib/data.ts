export type Variant = 'innovate' | 'elevate'

export interface Service {
  side: Variant
  sideLabel: string
  icon: string
  title: string
  desc: string
}

export interface Pillar {
  n: string
  title: string
  desc: string
}

export interface HomeSpeakEvent {
  date: string
  yr: string
  event: string
  topic: string
  loc: string
  who: 'michelle' | 'brandon'
  whoLabel: string
}

export interface PersonSpeakEvent {
  date: string
  yr: string
  event: string
  topic: string
  loc: string
}

export interface Publication {
  tag: string
  title: string
  meta: string
}

export const SERVICES: Service[] = [
  {
    side: 'innovate',
    sideLabel: 'Innovate',
    icon: 'Compass',
    title: 'AI strategy & roadmapping',
    desc: 'Enterprise AI strategy, technology prioritization, and phased implementation roadmaps built around your people and your goals.',
  },
  {
    side: 'innovate',
    sideLabel: 'Innovate',
    icon: 'ShieldCheck',
    title: 'Governance & responsible AI',
    desc: 'Risk frameworks, policy development, and the Five Pillars governance model — built specifically for HR and L&D organizations.',
  },
  {
    side: 'innovate',
    sideLabel: 'Innovate',
    icon: 'GraduationCap',
    title: 'Workforce AI enablement',
    desc: 'Custom learning programs, AI fluency frameworks, and curricula that move your workforce from AI-curious to AI-capable.',
  },
  {
    side: 'elevate',
    sideLabel: 'Elevate',
    icon: 'ArrowUp',
    title: 'Executive coaching',
    desc: 'One-on-one work with senior leaders navigating the next chapter — new role, new scope, or a moment that calls for a different version of themselves.',
  },
  {
    side: 'elevate',
    sideLabel: 'Elevate',
    icon: 'Route',
    title: 'Career coaching',
    desc: 'Coaching for individual contributors and emerging leaders making deliberate moves — into management, across functions, or out of plateaus.',
  },
  {
    side: 'elevate',
    sideLabel: 'Elevate',
    icon: 'Layers',
    title: 'Learning strategy & ecosystem design',
    desc: 'Capability frameworks, learning architectures, and L&D operating models that turn training spend into actual workforce growth.',
  },
]

export const PILLARS: Pillar[] = [
  {
    n: '01',
    title: 'Systems first',
    desc: 'Strategy before tools. Governance before deployment. Architecture before content. The work that gets skipped is the work that determines whether anything sticks.',
  },
  {
    n: '02',
    title: 'People always',
    desc: 'Behind every initiative is a leader being asked to operate differently. Coaching is how that change actually lands — not as a memo, but as a person.',
  },
  {
    n: '03',
    title: 'Both, integrated',
    desc: "You don't choose between transforming the org and developing the leaders inside it. The two practices reinforce each other — that's why we built one firm around both.",
  },
]

export const HOME_SPEAKING: HomeSpeakEvent[] = [
  {
    date: 'Mar 4',
    yr: '2026',
    event: 'ATD International Conference',
    topic: 'Partner with AI for Instructional Design',
    loc: 'Orlando, FL',
    who: 'michelle',
    whoLabel: 'Michelle',
  },
  {
    date: 'Mar 18',
    yr: '2026',
    event: 'Chief Learning Officer Symposium',
    topic: 'Coaching the AI-era L&D leader',
    loc: 'Austin, TX',
    who: 'brandon',
    whoLabel: 'Brandon',
  },
  {
    date: 'Apr 9',
    yr: '2026',
    event: 'TrainingPros Live',
    topic: 'AI-ready or AI-hype? Evaluating real workforce skills',
    loc: 'Virtual',
    who: 'michelle',
    whoLabel: 'Michelle',
  },
  {
    date: 'Apr 22',
    yr: '2026',
    event: 'HR Tech Asia Pacific',
    topic: 'Brave new learning: AI change management in a global context',
    loc: 'Singapore',
    who: 'michelle',
    whoLabel: 'Michelle',
  },
  {
    date: 'May 7',
    yr: '2026',
    event: 'Learning Leaders Summit',
    topic: 'From individual contributor to learning architect',
    loc: 'New York, NY',
    who: 'brandon',
    whoLabel: 'Brandon',
  },
  {
    date: 'Jun 11',
    yr: '2026',
    event: 'Devlearn Workshop Series',
    topic: 'Governance frameworks for HR & L&D',
    loc: 'Las Vegas, NV',
    who: 'michelle',
    whoLabel: 'Michelle',
  },
]

export const MICHELLE_SPEAKING: PersonSpeakEvent[] = [
  {
    date: 'Mar 4',
    yr: '2026',
    event: 'ATD International Conference',
    topic: 'Partner with AI for Instructional Design · Featured session',
    loc: 'Orlando, FL',
  },
  {
    date: 'Apr 9',
    yr: '2026',
    event: 'TrainingPros Live',
    topic: 'AI-ready or AI-hype? Evaluating real workforce skills · Keynote',
    loc: 'Virtual',
  },
  {
    date: 'Apr 22',
    yr: '2026',
    event: 'HR Tech Asia Pacific',
    topic: 'Brave new learning: AI change management in a global context · Keynote',
    loc: 'Singapore',
  },
  {
    date: 'Jun 11',
    yr: '2026',
    event: 'Devlearn Workshop Series',
    topic: 'Governance frameworks for HR & L&D · Half-day workshop',
    loc: 'Las Vegas, NV',
  },
]

export const BRANDON_SPEAKING: PersonSpeakEvent[] = [
  {
    date: 'Mar 18',
    yr: '2026',
    event: 'Chief Learning Officer Symposium',
    topic: 'Coaching the AI-era L&D leader · Keynote',
    loc: 'Austin, TX',
  },
  {
    date: 'May 7',
    yr: '2026',
    event: 'Learning Leaders Summit',
    topic: 'From individual contributor to learning architect · Featured session',
    loc: 'New York, NY',
  },
  {
    date: 'May 21',
    yr: '2026',
    event: 'CHRO Roundtable',
    topic: 'Capability strategy in the AI era · Closed-door session',
    loc: 'Boston, MA',
  },
  {
    date: 'Jul 14',
    yr: '2026',
    event: 'Talent Connect',
    topic: 'The Capability Stack: ecosystem design for learning leaders · Workshop',
    loc: 'San Francisco, CA',
  },
]

export const MICHELLE_PUBS: Publication[] = [
  {
    tag: 'Ebook · Clarity Consultants',
    title: 'From Risk to Responsibility: AI Governance for HR & L&D Organizations',
    meta: '2025 · Featured by Chief Learning Officer',
  },
  {
    tag: 'Article · ATD',
    title: 'Partner with AI for Instructional Design',
    meta: 'ATD Insights · 2024',
  },
  {
    tag: 'Curriculum · Google & Coursera',
    title: 'Google Gemini Master Certification: course curriculum and assessments',
    meta: 'Author · 2024',
  },
  {
    tag: 'Framework',
    title: 'The AI Fluency Ladder: Dabbler → Assistant → Collaborator → Innovator',
    meta: 'Innovate + Elevate · ongoing',
  },
  {
    tag: 'Workshop · TrainingPros',
    title: 'AI-ready or AI-hype? Evaluating real AI skills in the modern workforce',
    meta: 'Workshop series · 2024–25',
  },
  {
    tag: 'Keynote · Taipei',
    title: 'Brave new learning: AI change management in a global context',
    meta: 'Asia Pacific L&D Summit · 2024',
  },
]

export const BRANDON_PUBS: Publication[] = [
  {
    tag: 'Book · ATD Press',
    title: "L&D's Playbook for the Digital Age",
    meta: 'Author · ATD Press · 2nd edition',
  },
  {
    tag: 'Book · ASTD',
    title: 'Learning in the Age of Immediacy: 5 factors for how we connect, communicate, and get work done',
    meta: 'Author',
  },
  {
    tag: 'Article · Chief Learning Officer',
    title: 'From training department to capability function: a transformation playbook',
    meta: 'CLO Magazine · 2024',
  },
  {
    tag: 'Framework',
    title: 'The Capability Stack: a model for designing enterprise learning ecosystems',
    meta: 'Innovate + Elevate · ongoing',
  },
  {
    tag: 'Podcast · L&D Cast',
    title: "Coaching the AI-era L&D leader: what changes, what doesn't",
    meta: 'Featured guest · 2025',
  },
  {
    tag: 'Article · ATD',
    title: 'From individual contributor to learning architect: a career path',
    meta: 'ATD Insights · 2025',
  },
]
