export interface Project {
  id: string;
  name: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  metrics: { label: string; value: string }[];
  accent: string;
}

export const projects: Project[] = [
  {
    id: 'shopwave',
    name: 'ShopWave',
    category: 'E-commerce Web Application',
    description:
      'A headless e-commerce platform with real-time inventory, AI-powered product recommendations, and a frictionless one-page checkout. Built on Next.js, Stripe, and a custom CMS — ShopWave increased client conversion rates by 42% within three months of launch.',
    tags: ['Next.js', 'Stripe', 'PostgreSQL', 'AI Recommendations', 'Tailwind'],
    image:
      'https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=650&w=940',
    metrics: [
      { label: 'Conversion lift', value: '+42%' },
      { label: 'Page load', value: '0.8s' },
      { label: 'Revenue/mo', value: '$1.2M' },
    ],
    accent: 'from-accent-500 to-royal-600',
  },
  {
    id: 'hirelens-ai',
    name: 'HireLens AI',
    category: 'AI Resume Evaluation Platform',
    description:
      'An AI-driven resume screening platform that evaluates candidates against job descriptions using NLP and semantic matching. HireLens reduces recruiter screening time by 70% while improving shortlist quality through bias-aware ranking and explainable scoring.',
    tags: ['Python', 'LLM', 'RAG', 'React', 'FastAPI'],
    image:
      'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    metrics: [
      { label: 'Screening time', value: '-70%' },
      { label: 'Accuracy', value: '94%' },
      { label: 'Resumes/mo', value: '50K+' },
    ],
    accent: 'from-cyanx-500 to-accent-600',
  },
  {
    id: 'pulse',
    name: 'Pulse',
    category: 'Social Media Web Application',
    description:
      'A real-time social media platform featuring live feeds, ephemeral stories, AI content moderation, and engagement analytics. Pulse handles 200K concurrent users with sub-100ms latency via WebSocket fan-out and edge caching.',
    tags: ['React', 'WebSockets', 'Redis', 'AI Moderation', 'AWS'],
    image:
      'https://images.pexels.com/photos/16229745/pexels-photo-16229745.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    metrics: [
      { label: 'Concurrent users', value: '200K' },
      { label: 'Latency', value: '<100ms' },
      { label: 'Uptime', value: '99.9%' },
    ],
    accent: 'from-royal-500 to-cyanx-600',
  },
];
