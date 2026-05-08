import type { Metadata } from 'next'
import PersonPage, { type PersonData } from '@/components/person/PersonPage'
import { BRANDON_SPEAKING, BRANDON_PUBS } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Brandon Carson — Elevate · Executive coaching & learning strategy',
  description:
    'Brandon Carson leads the Elevate practice — executive coaching, career coaching, and learning strategy for HR and L&D leaders.',
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
  variant: 'elevate',
  photo: '/assets/brandon.jpg',
  nameLine1: 'Brandon',
  nameLine2: 'Carson',
  initials: 'BC',
  side: 'Elevate · the human side',
  role: 'Executive coaching and learning strategy lead. I work one-on-one with leaders, and design the systems that develop them at scale.',
  tags: [
    '25+ years in enterprise HR & L&D',
    'ICF-credentialed coach',
    'Published author',
    'Capability strategy',
    'Career & executive coaching',
  ],
  stats: [
    { num: '25+', label: 'Years leading enterprise\nHR and L&D functions' },
    { num: '200+', label: 'Senior leaders coached\nacross industries' },
    { num: '3', label: 'Published books on\nworkforce learning' },
    { num: 'ICF', label: 'Credentialed coach,\nInternational Coaching Federation' },
  ],
  bioTitle: 'A coach with a systems brain.',
  bio: (
    <>
      <p style={{ marginBottom: '22px' }}>
        I&apos;ve spent most of my career inside the L&D function at large
        enterprises — designing learning ecosystems, building capability
        frameworks, and figuring out how the people around me actually grow
        inside the systems they work in.
      </p>
      <p style={{ marginBottom: '22px' }}>
        Somewhere along the way I noticed that{' '}
        <strong style={{ fontWeight: 500 }}>
          the systems work matters most when it lands in a person
        </strong>
        . A frame, a question, a conversation that helps someone see their next
        move clearly. That&apos;s coaching. Eventually I trained for it formally,
        and now it&apos;s half my practice.
      </p>
      <p style={{ marginBottom: '22px' }}>
        The Elevate side is where that work lives.{' '}
        <strong style={{ fontWeight: 500 }}>Executive coaching</strong> for
        senior leaders navigating new scope, new chapters, or the kind of moment
        that asks for a different version of themselves.{' '}
        <strong style={{ fontWeight: 500 }}>Career coaching</strong> for
        individual contributors and emerging leaders making deliberate moves.
        And{' '}
        <strong style={{ fontWeight: 500 }}>learning strategy</strong> work for
        the HR and L&D teams responsible for everyone else.
      </p>
      <p>
        I keep both hands in the work — coaching individuals and shaping the
        systems around them — because the two reinforce each other. A coach
        who&apos;s never run an L&D org will miss things. A capability strategist
        who&apos;s never coached a real person will miss other things. I try not to
        miss either.
      </p>
    </>
  ),
  offeringsEyebrow: 'What I work on',
  offeringsHeadline: (
    <>
      Three ways I tend
      <br />
      to engage
    </>
  ),
  offeringsDesc:
    'From quarterly coaching engagements to multi-month strategy work. Most relationships start with a no-pressure intro call to figure out which shape fits.',
  offerings: [
    {
      icon: 'ArrowUp',
      title: 'Executive coaching',
      desc: 'One-on-one work with senior leaders — VPs, CHROs, CLOs — navigating a new role, a step up in scope, or a moment that asks them to lead differently. Typically a six-month engagement, twice-monthly sessions.',
    },
    {
      icon: 'Route',
      title: 'Career coaching',
      desc: 'For individual contributors, emerging managers, and mid-career professionals making deliberate moves — into management, across functions, into a different industry, or out of a plateau they\'ve been stuck in.',
    },
    {
      icon: 'Layers',
      title: 'Learning strategy & ecosystem design',
      desc: 'For HR and L&D leaders building or rebuilding their function: capability frameworks, learning architectures, and operating models that turn training spend into actual workforce growth.',
    },
  ],
  pubsEyebrow: 'Writing & published work',
  pubsDesc:
    'Books, articles, and frameworks on learning ecosystems, capability development, and the future of work.',
  pubs: BRANDON_PUBS,
  speakDesc: (
    <>
      A selection of upcoming keynotes, workshops, and conference sessions.
      Booking enquiries:{' '}
      <a
        href="mailto:speaking@innovate-elevate.ai"
        style={{ color: '#2563EB' }}
      >
        speaking@innovate-elevate.ai
      </a>
      .
    </>
  ),
  speaking: BRANDON_SPEAKING,
  contactHeadline: (
    <>
      Let&apos;s talk about{' '}
      <em style={{ color: '#93C5FD' }}>where you&apos;re trying to go</em>.
    </>
  ),
  contactDesc:
    "Coaching engagement, capability strategy work, or just a conversation — a paragraph or two about what you're navigating is plenty to start. I'll write back within two business days.",
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
      label: 'Coaching intake',
      value: 'Book a 30-minute intro call',
      href: 'https://go.innovate-elevate.ai/meetwithbrandon',
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

export default function BrandonPage() {
  return <PersonPage data={data} />
}
