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
  desc?: string
  href?: string
  download?: boolean
}

export interface PubListItem {
  title: string
  meta: string
  href?: string
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
    side: 'innovate',
    sideLabel: 'Innovate',
    icon: 'BarChart2',
    title: 'Learning audits',
    desc: 'A structured assessment of your L&D function — evaluating programs, technology, talent, and alignment with business strategy to identify gaps and prioritize investment.',
  },
  {
    side: 'elevate',
    sideLabel: 'Elevate',
    icon: 'ArrowUp',
    title: 'Executive & career coaching',
    desc: 'One-on-one work with senior leaders navigating new roles and expanded scope, and with emerging leaders making deliberate moves into management or across functions.',
  },
  {
    side: 'elevate',
    sideLabel: 'Elevate',
    icon: 'Target',
    title: 'Skills & skills-first strategy',
    desc: 'Advisory for organizations building skills-based talent models — from skills taxonomy design to integrating skills frameworks into hiring, learning, and career development.',
  },
  {
    side: 'elevate',
    sideLabel: 'Elevate',
    icon: 'Award',
    title: 'Leadership development',
    desc: 'Designing and building leadership development programs — from frontline manager training to senior leader development, high-potential cohorts, and succession pipelines.',
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

export const MICHELLE_PUBS: Publication[] = [
  {
    tag: 'Ebook · Clarity Consultants',
    title: 'From Risk to Responsibility: AI Governance in Your Organization',
    meta: 'Clarity Consultants',
    href: 'https://clarityconsultants.com/wp-content/uploads/2025/08/From-Risk-to-Responsibility-AI-Governance-in-Your-Organization__eBook.pdf',
  },
  {
    tag: 'Guidebook · ATD',
    title: 'Partner with AI for Instructional Design',
    meta: 'Featured in ATD Insights · 2025',
    href: 'https://www.td.org/product/td-at-work-guide--partner-with-ai-for-instructional-design/252502',
  },
  {
    tag: 'Article · Training Magazine',
    title: "From Content Creators to Capability Architects: L&D's Identity Shift in the AI Era",
    meta: 'Training Magazine · June 2025',
    href: 'https://trainingmag.com/from-content-creators-to-capability-architects-lds-identity-shift-in-the-ai-era/',
  },
]

export const MICHELLE_PUBS_LIST: PubListItem[] = [
  {
    title: 'The AI Fluency Ladder: Dabbler → Assistant → Collaborator → Innovator',
    meta: 'Framework · Innovate + Elevate',
  },
  {
    title: 'The 6 Pillars of L&D Learning Strategy',
    meta: 'Ebook · ELB Learning · 2024',
    href: 'https://drive.google.com/file/d/138splFbP6ACuWioO801hx1VGiAdRmg25/view',
  },
  {
    title: 'AI-ready or AI-hype? Evaluating real AI skills in the modern workforce',
    meta: 'Workshop · TrainingPros · 2024–25',
  },
  {
    title: 'Brave new learning: AI change management in a global context',
    meta: 'International conference session · ATD Asia-Pacific · 2025',
  },
  {
    title: 'Inspired Instructional Design: Lessons from the Muppets',
    meta: 'Blog · ATD',
    href: 'https://www.td.org/atd-blog/6-lessons-instructional-designers-can-learn-from-the-muppets',
  },
  {
    title: 'Two Different Ways to Prompt Your Favorite AI',
    meta: 'Blog · ELB Learning',
    href: 'https://blog.elblearning.com/two-different-ways-to-prompt-your-favorite-ai',
  },
  {
    title: 'The Rise of the AI-Augmented SME',
    meta: 'Blog · ELB Learning',
    href: 'https://blog.elblearning.com/the-rise-of-the-ai-augmented-sme',
  },
  {
    title: 'Resiliency In Transformational Change',
    meta: 'Blog · ELB Learning',
    href: 'https://blog.elblearning.com/resiliency-in-transformational-change',
  },
  {
    title: 'Embracing Agile Methodologies In L&D',
    meta: 'Blog · ELB Learning',
    href: 'https://blog.elblearning.com/embracing-agile-methodologies-in-ld',
  },
]

export const MICHELLE_PUBS_CONTRIBUTING: PubListItem[] = [
  {
    title: 'Action 2: Learning at Scale — The AI-Powered Workforce Series',
    meta: 'Co-authored by Michelle Lentz, Brandon Carson & Dr. Markus Bernhardt · ATD',
    href: 'https://www.td.org/content/talent-development-leader/action-2-learning-at-scale',
  },
  {
    title: "L&D's Playbook for the Digital Age by Brandon Carson · \"Distributed Work Environments\" (pp. 55–58)",
    meta: 'Contributing writer · ATD Press · 2021',
    href: 'https://a.co/d/06Ix3359',
  },
  {
    title: 'Ready, Set, Curate: 8 Learning Experts Tell You How · Chapter 7: Curation, Copyright and the Creative Commons',
    meta: 'Contributing writer · ATD Press · 2015',
    href: 'https://a.co/d/04r5QGDm',
  },
]

export const BRANDON_PUBS: Publication[] = [
  {
    tag: 'eBook',
    title: 'The AI-Powered Workforce: A CEO\'s Roadmap to Competitive Advantage',
    desc: 'Six strategic actions organizations can take to prepare their workforce for the AI era — building AI literacy, governance, and capability so that L&D becomes a driver of business strategy, not a support function.',
    meta: 'With Dr. Markus Bernhardt · View or download',
    href: '/ai-powered-workforce',
  },
  {
    tag: 'Book · ATD Press',
    title: "L&D's Playbook for the Digital Age",
    desc: "A comprehensive guide for L&D leaders navigating digital transformation — from rethinking learning architectures to building workforce capability for what's next. Second edition.",
    meta: 'ATD Press',
    href: 'https://a.co/d/06Ix3359',
  },
  {
    tag: 'Book · ATD Press',
    title: 'Learning in the Age of Immediacy: 5 factors for how we connect, communicate, and get work done',
    desc: 'Five forces are reshaping how people connect, communicate, and get work done — and what it means for how organizations must approach learning in a world that no longer waits.',
    meta: 'ATD Press',
    href: 'https://a.co/d/0980GhbF',
  },
]
