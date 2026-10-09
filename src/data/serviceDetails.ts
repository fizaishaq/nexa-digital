export interface ServiceDetail {
  intro: string;
  benefits: { title: string; description: string }[];
  process: { title: string; description: string }[];
  tech: string[];
  faqs: { q: string; a: string }[];
  projectIds: string[];
}

export const serviceDetails: Record<string, ServiceDetail> = {
  'web-development': {
    intro:
      'Fast, secure and scalable web applications, engineered by senior developers and built to grow with your business.',
    benefits: [
      { title: 'Built for speed', description: 'Optimised bundles, caching and edge delivery so pages load in under a second.' },
      { title: 'Scales with you', description: 'Clean architecture that handles 10 users or 10 million without a rewrite.' },
      { title: 'Secure by default', description: 'Authentication, validation and dependency audits are part of every build.' },
      { title: 'Easy to maintain', description: 'Typed, tested and documented code your team can pick up on day one.' },
    ],
    process: [
      { title: 'Plan', description: 'We scope features, choose the stack and agree on milestones.' },
      { title: 'Build', description: 'Weekly sprints with a live preview link after every sprint.' },
      { title: 'Test', description: 'Automated tests, accessibility checks and performance audits.' },
      { title: 'Launch', description: 'Zero-downtime deployment with monitoring and handover docs.' },
    ],
    tech: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind', 'AWS', 'Docker'],
    faqs: [
      { q: 'Can you work with our existing codebase?', a: 'Yes. We audit what you have, fix the weak spots and ship new features alongside your team.' },
      { q: 'Who owns the code?', a: 'You do. Full source code and repository access are transferred at launch.' },
      { q: 'Do you provide support after launch?', a: 'Every project includes post-launch support, and monthly retainers are available.' },
    ],
    projectIds: ['pulse', 'shopwave'],
  },
  'ui-ux-design': {
    intro:
      'Research-driven interface design that turns complex products into simple, enjoyable experiences.',
    benefits: [
      { title: 'User-first', description: 'Decisions backed by research and real user feedback, not guesses.' },
      { title: 'Consistent', description: 'A design system keeps every screen and every future feature aligned.' },
      { title: 'Developer-ready', description: 'Organised files, tokens and specs that engineers can build from directly.' },
      { title: 'Higher conversion', description: 'Clear flows and calls to action that guide users to the goal.' },
    ],
    process: [
      { title: 'Research', description: 'Interviews, competitor review and user personas.' },
      { title: 'Wireframe', description: 'Low-fidelity layouts to agree on structure and flow.' },
      { title: 'Prototype', description: 'Clickable high-fidelity designs you can test with real users.' },
      { title: 'Hand-off', description: 'Design system, assets and specs delivered to development.' },
    ],
    tech: ['Figma', 'FigJam', 'Design tokens', 'Prototyping', 'Lottie', 'Storybook', 'Maze', 'Hotjar'],
    faqs: [
      { q: 'Do you design for mobile as well?', a: 'Yes. Every design is responsive, with dedicated mobile layouts when needed.' },
      { q: 'Can you redesign an existing product?', a: 'Absolutely. We review current analytics and feedback, then improve what is not working.' },
      { q: 'Will we get editable design files?', a: 'Yes. You receive the complete Figma files and the design system.' },
    ],
    projectIds: ['pulse', 'shopwave'],
  },
  'ai-solutions': {
    intro:
      'Practical AI that saves time and money: chatbots, document automation and smart recommendations added to your product.',
    benefits: [
      { title: 'Real business value', description: 'We start with the problem and the metric, then choose the right model.' },
      { title: 'Your data stays yours', description: 'Private deployments and strict access controls for sensitive data.' },
      { title: 'Accurate answers', description: 'Retrieval pipelines and evaluation keep responses grounded and reliable.' },
      { title: 'Production-ready', description: 'Monitoring, fallbacks and cost controls from the first release.' },
    ],
    process: [
      { title: 'Assess', description: 'Find the highest-impact use case and check data readiness.' },
      { title: 'Prototype', description: 'A working proof of concept in 1 to 2 weeks.' },
      { title: 'Integrate', description: 'Connect the model to your product, data and workflows.' },
      { title: 'Monitor', description: 'Track quality, latency and cost, then keep improving.' },
    ],
    tech: ['OpenAI', 'Anthropic', 'LangChain', 'Python', 'FastAPI', 'Vector DBs', 'PyTorch', 'AWS / GCP'],
    faqs: [
      { q: 'Do we need a lot of data?', a: 'Not always. Many solutions work with your existing documents using retrieval, without training a model.' },
      { q: 'Is our data safe?', a: 'Yes. We can deploy in your own cloud and never use your data to train public models.' },
      { q: 'Can AI be added to an existing app?', a: 'Yes, this is one of our most common projects.' },
    ],
    projectIds: ['hirelens-ai', 'pulse'],
  },
  ecommerce: {
    intro:
      'Online stores designed to convert, from fast storefronts and smooth checkouts to subscriptions and inventory sync.',
    benefits: [
      { title: 'Higher conversion', description: 'Streamlined checkout and product pages tuned with real data.' },
      { title: 'Blazing fast', description: 'Headless architecture keeps your store quick, even at peak traffic.' },
      { title: 'Flexible payments', description: 'Cards, wallets, subscriptions and local payment methods.' },
      { title: 'Connected back-office', description: 'Inventory, orders and ERP systems stay in sync automatically.' },
    ],
    process: [
      { title: 'Strategy', description: 'Catalogue, pricing and customer journey planning.' },
      { title: 'Design', description: 'Storefront and checkout designed around conversion.' },
      { title: 'Build', description: 'Storefront, payments and integrations developed and tested.' },
      { title: 'Optimise', description: 'A/B tests and analytics to keep growing revenue.' },
    ],
    tech: ['Shopify', 'Stripe', 'Next.js', 'Headless CMS', 'PostgreSQL', 'Redis', 'Algolia', 'Klaviyo'],
    faqs: [
      { q: 'Shopify or a custom store?', a: 'We recommend based on your catalogue size, budget and growth plans. Both are options.' },
      { q: 'Can you migrate our current store?', a: 'Yes. Products, customers and orders are migrated with SEO redirects in place.' },
      { q: 'Do you support subscriptions?', a: 'Yes. Recurring billing, upgrades and cancellations are all supported.' },
    ],
    projectIds: ['shopwave', 'pulse'],
  },
};
