import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Speaking — Innovate + Elevate',
  description:
    'Keynotes, workshops, and conference sessions on AI strategy, workforce transformation, executive coaching, and the future of HR & L&D.',
}

const MICHELLE_TOPICS = [
  {
    title: 'AI strategy and enablement',
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

const MICHELLE_RECENT: { event: string; topic: string; yr: string; href?: string }[] = [
  { event: 'Training Magazine TechLearn Conference', topic: 'Stop Agreeing with Me: Escaping the AI Agreement Machine', yr: '2026', href: 'https://www.techlearnconference.com/' },
  { event: 'ATD International Conference and Exposition', topic: 'Brain, Heart, and Courage: Strengthening Critical Thinking with AI', yr: '2026', href: 'https://atdconference.td.org/' },
  { event: 'ASU-GSV Summit', topic: 'ROI in the Age of AI: Lessons from the Field (with Dr. Angela Jackson)', yr: '2026' },
  { event: 'Learning Guild L&D Trends Online Conference', topic: 'Learning Leaders as AI Change Agents: Leading Transformation', yr: '2025', href: 'https://www.learningguild.com/online-events-archive/learning-leaders-as-ai-change-agents-leading-transformation' },
  { event: 'Hone', topic: 'Masterclass: Bridging AI for Human Potential: Positive Change Management for Leaders', yr: '2025', href: 'https://app.honehq.com/classes/3952/masterclass-bridging-ai-for-human-potential-positive-change-management-for-leaders' },
  { event: 'ATD Asia-Pacific Conference, Taiwan', topic: 'Humanizing AI Transformation: A Culture-Centered Change Framework', yr: '2025', href: 'https://www.atdapc.org.tw/en' },
  { event: 'ATD OrgDev', topic: 'Humanizing AI Transformation: A Culture-Centered Change Framework for OD Leaders', yr: '2025', href: 'https://orgdev.td.org/' },
  { event: 'Training Magazine TechLearn', topic: 'Moving Right Along: Muppet Wisdom for Tech-Enhanced Learning', yr: '2025', href: 'https://www.techlearnconference.com/' },
  { event: 'ATD Core4', topic: 'Inspired Instructional Design: Muppet Magic for Next-Gen Learning', yr: '2025', href: 'https://core4.td.org/' },
  { event: 'TrainingPros Podcast', topic: 'Learning Leader Spotlight: Driving AI-Powered Change in L&D', yr: '2025', href: 'https://trainingpros.com/podcast-summary-driving-ai-powered-change-in-ld-with-michelle-lentz-of-innovate-elevate-strategies/' },
  { event: 'Association of National Advertisers Summer Council', topic: 'AI at Work: Leading Change, Building Skills', yr: '2025' },
  { event: 'TrainingPros Corporate', topic: 'AI Ready or AI Hype for Recruiters: Buzzwords vs Ability', yr: '2025' },
  { event: 'ATD Puget Sound', topic: 'Building the AI-Powered Workforce', yr: '2025', href: 'https://www.atdpugetsound.org/event-6272616' },
  { event: 'Masie Center', topic: 'AI & Learning: A 360 Degree View — Panel with Elliott Masie, Richard Culotta, and David Farelly', yr: '2025' },
  { event: 'SHRM Talent 2025', topic: 'Bridging AI & Human Potential: Positive Change Management for HR', yr: '2025', href: 'https://conferences.shrm.org/conference/2025-talent-conference-expo/' },
  { event: 'Clarity Consultants Webinar', topic: 'Critical Thinking & AI: Skills that Make AI Useful', yr: '2025', href: 'https://youtu.be/bMhSzhuDAiE?si=RzfQ1BFv8xbIfVKV' },
  { event: 'L&D Cares Webinar', topic: 'D for Doubt (Part 1 of the DUAL series, with Ben Eden)', yr: '2025', href: 'https://youtu.be/1IvevlJrGco?si=TCV2Kzjv4w_ffUvh' },
  { event: 'Training Magazine Conference', topic: 'The Future-Ready Instructional Designer: Thriving in an AI-Powered World', yr: '2025', href: 'https://www.trainingconference.com/2025/index.cfm' },
  { event: 'ATD TechKnowledge 2025', topic: 'TK Solve: AI (with Josh Cavalier and Joe Leslie)', yr: '2025', href: 'https://techknowledge.td.org/' },
  { event: 'Ziplines Education', topic: 'AI Automation: AI Governance and Change Management', yr: '2025', href: 'https://www.ziplines.com/courses/ai-automation-course' },
  { event: 'Kallidus', topic: 'Will the Results of the U.S. Election Impact Your Next L&D Decision? — AI governance panel', yr: '2024' },
  { event: 'Go1 x Blinkist', topic: 'Design Thinking for AI Prompting', yr: '2024', href: 'https://www.go1.com/blog/master-ai-prompts-using-design-thinking' },
  { event: 'Gyde.ai Navigate \'24', topic: 'Understanding Learner Behavior — Panel for L&D professionals', yr: '2024' },
  { event: 'Ziplines Education', topic: 'AI Essentials', yr: '2024–present', href: 'https://www.ziplines.com/courses/ai-prompting' },
]

const BRANDON_ENGAGEMENTS: { event: string; topic?: string; loc?: string; yr: string; href?: string }[] = [
  { event: 'ATD International Conference & Exposition', loc: 'Los Angeles', yr: '2026', href: 'https://atdconference.td.org/' },
  { event: 'DevLearn', yr: '2025', href: 'https://devlearn.com/' },
  { event: 'ATD Asia-Pacific Conference', topic: 'Keynote', loc: 'Taiwan', yr: '2025', href: 'https://www.atdapc.org.tw/en' },
  { event: 'Stockholm Learning Conference', topic: 'Keynote', yr: '2025', href: 'https://learningconference.se/' },
  { event: 'London iVentive', yr: '2025', href: 'https://iventiv.com/events/talent-management/talent-management-london-executive-knowledge-exchange-0' },
  { event: 'Paris iVentive', yr: '2025', href: 'https://iventiv.com/events/learning-futures/learning-futures-paris-executive-knowledge-exchange-5' },
  { event: 'ATD Southwest Learning Summit', topic: 'Keynote', loc: 'Dallas', yr: '2025', href: 'https://www.tddallas.org/event-5876369' },
  { event: 'ATD Puget Sound', topic: 'Building the AI-Powered Workforce (with Michelle Lentz)', yr: '2025', href: 'https://www.atdpugetsound.org/event-6272616' },
  { event: 'Albany ATD', topic: 'Keynote', yr: '2025' },
  { event: 'Learning Technologies', loc: 'London', yr: '2025', href: 'https://www.learningtechnologies.co.uk/' },
  { event: 'Docebo Inspire', topic: 'Featured Speaker', yr: '2025', href: 'https://inspire.docebo.com/' },
  { event: 'ATD TechKnowledge', topic: 'Rock Stars L&D Panel', yr: '2025', href: 'https://techknowledge.td.org/' },
  { event: 'TrainingPros Roundtable: Talent Sustainability', topic: 'Keynote', loc: 'Dallas', yr: '2024' },
  { event: 'Houston ATD', topic: 'Closing Keynote', yr: '2024', href: 'https://tdhouston.org/' },
  { event: 'Cognota LearnOps Virtual Summit', topic: 'Leveraging an L&D Playbook to Improve Performance', yr: '2024', href: 'https://cognota.com/virtual-learnops-summit-2024/' },
]

const MICHELLE_ARCHIVE: { event: string; topic: string; yr: string; href?: string }[] = [
  { event: 'Learning Guild Empowering ID with AI Online Conference', topic: 'Using AI to Transform Strategic Decision Making', yr: '2024', href: 'https://www.youtube.com/watch?v=2LU9Jq-rLSA' },
  { event: 'Training Industry', topic: 'Retention Revolution: Strategies to Make Learning Stick', yr: '2024', href: 'https://www.youtube.com/watch?v=H7yt05_5SUU' },
  { event: 'Learning Guild', topic: 'The Future-Focused ID: Your Career in the Age of AI (with Ellen Burns-Johnson)', yr: '2024', href: 'https://youtu.be/tghG3okLTOM' },
  { event: 'ELB Learning', topic: 'Inspired Instructional Design: Lessons from the Muppets', yr: '2024', href: 'https://www.youtube.com/watch?v=svAbxS-r54s' },
  { event: 'ATD Houston Empower Talent Conference', topic: 'Down the Rabbit Hole: Design Thinking for AI', yr: '2024' },
  { event: 'Training Magazine TechLearn', topic: 'Beyond Pixels: Copyright and Ethics in AI and eLearning', yr: '2024' },
  { event: 'GovAI SLED Conference', topic: 'Preparing State and Local Government Workforces for AI Adoption', yr: '2024' },
  { event: 'ATD International Conference & Exposition', topic: 'Down the Rabbit Hole: Design Thinking for AI', yr: '2024' },
  { event: 'Learning Technologies London', topic: 'Down the Rabbit Hole: Design Thinking for AI', yr: '2024' },
  { event: 'Learning Guild', topic: 'Bridging AI & Human Potential Through Change Management for L&D', yr: '2024' },
  { event: 'Learning Guild', topic: 'Down the Rabbit Hole: Design Thinking for AI', yr: '2024' },
  { event: 'Learning Guild Learning Solutions', topic: "Keepin' It Legal: Creative Commons, Copyright, and Free Stuff", yr: '2022' },
  { event: 'ATD TechKnowledge', topic: 'Fearless Instructional Design: Learning from the Imagination of Jim Henson', yr: '2020' },
  { event: 'ATD TechKnowledge', topic: 'Putting the Human Back in HR', yr: '2018' },
  { event: 'ATD Atlanta ACE', topic: "Keynote — Keepin' It Legal: Creative Commons, Copyright, and Free Stuff", yr: '2014' },
  { event: 'ATD TechKnowledge', topic: "Keepin' It Legal; Pragmatic Principles of Mobile Design", yr: '2014' },
  { event: 'DevLearn', topic: 'Fearless Instructional Design; Creative Commons and Open Source', yr: '2013' },
  { event: 'mLearnCon', topic: "Keepin' It Legal: Copyright and Creative Commons for Mobile", yr: '2013' },
  { event: 'Training Conference', topic: "Keepin' It Legal; Instructional Design for Mobile Devices", yr: '2013' },
  { event: 'DevLearn', topic: 'Social Media Policy and Training', yr: '2012' },
  { event: 'mLearnCon', topic: 'Designing for Multiple Devices', yr: '2012' },
  { event: 'ATD TechKnowledge', topic: "Yours, Mine, & Ours: Copyright & Creative Commons", yr: '2012' },
  { event: 'DevLearn', topic: 'Engaging with Enterprise Social Media; Yours, Mine, & Ours', yr: '2011' },
  { event: 'Learning Guild Learning Solutions', topic: "Advanced Twitter; Keepin' It Legal", yr: '2011' },
  { event: 'ATD TechKnowledge', topic: 'Social Media 101; Beyond Search; TK Talks', yr: '2011' },
]

const TESTIMONIALS = [
  '"Michelle Lentz should speak on AI at all ATD conferences."',
  '"LOVED THIS SESSION! Michelle had such great ideas behind the use of AI ethically in L&D spaces."',
  '"Amazing. Practical and insightful and informative and engaging."',
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
            Michelle and Brandon speak to HR and L&D audiences at conferences, corporate events, and leadership gatherings worldwide. Sessions range from keynotes to half-day workshops and can be tailored to your audience.
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
          <p className="text-[15px] text-text-mid font-light leading-relaxed max-w-[620px] mb-6">
            Michelle helps audiences make sense of emerging technology without losing the human thread. Her sessions blend AI strategy, change management, and enough creative energy to keep the room engaged. Open to alternative time zones, travel, and international engagements.
          </p>
          <a
            href="https://www.linkedin.com/in/michelleslentz/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[13px] font-medium text-white bg-emerald hover:bg-emerald-mid transition-colors px-4 py-2 rounded-3xl mb-10"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            Connect on LinkedIn
          </a>

          {/* Testimonials */}
          <div className="flex flex-col md:flex-row gap-3 mb-10">
            {TESTIMONIALS.map((t) => (
              <div
                key={t}
                className="flex-1 bg-[#F5F7FA] rounded-2xl px-5 py-4"
                style={{ border: '0.5px solid rgba(13,27,53,0.07)' }}
              >
                <p className="text-[13px] text-text-mid font-light leading-[1.7] italic">{t}</p>
                <p className="text-[11px] text-text-mid/60 mt-2">— ATD Core4 session evaluation</p>
              </div>
            ))}
          </div>

          {/* Topics */}
          <p className="text-[11px] font-semibold uppercase tracking-[0.125rem] text-emerald mb-4">
            Signature topics
          </p>
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
              <div key={`${e.event}-${e.yr}-${e.topic}`} className="py-3.5 flex items-baseline gap-4 justify-between">
                <div className="flex-1 min-w-0">
                  {e.href ? (
                    <a href={e.href} target="_blank" rel="noopener noreferrer" className="text-[14px] text-midnight font-light hover:text-emerald transition-colors">
                      {e.event}
                    </a>
                  ) : (
                    <span className="text-[14px] text-midnight font-light">{e.event}</span>
                  )}
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
          <p className="text-[15px] text-text-mid font-light leading-relaxed max-w-[620px] mb-6">
            Brandon brings 25+ years of enterprise L&D leadership to the stage — with a coaching sensibility and a systems perspective that resonates with executive and practitioner audiences alike.
          </p>
          <a
            href="https://www.linkedin.com/in/brandoncarson/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[13px] font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors px-4 py-2 rounded-3xl mb-10"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            Connect on LinkedIn
          </a>

          {/* Topics */}
          <p className="text-[11px] font-semibold uppercase tracking-[0.125rem] text-blue-600 mb-4">
            Signature topics
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-12">
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

          {/* Engagements */}
          <p className="text-[11px] font-semibold uppercase tracking-[0.125rem] text-blue-600 mb-4">
            Recent engagements
          </p>
          <div className="flex flex-col divide-y divide-[rgba(13,27,53,0.10)] max-w-[820px]">
            {BRANDON_ENGAGEMENTS.map((e) => (
              <div key={`${e.event}-${e.yr}`} className="py-3.5 flex items-baseline gap-4 justify-between">
                <div className="flex-1 min-w-0">
                  {e.href ? (
                    <a href={e.href} target="_blank" rel="noopener noreferrer" className="text-[14px] text-midnight font-light hover:text-blue-600 transition-colors">
                      {e.event}
                    </a>
                  ) : (
                    <span className="text-[14px] text-midnight font-light">{e.event}</span>
                  )}
                  {e.topic && <span className="text-[13px] text-text-mid font-light"> · {e.topic}</span>}
                  {e.loc && <span className="text-[13px] text-text-mid font-light"> · {e.loc}</span>}
                </div>
                <span className="text-[12px] text-text-mid flex-shrink-0">{e.yr}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MICHELLE ARCHIVE ── */}
      <section className="px-5 py-16 md:px-20 md:py-24 border-b border-[rgba(13,27,53,0.08)]">
        <div className="max-w-[1180px]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.125rem] text-emerald mb-2">
            Archive · Michelle Lentz
          </p>
          <h2
            className="font-display font-normal text-midnight mb-8 leading-snug"
            style={{ fontSize: 'clamp(22px, 3vw, 32px)', letterSpacing: '-0.05rem' }}
          >
            Earlier presentations
          </h2>
          <div className="flex flex-col divide-y divide-[rgba(13,27,53,0.07)] max-w-[820px]">
            {MICHELLE_ARCHIVE.map((e) => (
              <div key={`${e.event}-${e.yr}-${e.topic}`} className="py-3 flex items-baseline gap-4 justify-between">
                <div className="flex-1 min-w-0">
                  {e.href ? (
                    <a href={e.href} target="_blank" rel="noopener noreferrer" className="text-[13px] text-midnight font-light hover:text-emerald transition-colors">
                      {e.event}
                    </a>
                  ) : (
                    <span className="text-[13px] text-midnight font-light">{e.event}</span>
                  )}
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
            We speak at conferences, corporate offsites, leadership summits, and virtual events. Sessions can be tailored as workshops ranging from 1–4 hours. Reach out with your event details and we&apos;ll respond within two business days.
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
