import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Speaking — Innovate + Elevate',
  description:
    'Keynotes, workshops, and conference sessions on AI strategy, workforce transformation, executive coaching, and the future of HR & L&D.',
}

const MICHELLE_TOPICS = [
  {
    title: 'AI strategy & workforce enablement',
    desc: 'How HR and L&D leaders can build AI capability across their organizations — from governance frameworks to practical fluency programs. Actionable and grounded in real implementation.',
  },
  {
    title: 'Humanizing AI transformation',
    desc: 'A culture-centered change management framework for organizations adopting AI. Balances the urgency of transformation with the need to bring people along.',
  },
  {
    title: 'Critical thinking & AI',
    desc: 'The human judgment skills that make AI actually useful — and how to develop them intentionally inside learning organizations.',
  },
  {
    title: 'Inspired instructional design',
    desc: 'Creativity, copyright, and next-gen learning design. Fan-favorite sessions that blend unexpected cultural references with practical design principles.',
  },
]

const BRANDON_TOPICS = [
  {
    title: 'Building the AI-powered workforce',
    desc: 'Six strategic actions executive teams should take to prepare their L&D functions for the age of AI. Co-developed with Dr. Markus Bernhardt and grounded in enterprise experience.',
  },
  {
    title: 'Leadership development in a skills economy',
    desc: 'How organizations are rethinking leadership development as skills-based talent models replace traditional career ladders. Practical frameworks for L&D and CHRO audiences.',
  },
  {
    title: 'From training department to capability function',
    desc: 'The transformation required for L&D to earn a strategic seat — new scope, new stakeholder relationships, new ways of demonstrating value.',
  },
  {
    title: 'Executive coaching for the AI era',
    desc: 'How senior leaders need to adapt their decision-making, communication, and team development practices as AI reshapes the workplace.',
  },
]

const MICHELLE_RECENT = [
  { event: 'ATD International Conference and Exposition', topic: 'Brain, Heart, and Courage: Strengthening Critical Thinking with AI', yr: '2026' },
  { event: 'ASU-GSV Summit', topic: 'ROI in the Age of AI: Lessons from the Field', yr: '2026' },
  { event: 'Learning Guild L&D Trends Online Conference', topic: 'Learning Leaders as AI Change Agents: Leading Transformation', yr: '2025' },
  { event: 'ATD Asia-Pacific Conference, Taiwan', topic: 'Humanizing AI Transformation: A Culture-Centered Change Framework', yr: '2025' },
  { event: 'ATD OrgDev', topic: 'Humanizing AI Transformation: A Culture-Centered Change Framework', yr: '2025' },
  { event: 'Training Magazine TechLearn', topic: 'Moving Right Along: Muppet Wisdom for Tech-Enhanced Learning', yr: '2025' },
  { event: 'ATD Core4', topic: 'Inspired Instructional Design: Muppet Magic for Next-Gen Learning', yr: '2025' },
  { event: 'ATD Puget Sound', topic: 'Building the AI-Powered Workforce', yr: '2025' },
  { event: 'SHRM Talent', topic: 'Bridging AI & Human Potential: Positive Change Management for HR', yr: '2025' },
  { event: 'Clarity Consultants Webinar', topic: 'Critical Thinking & AI: Skills that Make AI Useful', yr: '2025', href: 'https://youtu.be/bMhSzhuDAiE?si=RzfQ1BFv8xbIfVKV' },
  { event: 'L&D Cares', topic: 'D for Doubt (Part 1 of the DUAL series)', yr: '2025', href: 'https://youtu.be/1IvevlJrGco?si=TCV2Kzjv4w_ffUvh' },
]

