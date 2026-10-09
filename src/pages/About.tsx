import { Target, Eye, Heart } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';
import CTA from '@/components/CTA';
import { stats, team, values } from '@/data/site';

const teamImage =
  'https://images.pexels.com/photos/8102000/pexels-photo-8102000.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About NEXA"
        title={
          <>
            We're a team obsessed with <span className="gradient-text">digital excellence</span>
          </>
        }
        description="NEXA Digital is a premium agency of engineers, designers, and AI specialists dedicated to building products that matter — and doing it with craft."
      />

      {/* Story */}
      <section className="section-pad pt-4">
        <div className="container-max grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-500/20 to-royal-500/20 rounded-3xl blur-2xl" />
              <img
                src={teamImage}
                alt="NEXA Digital team collaborating"
                loading="lazy"
                className="relative rounded-2xl w-full object-cover shadow-2xl border border-white/10"
              />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <span className="eyebrow mb-5">Our story</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-5 text-balance">
                Founded on a simple belief: great software is a craft, not a commodity
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  NEXA Digital was founded in 2018 by a small group of engineers and designers
                  who were tired of seeing brilliant ideas held back by mediocre execution. We
                  believed there was a better way — combining design thinking, engineering
                  excellence, and AI fluency under one roof.
                </p>
                <p>
                  Eight years later, we've shipped over 120 products for startups and Fortune 500s
                  alike, from AI-powered resume platforms to real-time social networks handling
                  200K concurrent users. Through it all, our core principle hasn't changed:
                  we treat every project as if our reputation depends on it — because it does.
                </p>
                <p>
                  Today, our team of 25 operates as an extension of yours — embedded, collaborative,
                  and accountable to outcomes.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 md:px-10 lg:px-16 py-12">
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.08}>
                <div className="glass-card p-6 text-center">
                  <p className="text-3xl md:text-4xl font-bold gradient-text">{stat.value}</p>
                  <p className="text-sm text-gray-400 mt-2">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="section-pad">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            {[
              { icon: Target, title: 'Mission', text: 'To empower brands with digital products that are as functional as they are beautiful — delivered with transparency and measurable impact.' },
              { icon: Eye, title: 'Vision', text: 'A world where every business, regardless of size, has access to agency-grade engineering and design that drives real growth.' },
              { icon: Heart, title: 'Culture', text: 'We foster a culture of curiosity, ownership, and respect — where bold ideas are encouraged and every voice shapes the work we ship.' },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 0.1}>
                <div className="glass-card glass-hover p-7 h-full">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-500 to-royal-600 flex items-center justify-center mb-5">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.08}>
                <div className="flex items-start gap-4 glass-card p-6">
                  <div className="w-8 h-8 rounded-lg bg-accent-500/15 border border-accent-500/25 flex items-center justify-center flex-shrink-0">
                    <div className="w-2.5 h-2.5 rounded-full bg-accent-400" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white mb-1">{value.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-pad bg-ink-900/50">
        <div className="container-max">
          <div className="text-center mb-14">
            <Reveal>
              <span className="eyebrow mb-5">Leadership</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance">
                The people behind <span className="gradient-text">the work</span>
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={i * 0.1}>
                <div className="glass-card glass-hover p-6 text-center h-full">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent-500 to-royal-600 mx-auto mb-4 flex items-center justify-center text-xl font-bold text-white shadow-lg">
                    {member.initials}
                  </div>
                  <h3 className="text-base font-semibold text-white">{member.name}</h3>
                  <p className="text-sm text-accent-400 mb-3">{member.role}</p>
                  <p className="text-xs text-gray-400 leading-relaxed">{member.bio}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Want to work with this team?"
        subtitle="We're always looking for ambitious projects and great partners. Let's talk about yours."
        buttonText="Get in touch"
      />
    </>
  );
}
