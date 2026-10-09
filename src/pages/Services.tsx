import { motion } from 'motion/react';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';
import CTA from '@/components/CTA';
import ServiceMockup from '@/components/ServiceMockup';
import { services } from '@/data/services';
import { processSteps } from '@/data/site';

const pricingTiers = [
  {
    name: 'Starter',
    price: '$8K',
    period: '/ project',
    description: 'Perfect for MVPs and landing pages',
    features: [
      'Up to 5 pages',
      'Responsive design',
      'Basic SEO setup',
      '2 rounds of revisions',
      '2-week delivery',
    ],
    highlight: false,
  },
  {
    name: 'Growth',
    price: '$25K',
    period: '/ project',
    description: 'Full-scale web app or e-commerce store',
    features: [
      'Custom web application',
      'API integration',
      'AI features included',
      'Design system',
      'Unlimited revisions',
      '6-week delivery',
      '30-day post-launch support',
    ],
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Complex platforms at scale',
    features: [
      'Dedicated team',
      'Custom AI/ML pipelines',
      'Infrastructure & DevOps',
      'SLA & priority support',
      'Quarterly roadmapping',
    ],
    highlight: false,
  },
];

const faqs = [
  {
    q: 'How long does a typical project take?',
    a: 'Landing pages and MVPs take 2–3 weeks. Full web applications run 6–10 weeks. Enterprise platforms are scoped individually, but we always work in weekly sprints so you see progress continuously.',
  },
  {
    q: 'Do you work with existing codebases?',
    a: 'Absolutely. We frequently join in-progress projects — auditing the codebase, identifying improvements, and shipping features alongside your existing team.',
  },
  {
    q: 'What technologies do you specialize in?',
    a: 'React, Next.js, TypeScript, Node.js, Python, PostgreSQL, and Tailwind on the web side. For AI, we work with OpenAI, Anthropic, LangChain, and custom models deployed on AWS or GCP.',
  },
  {
    q: 'Do you offer ongoing maintenance?',
    a: 'Yes. We offer monthly retainer plans for maintenance, feature development, and performance monitoring. Most of our clients stay on a retainer after launch.',
  },
  {
    q: 'Can you integrate AI into an existing product?',
    a: "That's one of our core specialties. We've added LLM-powered features, recommendation engines, and automated document processing to products that weren't originally built with AI in mind.",
  },
];

export default function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        title={
          <>
            Everything you need to <span className="gradient-text">build and scale</span>
          </>
        }
        description="Four core practices, one unified team. Whether you need a marketing site, a full-stack application, an AI system, or an e-commerce platform — we have the expertise to deliver."
      />

      {/* Detailed Services */}
      <section className="section-pad pt-4">
        <div className="container-max space-y-16">
          {services.map((service, i) => {
            const Icon = service.icon;
            const reversed = i % 2 === 1;
            return (
              <div
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                  reversed ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <Reveal className={reversed ? 'lg:col-start-2' : ''}>
                  <div className="glass-card p-8 md:p-10 relative overflow-hidden">
                    <div className={`absolute -top-20 -right-20 w-48 h-48 bg-gradient-to-br ${service.accent} opacity-10 rounded-full blur-3xl`} />
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.accent} flex items-center justify-center mb-6 shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-accent-400 font-medium mb-4">{service.tagline}</p>
                    <p className="text-gray-400 leading-relaxed mb-6">{service.description}</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-gray-300">
                          <Check className="w-4 h-4 mt-0.5 text-accent-400 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to={`/services/${service.id}`}
                      className="inline-flex items-center gap-1 mt-8 text-sm font-medium text-accent-400 hover:text-accent-300 transition-colors"
                    >
                      Learn more
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </Reveal>

                <Reveal delay={0.15} className={reversed ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <ServiceMockup id={service.id} accent={service.accent} />
                </Reveal>
              </div>
            );
          })}
        </div>
      </section>

      {/* Process */}
      <section className="section-pad bg-ink-900/50">
        <div className="container-max">
          <div className="text-center mb-14">
            <Reveal>
              <span className="eyebrow mb-5">Our process</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance">
                From idea to <span className="gradient-text">impact</span>
              </h2>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.1}>
                <div className="glass-card p-6 h-full relative">
                  <span className="text-3xl font-bold text-white/10 font-display block mb-3">
                    {step.number}
                  </span>
                  <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-pad">
        <div className="container-max">
          <div className="text-center mb-14">
            <Reveal>
              <span className="eyebrow mb-5">Pricing</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance">
                Transparent <span className="gradient-text">engagement models</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-gray-400 max-w-2xl mx-auto mt-5 leading-relaxed">
                Fixed-price projects or monthly retainers. No hidden fees, no surprises.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingTiers.map((tier, i) => (
              <Reveal key={tier.name} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className={`glass-card p-7 h-full flex flex-col relative ${
                    tier.highlight
                      ? 'border-accent-500/40 shadow-xl shadow-accent-500/10'
                      : ''
                  }`}
                >
                  {tier.highlight && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-semibold text-white bg-gradient-to-r from-accent-500 to-royal-600 rounded-full px-4 py-1">
                      Most popular
                    </span>
                  )}
                  <h3 className="text-lg font-semibold text-white mb-1">{tier.name}</h3>
                  <p className="text-sm text-gray-400 mb-5">{tier.description}</p>
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-3xl font-bold text-white">{tier.price}</span>
                    <span className="text-sm text-gray-400">{tier.period}</span>
                  </div>
                  <ul className="space-y-3 flex-1 mb-6">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-gray-300">
                        <Check className="w-4 h-4 mt-0.5 text-accent-400 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={tier.highlight ? 'btn-primary w-full' : 'btn-ghost w-full'}
                  >
                    Get started
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad bg-ink-900/50">
        <div className="container-max max-w-3xl">
          <div className="text-center mb-14">
            <Reveal>
              <span className="eyebrow mb-5">FAQ</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold text-white text-balance">
                Common <span className="gradient-text">questions</span>
              </h2>
            </Reveal>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <Reveal key={faq.q} delay={i * 0.06}>
                <details className="glass-card p-5 group cursor-pointer">
                  <summary className="flex items-center justify-between list-none cursor-pointer">
                    <span className="text-base font-semibold text-white pr-4">{faq.q}</span>
                    <span className="w-6 h-6 rounded-full bg-accent-500/10 border border-accent-500/20 flex items-center justify-center flex-shrink-0 transition-transform group-open:rotate-45">
                      <span className="text-accent-400 text-lg leading-none">+</span>
                    </span>
                  </summary>
                  <p className="text-sm text-gray-400 leading-relaxed mt-4 pr-8">{faq.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
