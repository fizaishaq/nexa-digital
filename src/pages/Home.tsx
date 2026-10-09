import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Zap,
  Users,
  TrendingUp,
  Quote,
  Hexagon,
  Flower2,
  Compass,
  Star,
  Leaf,
  Sun,
} from 'lucide-react';
import HeroVisual from '@/components/HeroVisual';
import ServiceCard from '@/components/ServiceCard';
import ProjectCard from '@/components/ProjectCard';
import TestimonialCard from '@/components/TestimonialCard';
import Reveal from '@/components/Reveal';
import CTA from '@/components/CTA';
import { services } from '@/data/services';
import { projects } from '@/data/projects';
import { testimonials } from '@/data/testimonials';
import { stats, processSteps } from '@/data/site';

const trustedBy = [
  { name: 'Meridian', icon: Hexagon },
  { name: 'Bloom & Co.', icon: Flower2 },
  { name: 'Northwind', icon: Compass },
  { name: 'Stellaris', icon: Star },
  { name: 'Verdex', icon: Leaf },
  { name: 'Lumina', icon: Sun },
];

export default function Home() {
  return (
    <>
      {/* ───────────────────────── Hero ───────────────────────── */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16 px-6 md:px-10 lg:px-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-royal-500/10 rounded-full blur-3xl" />

        <div className="relative container-max grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Reveal>
              <span className="eyebrow mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                Premium Digital Agency
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05] text-balance">
                We build the
                <span className="gradient-text"> digital products</span> that move
                brands forward
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-lg text-gray-400 mt-6 max-w-xl leading-relaxed">
                NEXA Digital is a full-service agency crafting exceptional web experiences,
                intelligent AI systems, and high-converting e-commerce platforms — engineered
                with precision, designed with intent.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-8">
                <Link to="/contact">
                  <motion.span whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <span className="btn-primary text-base px-7 py-3.5">
                      Start a Project
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  </motion.span>
                </Link>
                <Link to="/work" className="btn-ghost text-base px-7 py-3.5">
                  View Our Work
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="flex items-center gap-6 mt-10 pt-8 border-t border-white/[0.06]">
                <div className="flex -space-x-2">
                  {['AM', 'LR', 'KW', 'AO'].map((init, i) => (
                    <div
                      key={i}
                      className="w-9 h-9 rounded-full bg-gradient-to-br from-accent-500 to-royal-600 border-2 border-ink-950 flex items-center justify-center text-xs font-semibold text-white"
                    >
                      {init}
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-sm text-gray-300">
                    Trusted by <span className="text-white font-semibold">120+</span> companies
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">From startups to Fortune 500s</p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <HeroVisual />
          </Reveal>
        </div>
      </section>

      {/* ─────────────────── Stats / Trusted by ─────────────────── */}
      <section className="relative py-16 px-6 md:px-10 lg:px-16 border-y border-white/[0.04]">
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.08}>
                <div className="text-center md:text-left">
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold gradient-text"
                  >
                    {stat.value}
                  </motion.p>
                  <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 pt-8 border-t border-white/[0.04]">
              <p className="text-xs uppercase tracking-widest text-gray-500">Trusted by</p>
              {trustedBy.map(({ name, icon: BrandIcon }) => (
                <span
                  key={name}
                  className="inline-flex items-center gap-2 text-lg font-display font-semibold text-gray-600 hover:text-gray-400 transition-colors"
                >
                  <BrandIcon className="w-5 h-5" aria-hidden="true" />
                  {name}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ──────────────────────── Services ──────────────────────── */}
      <section className="section-pad">
        <div className="container-max">
          <div className="text-center mb-14">
            <Reveal>
              <span className="eyebrow mb-5">What we do</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance">
                Services built for <span className="gradient-text">ambitious teams</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-gray-400 max-w-2xl mx-auto mt-5 leading-relaxed">
                From concept to scale, we cover the full spectrum of digital product development
                under one roof.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────── Featured Projects ───────────────── */}
      <section className="section-pad bg-ink-900/50">
        <div className="container-max">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-14">
            <div>
              <Reveal>
                <span className="eyebrow mb-5">Selected work</span>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance">
                  Projects we're <span className="gradient-text">proud of</span>
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.2}>
              <Link
                to="/work"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-400 hover:text-accent-300 transition-colors"
              >
                View all projects
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} linked />
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────── About ─────────────────────────── */}
      <section className="section-pad">
        <div className="container-max grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Reveal>
              <span className="eyebrow mb-5">Who we are</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance mb-6">
                A team of engineers, designers, and AI specialists
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-gray-400 leading-relaxed mb-6">
                Since 2018, NEXA Digital has helped over 120 companies turn ambitious ideas into
                polished, production-grade products. We blend design sensibility with engineering
                rigor — and we measure our success by our clients' outcomes.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: ShieldCheck, label: 'Quality first', desc: 'Every line of code meets our standards' },
                  { icon: Zap, label: 'Fast delivery', desc: 'Weekly sprints, continuous deployment' },
                  { icon: Users, label: 'Collaborative', desc: 'You\'re part of the team, not a spectator' },
                  { icon: TrendingUp, label: 'Outcome-driven', desc: 'We optimize for your business metrics' },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent-500/10 border border-accent-500/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-accent-400" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{item.label}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <Link to="/about" className="btn-ghost">
                More about us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-500/20 to-royal-500/20 rounded-3xl blur-2xl" />
              <div className="relative grid grid-cols-2 gap-4">
                <div className="glass-card p-6 mt-8">
                  <p className="text-4xl font-bold gradient-text">8+</p>
                  <p className="text-sm text-gray-400 mt-2">Years building digital products</p>
                </div>
                <div className="glass-card p-6">
                  <p className="text-4xl font-bold gradient-text">40+</p>
                  <p className="text-sm text-gray-400 mt-2">Enterprise clients served globally</p>
                </div>
                <div className="glass-card p-6">
                  <p className="text-4xl font-bold gradient-text">120+</p>
                  <p className="text-sm text-gray-400 mt-2">Projects shipped to production</p>
                </div>
                <div className="glass-card p-6 mt-8">
                  <p className="text-4xl font-bold gradient-text">99.9%</p>
                  <p className="text-sm text-gray-400 mt-2">Client retention rate</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ──────────────────────── Process ───────────────────────── */}
      <section className="section-pad bg-ink-900/50">
        <div className="container-max">
          <div className="text-center mb-14">
            <Reveal>
              <span className="eyebrow mb-5">How we work</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance">
                A proven <span className="gradient-text">four-step process</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-gray-400 max-w-2xl mx-auto mt-5 leading-relaxed">
                We follow a structured yet flexible process that ensures transparency, quality,
                and results — from kickoff to launch and beyond.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.1}>
                <div className="relative glass-card p-6 h-full">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-bold text-white/10 font-display">{step.number}</span>
                    <div className="w-10 h-1 bg-gradient-to-r from-accent-500 to-royal-500 rounded-full" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
                  {i < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-white/10" />
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────── Testimonials ───────────────────── */}
      <section className="section-pad">
        <div className="container-max">
          <div className="text-center mb-14">
            <Reveal>
              <span className="eyebrow mb-5">
                <Quote className="w-3.5 h-3.5" />
                Client voices
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance">
                What our clients <span className="gradient-text">say about us</span>
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 6).map((t, i) => (
              <TestimonialCard key={t.id} t={t} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────── CTA ────────────────────────── */}
      <CTA />
    </>
  );
}
