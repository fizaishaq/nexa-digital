import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { Link, useSearchParams } from 'react-router-dom';
import { X, ArrowUpRight, TrendingUp } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import ProjectCard from '@/components/ProjectCard';
import Reveal from '@/components/Reveal';
import CTA from '@/components/CTA';
import { projects, type Project } from '@/data/projects';

const categories = ['All', 'E-commerce', 'AI', 'Social Media'];

// Maps a project's category to the service page it belongs to
const serviceByCategory: Record<string, { id: string; title: string }> = {
  'E-commerce': { id: 'ecommerce', title: 'E-commerce' },
  AI: { id: 'ai-solutions', title: 'AI Solutions' },
  'Social Media': { id: 'web-development', title: 'Web Development' },
};

const additionalProjects = [
  {
    id: 'meridian-finance',
    name: 'Meridian Finance',
    category: 'E-commerce Web Application',
    description:
      'A B2B financial dashboard with real-time portfolio analytics, automated reporting, and a custom role-based access system for enterprise clients.',
    tags: ['React', 'D3.js', 'Node.js', 'WebSocket'],
    image:
      'https://images.pexels.com/photos/6214474/pexels-photo-6214474.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    metrics: [
      { label: 'Data points', value: '2M+' },
      { label: 'Load time', value: '1.2s' },
      { label: 'Users', value: '15K' },
    ],
    accent: 'from-accent-500 to-cyanx-600',
  },
  {
    id: 'bloom-co',
    name: 'Bloom & Co.',
    category: 'E-commerce Web Application',
    description:
      'A DTC beauty brand storefront with a custom product configurator, subscription billing, and an AI-powered skincare recommendation engine.',
    tags: ['Next.js', 'Shopify', 'Stripe', 'AI'],
    image:
      'https://images.pexels.com/photos/5632391/pexels-photo-5632391.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    metrics: [
      { label: 'Sales lift', value: '+2x' },
      { label: 'AOV', value: '+35%' },
      { label: 'Conversion', value: '4.8%' },
    ],
    accent: 'from-royal-500 to-royal-700',
  },
  {
    id: 'northwind',
    name: 'Northwind Logistics',
    category: 'AI Solutions',
    description:
      'An AI-driven route optimization system that processes real-time traffic, weather, and shipment data to reduce delivery costs across a fleet of 500+ vehicles.',
    tags: ['Python', 'TensorFlow', 'React', 'GCP'],
    image:
      'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    metrics: [
      { label: 'Cost savings', value: '$600K/yr' },
      { label: 'Routes/day', value: '5K+' },
      { label: 'Efficiency', value: '+28%' },
    ],
    accent: 'from-cyanx-500 to-accent-600',
  },
  {
    id: 'stellaris',
    name: 'Stellaris Education',
    category: 'AI Solutions',
    description:
      'An adaptive learning platform that uses LLMs to generate personalized curricula, quizzes, and progress analytics for K-12 students across 200 schools.',
    tags: ['Next.js', 'OpenAI', 'PostgreSQL', 'Tailwind'],
    image:
      'https://images.pexels.com/photos/3862610/pexels-photo-3862610.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    metrics: [
      { label: 'Students', value: '50K+' },
      { label: 'Engagement', value: '+65%' },
      { label: 'Schools', value: '200' },
    ],
    accent: 'from-accent-500 to-royal-600',
  },
  {
    id: 'verdex',
    name: 'Verdex Health',
    category: 'Social Media Web Application',
    description:
      'A community-driven health platform with real-time feeds, peer support groups, AI content moderation, and wearable device integration for 80K active users.',
    tags: ['React', 'WebSockets', 'Redis', 'AI Moderation'],
    image:
      'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    metrics: [
      { label: 'Active users', value: '80K' },
      { label: 'Messages/day', value: '300K' },
      { label: 'Uptime', value: '99.95%' },
    ],
    accent: 'from-royal-500 to-cyanx-600',
  },
  {
    id: 'lumina',
    name: 'Lumina Studio',
    category: 'E-commerce Web Application',
    description:
      'A headless e-commerce platform for a premium lighting brand with AR product preview, custom build-to-order flows, and a subscription replacement program.',
    tags: ['Next.js', 'Three.js', 'Stripe', 'Sanity CMS'],
    image:
      'https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    metrics: [
      { label: 'AR adoption', value: '42%' },
      { label: 'Returns', value: '-30%' },
      { label: 'Revenue', value: '$3.5M' },
    ],
    accent: 'from-accent-500 to-royal-600',
  },
];

type ProjectWithCategory = Project & { categoryLabel?: string };

const allProjects: ProjectWithCategory[] = [
  ...projects.map((p) => ({
    ...p,
    categoryLabel: p.category.includes('AI')
      ? 'AI'
      : p.category.includes('Social')
        ? 'Social Media'
        : 'E-commerce',
  })),
  ...additionalProjects.map((p) => ({
    ...p,
    categoryLabel: p.category.includes('AI')
      ? 'AI'
      : p.category.includes('Social')
        ? 'Social Media'
        : 'E-commerce',
  })),
];

