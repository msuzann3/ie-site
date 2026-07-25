const siteUrl = 'https://innovate-elevate.ai'

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'Innovate + Elevate Strategies, LLC',
      alternateName: ['Innovate + Elevate', 'I+E Strategies'],
      url: siteUrl,
      logo: `${siteUrl}/assets/logo-primary.svg`,
      email: 'info@innovate-elevate.ai',
      foundingLocation: {
        '@type': 'Place',
        name: 'Seattle, Washington',
      },
      areaServed: ['United States', 'Global'],
      description:
        'Innovate + Elevate is a two-practice consulting firm helping HR and L&D leaders adopt AI, build governance, enable their workforce, and strengthen leadership, skills, and learning strategy.',
      knowsAbout: [
        'AI strategy',
        'AI governance',
        'Responsible AI',
        'Workforce AI enablement',
        'AI fluency',
        'Learning and development',
        'Leadership development',
        'Skills strategy',
        'Learning ecosystem design',
      ],
      sameAs: [
        'https://www.linkedin.com/in/michelleslentz/',
        'https://www.linkedin.com/in/brandoncarson/',
      ],
      founder: [
        { '@id': `${siteUrl}/#michelle-person` },
        { '@id': `${siteUrl}/#brandon-person` },
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'Innovate + Elevate',
      publisher: { '@id': `${siteUrl}/#organization` },
      inLanguage: 'en-US',
    },
    {
      '@type': 'ProfessionalService',
      '@id': `${siteUrl}/#professional-service`,
      name: 'Innovate + Elevate',
      url: siteUrl,
      image: `${siteUrl}/opengraph-image`,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Seattle',
        addressRegion: 'WA',
        addressCountry: 'US',
      },
      parentOrganization: { '@id': `${siteUrl}/#organization` },
      areaServed: ['United States', 'Global'],
      audience: [
        {
          '@type': 'Audience',
          audienceType: 'HR leaders',
        },
        {
          '@type': 'Audience',
          audienceType: 'Learning and development leaders',
        },
        {
          '@type': 'Audience',
          audienceType: 'Executive teams adopting AI',
        },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Consulting and speaking services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: { '@id': `${siteUrl}/#ai-strategy-service` },
          },
          {
            '@type': 'Offer',
            itemOffered: { '@id': `${siteUrl}/#ai-governance-service` },
          },
          {
            '@type': 'Offer',
            itemOffered: { '@id': `${siteUrl}/#workforce-ai-enablement-service` },
          },
          {
            '@type': 'Offer',
            itemOffered: { '@id': `${siteUrl}/#learning-strategy-service` },
          },
          {
            '@type': 'Offer',
            itemOffered: { '@id': `${siteUrl}/#speaking-service` },
          },
        ],
      },
    },
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#michelle-person`,
      name: 'Michelle Lentz',
      url: `${siteUrl}/#team`,
      image: `${siteUrl}/assets/michelle.jpg`,
      jobTitle: 'AI strategy and workforce enablement lead',
      worksFor: { '@id': `${siteUrl}/#organization` },
      sameAs: ['https://www.linkedin.com/in/michelleslentz/'],
      knowsAbout: [
        'AI strategy',
        'AI governance',
        'AI fluency',
        'Workforce AI enablement',
        'Change management',
        'Learning and development',
      ],
      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'Arizona State University',
      },
      description:
        'Michelle Lentz leads the Innovate practice, helping HR and L&D organizations move from AI-curious to AI-capable through strategy, governance, learning programs, and change management.',
    },
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#brandon-person`,
      name: 'Brandon Carson',
      url: `${siteUrl}/#team`,
      image: `${siteUrl}/assets/brandon.jpg`,
      jobTitle: 'Learning strategy and leadership development lead',
      worksFor: { '@id': `${siteUrl}/#organization` },
      sameAs: ['https://www.linkedin.com/in/brandoncarson/'],
      knowsAbout: [
        'Leadership development',
        'Learning strategy',
        'Skills strategy',
        'L&D transformation',
      ],
      description:
        'Brandon Carson leads the Elevate practice, advising HR and L&D leaders on leadership development, skills strategy, and learning ecosystem transformation.',
    },
    {
      '@type': 'Service',
      '@id': `${siteUrl}/#ai-strategy-service`,
      name: 'AI strategy and roadmapping',
      serviceType: 'AI strategy consulting',
      provider: { '@id': `${siteUrl}/#organization` },
      audience: { '@type': 'Audience', audienceType: 'HR and L&D leaders' },
      description:
        'Enterprise AI strategy, technology prioritization, and phased implementation roadmaps built around people, goals, culture, and risk tolerance.',
    },
    {
      '@type': 'Service',
      '@id': `${siteUrl}/#ai-governance-service`,
      name: 'Governance and responsible AI',
      serviceType: 'AI governance consulting',
      provider: { '@id': `${siteUrl}/#organization` },
      audience: { '@type': 'Audience', audienceType: 'HR and L&D leaders' },
      description:
        'Risk frameworks, policy development, and responsible AI governance models for HR and learning organizations.',
    },
    {
      '@type': 'Service',
      '@id': `${siteUrl}/#workforce-ai-enablement-service`,
      name: 'Workforce AI enablement',
      serviceType: 'AI training and workforce enablement',
      provider: { '@id': `${siteUrl}/#organization` },
      audience: { '@type': 'Audience', audienceType: 'HR and L&D leaders' },
      description:
        'Custom learning programs, AI fluency frameworks, curricula, and change management that help workforces become AI-capable.',
    },
    {
      '@type': 'Service',
      '@id': `${siteUrl}/#learning-strategy-service`,
      name: 'Learning strategy and ecosystem design',
      serviceType: 'Learning and development strategy consulting',
      provider: { '@id': `${siteUrl}/#organization` },
      audience: { '@type': 'Audience', audienceType: 'HR and L&D leaders' },
      description:
        'Capability frameworks, skills-first strategy, learning architectures, leadership development programs, and L&D operating models.',
    },
    {
      '@type': 'Service',
      '@id': `${siteUrl}/#speaking-service`,
      name: 'Keynotes, workshops, and conference sessions',
      serviceType: 'Public speaking and corporate workshops',
      provider: { '@id': `${siteUrl}/#organization` },
      url: `${siteUrl}/speaking`,
      description:
        'Keynotes, workshops, and conference sessions on AI strategy, human-centered AI transformation, critical thinking with AI, leadership development, and workforce capability.',
    },
    {
      '@type': 'FAQPage',
      '@id': `${siteUrl}/#faq`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What does Innovate + Elevate do?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Innovate + Elevate helps HR and L&D leaders adopt AI responsibly, build workforce capability, strengthen learning strategy, and develop leadership at scale.',
          },
        },
        {
          '@type': 'Question',
          name: 'Who is Innovate + Elevate for?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Innovate + Elevate works with HR leaders, learning and development leaders, executive teams, and organizations navigating AI adoption, workforce transformation, leadership development, and skills strategy.',
          },
        },
        {
          '@type': 'Question',
          name: 'Who leads Innovate + Elevate?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Innovate + Elevate is led by Michelle Lentz, who leads AI strategy and enablement, and Brandon Carson, who leads learning strategy and leadership development.',
          },
        },
      ],
    },
  ],
}

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
