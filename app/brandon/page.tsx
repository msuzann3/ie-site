import type { Metadata } from 'next'
import PersonPage, { type PersonData } from '@/components/person/PersonPage'
import { BRANDON_PUBS } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Brandon Carson — Elevate · Executive coaching & learning strategy',
  description:
    'Brandon Carson leads the Elevate practice — executive coaching, leadership development, and learning strategy for HR and L&D leaders.',
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
    'Executive & career coach',
    'Coached at Fortune 1',
    'International keynote speaker',
    'Leadership development',
    'Published author',
  ],
  stats: [
    { num: '25+', label: 'Years leading enterprise\nHR and L&D functions' },
    { num: '1,000+', label: 'Learners reached across\ncareers, cohorts, and coaching' },
    { num: '2', label: 'Published books on\nworkforce learning' },
    { num: 'No. 1', label: 'Fortune-ranked company where\nhe coached new executives' },
  ],
  bioTitle: 'A coach with a systems brain.',
  bio: (
    <>
      <p style={{ marginBottom: '22px' }}>
        Brandon Carson is a learning and development executive with more than
        25 years of experience building learning ecosystems, developing
        organizational capability, and advising senior leaders at some of the
        world&apos;s largest organizations.
      </p>
      <p style={{ marginBottom: '22px' }}>
        He is the author of two books published by ATD Press —{' '}
        <strong style={{ fontWeight: 500 }}>
          L&amp;D&apos;s Playbook for the Digital Age
        </strong>{' '}
        and{' '}
        <strong style={{ fontWeight: 500 }}>
          Learning in the Age of Immediacy
        </strong>{' '}
        — and a contributor to the{' '}
        <strong style={{ fontWeight: 500 }}>AI-Powered Workforce Series</strong>{' '}
        alongside Dr. Markus Bernhardt. His work has shaped how enterprises think
        about learning strategy, capability building, and the evolving role of
        the L&amp;D function.
      </p>
      <p style={{ marginBottom: '22px' }}>
        Brandon is also an executive and career coach. At the senior end, he
        works one-on-one with VPs, CHROs, and CLOs navigating pivotal moments
        in their careers — including coaching newly placed executives at a
        Fortune 1 company. And for anyone wanting to grow more deliberately in
        their work, he brings that same practice to career coaching at any
        level: helping people see the full picture and move with intention.
      </p>
      <p>
        Through the Elevate practice, he works with HR and L&amp;D leaders who
        are building and rebuilding their functions for what comes next: new
        expectations, new technology, and a workforce that is asking more of
        learning than ever before.
      </p>
    </>
  ),
  offeringsEyebrow: 'What I work on',
  offeringsHeadline: (
    <>
      Four ways I
      <br />
      engage
    </>
  ),
  offeringsDesc:
    'From quarterly coaching engagements to multi-month strategy work. Most relationships start with a no-pressure intro call to figure out which shape fits.',
  offerings: [
    {
      icon: 'ArrowUp',
      title: 'Executive & career coaching',
      desc: 'One-on-one coaching for senior leaders navigating new roles, expanded scope, or moments that ask them to lead differently — and for anyone at any level who wants to grow more deliberately in their work. Coaching meets you where you are.',
    },
    {
      icon: 'Users',
      title: 'Leadership development design',
      desc: 'Designing and building leadership development programs — from assessment-based development journeys and emerging leader pipelines to high-potential cohorts and manager effectiveness programs.',
    },
    {
      icon: 'Layers',
      title: 'Skills & learning strategy',
      desc: 'For HR and L&D leaders building or rebuilding their function: skills-based organization design, learning architectures, and operating models that connect skilling investment to measurable workforce capability.',
    },
    {
      icon: 'Compass',
      title: 'L&D function transformation',
      desc: 'Strategic advisory for L&D leaders transforming their function — from redefining the team\'s scope and stakeholder relationships to building the capability model and operating cadence that makes the function credible at the executive table.',
    },
  ],
  pubsEyebrow: 'Writing & published work',
  pubsDesc:
    'Two books, an article series, and ongoing writing on learning strategy, leadership development, and the future of workforce capability.',
  pubs: BRANDON_PUBS,
  speaking: [],
  speakDesc: <></>,
  linkedin: 'https://www.linkedin.com/in/brandoncarson/',
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
      label: 'Speaking inquiries',
      value: 'speaking@innovate-elevate.ai',
      href: 'mailto:speaking@innovate-elevate.ai',
    },
    {
      icon: CONTACT_ICON(
        <>
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </>
      ),
      label: 'LinkedIn',
      value: 'linkedin.com/in/brandoncarson',
      href: 'https://www.linkedin.com/in/brandoncarson/',
    },
  ],
}

export default function BrandonPage() {
  return <PersonPage data={data} />
}