const MICHELLE_ARCHIVE = [
  { event: 'Learning Guild Empowering ID with AI Online Conference', topic: 'Using AI to Transform Strategic Decision Making', yr: '2024' },
  { event: 'ATD Houston Empower Talent Conference', topic: 'Down the Rabbit Hole: Design Thinking for AI', yr: '2024' },
  { event: 'Training Magazine TechLearn', topic: 'Beyond Pixels: Copyright and Ethics in AI and eLearning', yr: '2024' },
  { event: 'GovAI SLED Conference', topic: 'Preparing State and Local Government Workforces for AI Adoption', yr: '2024' },
  { event: 'ATD International Conference & Exposition', topic: 'Down the Rabbit Hole: Design Thinking for AI', yr: '2024' },
  { event: 'Learning Technologies London', topic: 'Down the Rabbit Hole: Design Thinking for AI', yr: '2024' },
  { event: 'Learning Guild', topic: 'Bridging AI & Human Potential Through Change Management for L&D', yr: '2024' },
  { event: 'Learning Guild Learning Solutions', topic: "Keepin' It Legal: Creative Commons, Copyright, and Free Stuff", yr: '2022' },
  { event: 'ATD TechKnowledge', topic: 'Fearless Instructional Design: Learning from the Imagination of Jim Henson', yr: '2020' },
  { event: 'ATD TechKnowledge', topic: 'Putting the Human Back in HR', yr: '2018' },
  { event: 'ATD Atlanta ACE', topic: "Keynote — Keepin' It Legal: Creative Commons, Copyright, and Free Stuff", yr: '2014' },
  { event: 'DevLearn', topic: 'Fearless Instructional Design; Creative Commons and Open Source', yr: '2013' },
  { event: 'mLearnCon', topic: "Keepin' It Legal: Copyright and Creative Commons for Mobile", yr: '2013' },
  { event: 'DevLearn', topic: 'Social Media Policy and Training', yr: '2012' },
  { event: 'mLearnCon', topic: 'Designing for Multiple Devices', yr: '2012' },
  { event: 'DevLearn', topic: 'Engaging with Enterprise Social Media; Yours, Mine, & Ours', yr: '2011' },
]