export default function Work() {
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState<ProjectWithCategory | null>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const prefersReducedMotion = useReducedMotion();
  const modalRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  const filtered =
    filter === 'All'
      ? allProjects
      : allProjects.filter((p) => p.categoryLabel === filter);

  const service = selected?.categoryLabel ? serviceByCategory[selected.categoryLabel] : undefined;

  const closeModal = useCallback(() => {
    setSelected(null);
    setSearchParams({}, { replace: true });
  }, [setSearchParams]);

  // Open a project's modal when arriving via /work?project=<id>
  useEffect(() => {
    const id = searchParams.get('project');
    if (!id) return;
    const match = allProjects.find((p) => p.id === id);
    if (match) setSelected(match);
  }, [searchParams]);

  useEffect(() => {
    if (!selected) return;
    document.body.style.overflow = 'hidden';
    closeBtnRef.current?.focus();
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    document.addEventListener('keydown', handler);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handler);
    };
  }, [selected, closeModal]);

  return (
    <>
      <PageHeader
        eyebrow="Our Work"
        title={
          <>
            Projects that <span className="gradient-text">define us</span>
          </>
        }
        description="A selection of products we've designed and engineered — from AI platforms processing millions of resumes to e-commerce stores generating millions in revenue."
      />

      {/* Featured Projects */}
      <section className="section-pad pt-4">
        <div className="container-max">
          <Reveal>
            <div className="flex flex-wrap items-center gap-3 mb-10">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${filter === cat
                      ? 'bg-gradient-to-r from-accent-500 to-royal-600 text-white shadow-lg shadow-accent-500/20'
                      : 'glass text-gray-400 hover:text-white'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>

          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                >
                  <div
                    role="button"
                    tabIndex={0}
                    aria-label={`View details for ${project.name}`}
                    onClick={() => setSelected(project)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setSelected(project);
                      }
                    }}
                    className="cursor-pointer rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-400"
                  >
                    <ProjectCard project={project} index={0} />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="px-6 md:px-10 lg:px-16 py-12">
        <div className="container-max">
          <Reveal>
            <div className="glass-card p-8 md:p-12 relative overflow-hidden">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl" />
              <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {[
                  { value: '$25M+', label: 'Revenue generated for clients' },
                  { value: '2M+', label: 'Users reached across products' },
                  { value: '0.8s', label: 'Average page load time' },
                  { value: '42%', label: 'Average conversion lift' },
                ].map((stat, i) => (
                  <Reveal key={stat.label} delay={i * 0.08}>
                    <TrendingUp className="w-6 h-6 text-accent-400 mx-auto mb-3" />
                    <p className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</p>
                    <p className="text-xs text-gray-400 mt-1">{stat.label}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Your project could be next"
        subtitle="Let's discuss how we can turn your vision into a product that delivers real business results."
      />

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-6"
            onClick={closeModal}
            role="dialog"
            aria-modal="true"
            aria-label={`${selected.name} project details`}
          >
            <div className="absolute inset-0 bg-ink-950/90 backdrop-blur-sm" />
            <motion.div
              ref={modalRef}
              initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="relative glass-card max-w-2xl w-full max-h-[85vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                ref={closeBtnRef}
                onClick={closeModal}
                className="absolute top-4 right-4 z-30 w-9 h-9 rounded-lg glass glass-hover flex items-center justify-center text-gray-300 hover:text-white"
                aria-label="Close project details"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-[16/9] overflow-hidden rounded-t-2xl">
                <div className={`absolute inset-0 bg-gradient-to-br ${selected.accent} opacity-20 z-10 pointer-events-none`} />
                <img src={selected.image} alt={selected.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900 to-transparent z-20 pointer-events-none" />
              </div>

              <div className="p-6 md:p-8">
                <span className="text-xs font-medium text-accent-400 bg-accent-500/10 border border-accent-500/20 rounded-full px-3 py-1">
                  {selected.category}
                </span>
                <h3 className="text-2xl font-bold text-white mt-4 mb-3">{selected.name}</h3>
                <p className="text-gray-400 leading-relaxed mb-6">{selected.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selected.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-gray-400 bg-white/5 border border-white/10 rounded-md px-2.5 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/[0.06]">
                  {selected.metrics.map((m) => (
                    <div key={m.label} className="text-center">
                      <p className="text-xl font-bold gradient-text">{m.value}</p>
                      <p className="text-xs text-gray-500 mt-1">{m.label}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mt-6">
                  <Link to="/contact" className="btn-primary flex-1">
                    Start a similar project
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                  {service && (
                    <Link to={`/services/${service.id}`} className="btn-ghost flex-1">
                      Explore {service.title}
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
