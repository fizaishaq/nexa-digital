import { Link } from 'react-router-dom';
import { Hexagon, Twitter, Linkedin, Github, Dribbble, Mail, Phone, MapPin } from 'lucide-react';
import { contactInfo } from '@/data/site';
import { services } from '@/data/services';

const iconMap: Record<string, typeof Twitter> = {
  twitter: Twitter,
  linkedin: Linkedin,
  github: Github,
  dribbble: Dribbble,
};

const socials = [
  { label: 'Twitter', href: 'https://twitter.com', icon: 'twitter' },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
  { label: 'GitHub', href: 'https://github.com', icon: 'github' },
  { label: 'Dribbble', href: 'https://dribbble.com', icon: 'dribbble' },
];

const footerLinks = [
  {
    title: 'Company',
    links: [
      { label: 'About', path: '/about' },
      { label: 'Work', path: '/work' },
      { label: 'Contact', path: '/contact' },
    ],
  },
  {
    title: 'Services',
    links: services.map((s) => ({ label: s.title, path: `/services/${s.id}` })),
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-ink-950">
      <div className="absolute inset-0 bg-grid opacity-30 mask-fade-b" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Hexagon className="w-7 h-7 text-accent-500" fill="currentColor" fillOpacity={0.15} />
              <span className="font-display text-lg font-bold text-white">
                NEXA<span className="text-accent-400"> Digital</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              A premium digital agency building the web's most ambitious products — from AI
              platforms to e-commerce at scale.
            </p>
            <div className="flex items-center gap-3 mt-5">
              {socials.map((s) => {
                const Icon = iconMap[s.icon];
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-9 h-9 rounded-lg glass glass-hover flex items-center justify-center text-gray-400 hover:text-white"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-white mb-4">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm text-gray-400 hover:text-accent-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Get in touch</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-gray-400">
                <Mail className="w-4 h-4 mt-0.5 text-accent-400 flex-shrink-0" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-white transition-colors">
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-400">
                <Phone className="w-4 h-4 mt-0.5 text-accent-400 flex-shrink-0" />
                <a href={`tel:${contactInfo.phone}`} className="hover:text-white transition-colors">
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-400">
                <MapPin className="w-4 h-4 mt-0.5 text-accent-400 flex-shrink-0" />
                <span>{contactInfo.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} NEXA Digital. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            Crafted with care in Lahore, Pakistan.
          </p>
        </div>
      </div>
    </footer>
  );
}
