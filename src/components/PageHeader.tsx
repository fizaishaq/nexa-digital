import { motion } from 'motion/react';
import type { ReactNode } from 'react';
import Reveal from './Reveal';

interface PageHeaderProps {
  eyebrow: string;
  title: ReactNode;
  description: string;
  compact?: boolean;
}

export default function PageHeader({ eyebrow, title, description, compact = false }: PageHeaderProps) {
  return (
    <section className={`relative px-6 md:px-10 lg:px-16 overflow-hidden ${
        compact ? 'pt-28 md:pt-32 pb-6 md:pb-8' : 'pt-32 md:pt-40 pb-12 md:pb-16'
      }`}>
      <div className="absolute inset-0 bg-grid opacity-30 mask-fade-b" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent-500/10 rounded-full blur-3xl" />

      <div className="relative container-max">
        <Reveal>
          <span className="eyebrow mb-6">{eyebrow}</span>
        </Reveal>
        <Reveal delay={0.1}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-balance leading-[1.1]"
          >
            {title}
          </motion.h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-lg text-gray-400 max-w-2xl mt-6 leading-relaxed">{description}</p>
        </Reveal>
      </div>
    </section>
  );
}
