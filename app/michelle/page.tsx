import type { Metadata } from 'next'
import PersonPage, { type PersonData } from '@/components/person/PersonPage'
import { MICHELLE_SPEAKING, MICHELLE_PUBS } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Michelle Lentz — Innovate · AI strategy & enablement',
  description:
    'Michelle Lentz leads the Innovate practice — AI strategy, governance, and workforce enablement for HR and L&D organizations.',
}

const CONTACT_ICON = (path: React.ReactNode) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {path}
  </svg>
)

const data: PersonData = {
  variant: 'innovate',
  photo: '/assets/michelle.jpg',
  nameLine1: 'Michelle',
  nameLine2: 'Lentz',
  initials: 'ML',
  side: 'Innovate · the AI side',
  role: 'AI strategy and enablement lead. I help HR and L&D organizations move from AI-curious to AI-capable — without leaving their people behind.',
  tags: [
    '20+ years in enterprise L&D',
    'Google Cloud Generative AI Leader',
    'MS, AI in Business · ASU',
    'Published author',
    'International keynote speaker',
  ],
  stats: [
    { num: '20+', label: 'Years leading enterprise\nL&D and change initiatives' },
    { num: '3+', label: 'Published frameworks and\ngovernance ebooks' },
    { num: '4', label: 'Continents reached through\nkeynotes and workshops' },
    { num: '1', label: 'MS in AI in Business,\ncurrently underway at ASU' },
  ],
  bioTitle: 'A practitioner first.',
  bio: (
    <>
      <p style={{ marginBottom: '22px' }}>
        I&apos;ve spent two decades inside enterprise L&D — at Oracle, at UPS, and
        inside the kind of consulting engagements where you learn what actually
        moves the needle and what just looks good in a deck.
      </p>
      <p style={{ marginBottom: '22px' }}>
        What I keep finding:{' '}
        <strong style={{ fontWeight: 500 }}>the technology mostly works</strong>.
        The hard part is the humans, and the systems they work inside. AI
        hasn&apos;t changed that — if anything, it&apos;s made it sharper.
      </p>
      <p style={{ marginBottom: '22px' }}>
        The Innovate practice is where I bring that lens. Strategy, governance,
        and enablement work for HR and L&D organizations that want to adopt AI
        seriously. Not a pilot to put in the all-hands. The actual work —
        policy, capability frameworks, learning programs, change management —
        that turns AI from a buzzword into a workforce capability.
      </p>
      <p>
        I&apos;m also currently completing an{' '}
        <strong style={{ fontWeight: 500 }}>
          MS in AI in Business at Arizona State
        </strong>
        , hold the{' '}
        <strong style={{ fontWeight: 500 }}>
          Google Cloud Generative AI Leader
        </strong>{' '}
        certification, and authored the curriculum for the Google Gemini Master
        certification on Coursera. The credentials matter less than what
        they&apos;re for: bringing rigor to a space full of vibes.
      </p>
    </>
  ),
  offeringsEyebrow: 'What I work on',
  offeringsHeadline: (
    <>
      Three places organizations
      <br />
      tend to bring me in
    </>
  ),
  offeringsDesc:
    'Engagements range from a half-day strategy session to multi-quarter implementations. Some clients want one of these; most want a combination.',
  offerings: [
    {
      icon: 'Compass',
      title: 'AI strategy & roadmapping',
      desc: 'Enterprise AI strategy, technology prioritization, and phased implementation roadmaps that account for your culture, your risk tolerance, and the specific shape of your workforce.',
    },
    {
      icon: 'ShieldCheck',
      title: 'Governance & responsible AI',
      desc: 'Risk frameworks, policy development, and the Five Pillars governance model — built specifically for HR and L&D organizations and the regulatory environments they operate in.',
    },
    {
      icon: 'GraduationCap',
      title: 'Workforce AI enablement',
      desc: 'Custom learning programs, the AI Fluency Ladder framework (Dabbler → Innovator), and curricula that move your people from AI-curious to AI-capable in measurable ways.',
    },
  ],
  pubsEyebrow: 'Writing & published work',
  pubsDesc:
    'A sample of recent work — books, ebooks, and contributions to the field\'s conversation about AI, governance, and the future of L&D.',
  pubs: MICHELLE_PUBS,
  speakDesc: (
    <>
      A selection of upcoming keynotes and workshops. Booking enquiries:{' '}
      <a
        href="mailto:speaking@innovate-elevate.ai"
        style={{ color: '#0B8F68' }}
      >
        speaking@innovate-elevate.ai
      </a>
      .
    </>
  ),
  speaking: MICHELLE_SPEAKING,
  contactHeadline: (
    <>
      Let&apos;s talk about your <em style={{ color: '#0B8F68' }}>AI moment</em>.
    </>
  ),
  contactDesc:
    "A paragraph or two about what your organization is wrestling with is plenty to start. I'll write back within two business days with whether and how I can help.",
  contactRows: [
    {
      icon: CONTACT_ICON(
        <>
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-10 5L2 7" />
        </>
      ),
      label: 'Email',
      value: 'info@innovate-elevate.ai',
      href: 'mailto:info@innovate-elevate.ai',
    },
    {
      icon: CONTACT_ICON(
        <>
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </>
      ),
      label: 'Schedule',
      value: 'Book a 30-minute intro call',
      href: 'https://go.innovate-elevate.ai/meetwithmichelle',
    },
    {
      icon: CONTACT_ICON(
        <>
          <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
          <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
          <line x1="12" y1="19" x2="12" y2="23" />
        </>
      ),
      label: 'Speaking enquiries',
      value: 'speaking@innovate-elevate.ai',
      href: 'mailto:speaking@innovate-elevate.ai',
    },
  ],
}

export default function MichellePage() {
  return <PersonPage data={data} />
}
