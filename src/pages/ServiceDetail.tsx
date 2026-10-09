import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';
import CTA from '@/components/CTA';
import ProjectCard from '@/components/ProjectCard';
import ServiceMockup from '@/components/ServiceMockup';
import { services } from '@/data/services';
import { serviceDetails } from '@/data/serviceDetails';
import { projects } from '@/data/projects';

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.id === slug);
  const detail = slug ? serviceDetails[slug] : undefined;

  if (!service || !detail) {
    return <Navigate to="/services" replace />;
  }

  const Icon = service.icon;
  const related = detail.projectIds
    .map((id) => projects.find((p) => p.id === id))
    .filter((p): p is (typeof projects)[number] => Boolean(p));
  const others = services.filter((s) => s.id !== service.id);

  return (
    <>
      <PageHeader
        eyebrow={service.title}
        title={<span className="gradient-text">{service.tagline}</span>}
        description={detail.intro}
        compact
      />

      <section className="px-6 md:px-10 lg:px-16">
        <div className="container-max flex flex-wrap items-center gap-4">
          <Link to="/contact" className="btn-primary">
            Start a Project
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            All services
          </Link>
        </div>
      </section>

      {/* Overview */}
      <section className="px-6 md:px-10 lg:px-16 pt-10 md:pt-12 pb-20 md:pb-28">
        <div className="container-max grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <Reveal>
            <div className="glass-card p-8 md:p-10 relative overflow-hidden">
              <div className={`absolute -top-20 -right-20 w-48 h-48 bg-gradient-to-br ${service.accent} opacity-10 rounded-full blur-3xl`} />
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.accent} flex items-center justify-center mb-6 shadow-lg`}>
                <Icon className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-3">What's included</h2>
              <p className="text-gray-400 leading-relaxed mb-6">{service.description}</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-gray-300">
                    <Check className="w-4 h-4 mt-0.5 text-accent-400 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <ServiceMockup id={service.id} accent={service.accent} />
          </Reveal>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-pad bg-ink-900/50">
        <div className="container-max">
          <div className="text-center mb-14">
            <Reveal>
              <span className="eyebrow mb-5">Why it works</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold text-white text-balance">
                What you <span className="gradient-text">get</span>
              </h2>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {detail.benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.08}>
                <div className="glass-card p-6 h-full">
                  <h3 className="text-lg font-semibold text-white mb-2">{b.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{b.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-14 md:py-20 px-6 md:px-10 lg:px-16">
        
        <div className="container-max">
          <div className="text-center mb-14">
            <Reveal>
              <span className="eyebrow mb-5">How we work</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold text-white text-balance">
                Our <span className="gradient-text">process</span>
              </h2>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {detail.process.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.08}>
                <div className="glass-card p-6 h-full">
                  <span className="text-3xl font-bold text-white/10 font-display block mb-3">
                    0{i + 1}
                  </span>
                  <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tech */}
      <section className="px-6 md:px-10 lg:px-16 pb-20">
        <div className="container-max">
          <Reveal>
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">Technologies we use</p>
            <div className="flex flex-wrap gap-3">
              {detail.tech.map((t) => (
                <span
                  key={t}
                  className="text-sm text-gray-300 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2"
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Related work */}
      {related.length > 0 && (
        <section className="section-pad bg-ink-900/50">
          <div className="container-max">
            <div className="mb-12">
              <Reveal>
                <h2 className="text-3xl md:text-4xl font-bold text-white text-balance">
                  Related <span className="gradient-text">work</span>
                </h2>
              </Reveal>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {related.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} linked />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="section-pad">
        <div className="container-max max-w-3xl">
          <div className="text-center mb-12">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-bold text-white text-balance">
                Common <span className="gradient-text">questions</span>
              </h2>
            </Reveal>
          </div>
          <div className="space-y-4">
            {detail.faqs.map((faq, i) => (
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

      {/* Other services */}
      <section className="px-6 md:px-10 lg:px-16 pb-4">
        <div className="container-max">
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">Explore other services</p>
          <div className="flex flex-wrap gap-3">
            {others.map((s) => (
              <Link key={s.id} to={`/services/${s.id}`} className="btn-ghost">
                {s.title}
                <ArrowRight className="w-4 h-4" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
