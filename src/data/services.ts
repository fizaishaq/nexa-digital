import {
  Code2,
  Palette,
  BrainCircuit,
  ShoppingCart,
  type LucideIcon,
} from 'lucide-react';

export interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  accent: string;
}

export const services: Service[] = [
  {
    id: 'web-development',
    icon: Code2,
    title: 'Web Development',
    tagline: 'Scalable, performant, pixel-perfect',
    description:
      'We engineer fast, accessible, and maintainable web applications using modern frameworks like React, Next.js, and Node — built to scale with your business.',
    features: [
      'React, Next.js & TypeScript',
      'Server-side rendering & ISR',
      'API design & integration',
      'Performance optimization',
      'CI/CD pipelines',
    ],
    accent: 'from-accent-500 to-accent-700',
  },
  {
    id: 'ui-ux-design',
    icon: Palette,
    title: 'UI/UX Design',
    tagline: 'Interfaces people love to use',
    description:
      'From wireframes to high-fidelity prototypes, we craft intuitive experiences grounded in user research, design systems, and relentless attention to detail.',
    features: [
      'User research & personas',
      'Wireframing & prototyping',
      'Design systems & tokens',
      'Interaction & motion design',
      'Usability testing',
    ],
    accent: 'from-royal-500 to-royal-700',
  },
  {
    id: 'ai-solutions',
    icon: BrainCircuit,
    title: 'AI Solutions',
    tagline: 'Intelligent systems that work',
    description:
      'We integrate LLMs, computer vision, and custom ML models into your products — from chatbots and recommendation engines to automated document processing.',
    features: [
      'LLM integration & RAG pipelines',
      'Custom model fine-tuning',
      'Computer vision & OCR',
      'AI chatbots & agents',
      'MLOps & deployment',
    ],
    accent: 'from-cyanx-500 to-accent-600',
  },
  {
    id: 'ecommerce',
    icon: ShoppingCart,
    title: 'E-commerce',
    tagline: 'Stores that convert',
    description:
      'Headless commerce, custom checkouts, and conversion-optimized storefronts on Shopify, Stripe, and bespoke stacks — designed to grow revenue from day one.',
    features: [
      'Headless Shopify & Stripe',
      'Custom checkout flows',
      'Subscription & billing',
      'Inventory & ERP integration',
      'Conversion optimization',
    ],
    accent: 'from-royal-500 to-cyanx-600',
  },
];
