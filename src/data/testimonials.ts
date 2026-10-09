export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  initials: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    role: 'CEO',
    company: 'ShopWave',
    quote:
      'NEXA Digital transformed our vision into a platform that outperforms every competitor in our space. The attention to detail — from checkout flow to load speed — is simply unmatched.',
    rating: 5,
    initials: 'SC',
  },
  {
    id: '2',
    name: 'Marcus Holloway',
    role: 'Founder & CTO',
    company: 'HireLens AI',
    quote:
      'They didn\'t just build software; they understood our AI pipeline at a deep level and improved it. HireLens wouldn\'t exist in its current form without this team.',
    rating: 5,
    initials: 'MH',
  },
  {
    id: '3',
    name: 'Priya Nair',
    role: 'Head of Product',
    company: 'Pulse',
    quote:
      'The real-time architecture NEXA designed handles our scale effortlessly. Their engineering rigor and design sensibility are a rare combination.',
    rating: 5,
    initials: 'PN',
  },
  {
    id: '4',
    name: 'David Okonkwo',
    role: 'VP Engineering',
    company: 'Meridian Finance',
    quote:
      'We engaged NEXA for a complex internal dashboard and got back a product so polished our executives thought we\'d bought a SaaS. Exceptional work.',
    rating: 5,
    initials: 'DO',
  },
  {
    id: '5',
    name: 'Elena Vasquez',
    role: 'Marketing Director',
    company: 'Bloom & Co.',
    quote:
      'Our new storefront doubled online sales in the first quarter. NEXA understood our brand and translated it into an experience our customers love.',
    rating: 5,
    initials: 'EV',
  },
  {
    id: '6',
    name: 'James Park',
    role: 'COO',
    company: 'Northwind Logistics',
    quote:
      'NEXA delivered our AI routing system on time and under budget. The system saves us six figures annually. I cannot recommend them highly enough.',
    rating: 5,
    initials: 'JP',
  },
];