export default function SpeakingPage() {
  return (
    <div className="bg-white min-h-screen">

      {/* ── HERO ── */}
      <section className="bg-midnight text-white px-5 pt-32 pb-16 md:px-20 md:pt-40 md:pb-24 relative overflow-hidden">
        <div
          className="absolute -top-[80px] -right-[80px] w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(11,143,104,0.18) 0%, transparent 65%)' }}
        />
        <div
          className="absolute bottom-[-60px] left-[-60px] w-[360px] h-[360px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(96,165,250,0.12) 0%, transparent 65%)' }}
        />
        <div className="relative max-w-[860px]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.125rem] text-emerald mb-4">
            Speaking
          </p>
          <h1
            className="font-display font-normal text-white leading-[1.05] mb-6"
            style={{ fontSize: 'clamp(36px, 5vw, 64px)', letterSpacing: '-0.05rem' }}
          >
            Talks and workshops on AI,
            <br className="hidden md:block" /> learning, and the future of work.
          </h1>
          <p className="text-[16px] md:text-[18px] text-white/60 font-light leading-relaxed max-w-[600px] mb-8">
            Michelle and Brandon speak to HR and L&D audiences at conferences, corporate events, and leadership gatherings worldwide. Sessions blend strategy, plain language, and practical examples.
          </p>
          <a
            href="mailto:speaking@innovate-elevate.ai"
            className="inline-flex items-center gap-2 text-[14px] font-medium text-white bg-emerald hover:bg-emerald-mid transition-colors px-5 py-2.5 rounded-3xl"
          >
            speaking@innovate-elevate.ai
          </a>
        </div>
      </section>

      {/* ── MICHELLE ── */}
      <section className="px-5 py-16 md:px-20 md:py-24 border-b border-[rgba(13,27,53,0.08)]">
        <div className="max-w-[1180px]">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.125rem] text-emerald">
              Innovate · Michelle Lentz
            </p>
          </div>
          <h2
            className="font-display font-normal text-midnight mb-3 leading-snug"
            style={{ fontSize: 'clamp(26px, 3.5vw, 40px)', letterSpacing: '-0.05rem' }}
          >
            Speaker, facilitator, and explainer of complicated things.
          </h2>
          <p className="text-[15px] text-text-mid font-light leading-relaxed max-w-[620px] mb-10">
            Michelle helps audiences make sense of emerging technology without losing the human thread. Her sessions blend AI strategy, change management, and enough creative energy to keep the room engaged.
          </p>

          {/* Topics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-12">
            {MICHELLE_TOPICS.map((t) => (
              <div
                key={t.title}
                className="bg-[#F5F7FA] rounded-2xl p-6"
                style={{ border: '0.5px solid rgba(13,27,53,0.07)' }}
              >
                <h3 className="font-display text-[15px] font-medium text-midnight mb-2" style={{ letterSpacing: '-0.2px' }}>
                  {t.title}
                </h3>
                <p className="text-[13px] text-text-mid font-light leading-[1.7]">{t.desc}</p>
              </div>
            ))}
          </div>

          {/* Recent events */}
          <p className="text-[11px] font-semibold uppercase tracking-[0.125rem] text-emerald mb-4">
            Recent engagements
          </p>
          <div className="flex flex-col divide-y divide-[rgba(13,27,53,0.07)] max-w-[820px]">
            {MICHELLE_RECENT.map((e) => (
              <div key={`${e.event}-${e.yr}`} className="py-3.5 flex items-baseline gap-4 justify-between">
                <div className="flex-1 min-w-0">
                  <span className="text-[14px] text-midnight font-light">
                    {e.href ? (
                      <a href={e.href} target="_blank" rel="noopener noreferrer" className="hover:text-emerald transition-colors">
                        {e.event}
                      </a>
                    ) : (
                      e.event
                    )}
                  </span>
                  <span className="text-[13px] text-text-mid font-light"> · {e.topic}</span>
                </div>
                <span className="text-[12px] text-text-mid flex-shrink-0">{e.yr}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BRANDON ── */}
      <section className="px-5 py-16 md:px-20 md:py-24 border-b border-[rgba(13,27,53,0.08)] bg-[#F5F7FA]">
        <div className="max-w-[1180px]">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.125rem] text-blue-600">
              Elevate · Brandon Carson
            </p>
          </div>
          <h2
            className="font-display font-normal text-midnight mb-3 leading-snug"
            style={{ fontSize: 'clamp(26px, 3.5vw, 40px)', letterSpacing: '-0.05rem' }}
          >
            International keynote speaker on leadership, learning, and the skills economy.
          </h2>
          <p className="text-[15px] text-text-mid font-light leading-relaxed max-w-[620px] mb-10">
            Brandon brings 25+ years of enterprise L&D leadership to the stage — with a coaching sensibility and a systems perspective that resonates with executive and practitioner audiences alike.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {BRANDON_TOPICS.map((t) => (
              <div
                key={t.title}
                className="bg-white rounded-2xl p-6"
                style={{ border: '0.5px solid rgba(13,27,53,0.07)' }}
              >
                <h3 className="font-display text-[15px] font-medium text-midnight mb-2" style={{ letterSpacing: '-0.2px' }}>
                  {t.title}
                </h3>
                <p className="text-[13px] text-text-mid font-light leading-[1.7]">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MICHELLE ARCHIVE ── */}
      <section className="px-5 py-16 md:px-20 md:py-24 border-b border-[rgba(13,27,53,0.08)]">
        <div className="max-w-[1180px]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.125rem] text-emerald mb-2">
            Archive
          </p>
          <h2
            className="font-display font-normal text-midnight mb-8 leading-snug"
            style={{ fontSize: 'clamp(22px, 3vw, 32px)', letterSpacing: '-0.05rem' }}
          >
            Earlier presentations — Michelle Lentz
          </h2>
          <div className="flex flex-col divide-y divide-[rgba(13,27,53,0.07)] max-w-[820px]">
            {MICHELLE_ARCHIVE.map((e) => (
              <div key={`${e.event}-${e.yr}`} className="py-3 flex items-baseline gap-4 justify-between">
                <div className="flex-1 min-w-0">
                  <span className="text-[13px] text-midnight font-light">{e.event}</span>
                  <span className="text-[12px] text-text-mid font-light"> · {e.topic}</span>
                </div>
                <span className="text-[12px] text-text-mid flex-shrink-0">{e.yr}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOOKING ── */}
      <section className="bg-midnight text-white px-5 py-16 md:px-20 md:py-24">
        <div className="max-w-[680px]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.125rem] text-emerald mb-4">
            Book a speaker
          </p>
          <h2
            className="font-display font-normal text-white mb-4 leading-snug"
            style={{ fontSize: 'clamp(26px, 3.5vw, 42px)', letterSpacing: '-0.05rem' }}
          >
            Bring Michelle or Brandon to your event.
          </h2>
          <p className="text-[15px] text-white/60 font-light leading-relaxed mb-8">
            We speak at conferences, corporate offsites, leadership summits, and virtual events. Open to alternative time zones, travel, and international engagements. Reach out with your event details and we&apos;ll respond within two business days.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="mailto:speaking@innovate-elevate.ai"
              className="inline-flex items-center justify-center gap-2 text-[14px] font-medium text-white bg-emerald hover:bg-emerald-mid transition-colors px-5 py-3 rounded-3xl"
            >
              speaking@innovate-elevate.ai
            </a>
            <Link
              href="/michelle"
              className="inline-flex items-center justify-center text-[14px] font-medium text-white/70 hover:text-white border border-white/20 hover:border-white/40 transition-colors px-5 py-3 rounded-3xl"
            >
              Michelle&apos;s full profile
            </Link>
            <Link
              href="/brandon"
              className="inline-flex items-center justify-center text-[14px] font-medium text-white/70 hover:text-white border border-white/20 hover:border-white/40 transition-colors px-5 py-3 rounded-3xl"
            >
              Brandon&apos;s full profile
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
