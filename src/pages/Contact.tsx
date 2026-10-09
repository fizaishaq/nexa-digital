import { motion, useReducedMotion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Twitter, Linkedin, Github, Dribbble } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';
import ContactForm from '@/components/ContactForm';
import { contactInfo } from '@/data/site';

const details = [
  { icon: Mail, label: 'Email', value: contactInfo.email, href: `mailto:${contactInfo.email}` },
  { icon: Phone, label: 'Phone', value: contactInfo.phone, href: `tel:${contactInfo.phone}` },
  { icon: MapPin, label: 'Office', value: contactInfo.address, href: undefined },
  { icon: Clock, label: 'Hours', value: contactInfo.hours, href: undefined },
];

const socials = [
  { label: 'Twitter', href: 'https://twitter.com', icon: Twitter },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
  { label: 'GitHub', href: 'https://github.com', icon: Github },
  { label: 'Dribbble', href: 'https://dribbble.com', icon: Dribbble },
];

export default function Contact() {
  const prefersReducedMotion = useReducedMotion();
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Let's build <span className="gradient-text">something great</span>
          </>
        }
        description="Tell us about your project, your timeline, and your goals. We respond to every inquiry within 24 hours — no bots, no templates, just a real conversation."
      />

      <section className="section-pad pt-4">
        <div className="container-max grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Form */}
          <div className="lg:col-span-3">
            <Reveal>
              <h2 className="text-xl font-semibold text-white mb-1">Send us a message</h2>
              <p className="text-sm text-gray-400 mb-6">
                Fill out the form below and we'll get back to you shortly.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <ContactForm />
            </Reveal>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            <Reveal delay={0.15}>
              <div className="glass-card p-6">
                <h3 className="text-lg font-semibold text-white mb-5">Contact details</h3>
                <ul className="space-y-5">
                  {details.map((detail) => (
                    <li key={detail.label} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center flex-shrink-0">
                        <detail.icon className="w-5 h-5 text-accent-400" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">
                          {detail.label}
                        </p>
                        {detail.href ? (
                          <a
                            href={detail.href}
                            className="text-sm text-gray-200 hover:text-accent-400 transition-colors"
                          >
                            {detail.value}
                          </a>
                        ) : (
                          <p className="text-sm text-gray-200">{detail.value}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="glass-card p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Follow us</h3>
                <p className="text-sm text-gray-400 mb-4">
                  Stay connected on social media for the latest updates and insights.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 p-3 rounded-xl glass glass-hover text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      <social.icon className="w-4 h-4 text-accent-400" />
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="relative glass-card p-6 overflow-hidden">
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-accent-500/10 rounded-full blur-2xl" />
                <motion.div
                  animate={prefersReducedMotion ? undefined : { opacity: [0.4, 0.8, 0.4] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="w-3 h-3 rounded-full bg-green-400 mb-3"
                />
                <h3 className="text-base font-semibold text-white mb-1">Currently available</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  We're accepting new projects for Q4 2026. Limited slots remaining.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
