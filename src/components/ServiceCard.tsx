import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowUpRight, Check } from 'lucide-react';
import type { Service } from '@/data/services';
import Reveal from './Reveal';

export default function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon;

  return (
    <Reveal delay={index * 0.1}>
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="glass-card glass-hover p-7 h-full flex flex-col group"
      >
        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.accent} flex items-center justify-center mb-5 shadow-lg`}>
          <Icon className="w-7 h-7 text-white" />
        </div>

        <h3 className="text-xl font-semibold text-white mb-1">{service.title}</h3>
        <p className="text-sm text-accent-400 font-medium mb-3">{service.tagline}</p>
        <p className="text-sm text-gray-400 leading-relaxed mb-5">{service.description}</p>

        <ul className="space-y-2 mb-6 flex-1">
          {service.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-sm text-gray-300">
              <Check className="w-4 h-4 mt-0.5 text-accent-400 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>

        <Link
          to={`/services/${service.id}`}
          className="inline-flex items-center gap-1 text-sm font-medium text-gray-300 hover:text-accent-400 transition-colors group/link"
        >
          Learn more
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
        </Link>
      </motion.div>
    </Reveal>
  );
}
