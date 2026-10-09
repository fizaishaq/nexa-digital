import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import type { Testimonial } from '@/data/testimonials';
import Reveal from './Reveal';

export default function TestimonialCard({ t, index }: { t: Testimonial; index: number }) {
  return (
    <Reveal delay={index * 0.08}>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="glass-card glass-hover p-6 h-full flex flex-col"
      >
        <Quote className="w-8 h-8 text-accent-500/30 mb-4" />

        <div className="flex items-center gap-1 mb-4">
          {Array.from({ length: t.rating }).map((_, i) => (
            <Star key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" />
          ))}
        </div>

        <p className="text-sm text-gray-300 leading-relaxed flex-1 mb-5">"{t.quote}"</p>

        <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
          <div className="w-11 h-11 rounded-full bg-gradient-to-br from-accent-500 to-royal-600 flex items-center justify-center text-sm font-semibold text-white">
            {t.initials}
          </div>
          <div>
            <p className="text-sm font-semibold text-white">{t.name}</p>
            <p className="text-xs text-gray-400">
              {t.role}, {t.company}
            </p>
          </div>
        </div>
      </motion.div>
    </Reveal>
  );
}
