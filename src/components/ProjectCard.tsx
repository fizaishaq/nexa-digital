import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import type { Project } from '@/data/projects';
import Reveal from './Reveal';

export default function ProjectCard({
  project,
  index,
  linked = false,
}: {
  project: Project;
  index: number;
  linked?: boolean;
}) {
  const card = (
      <motion.article
        whileHover={{ y: -6 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="glass-card glass-hover overflow-hidden group h-full flex flex-col"
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-20 z-10`} />
          <img
            src={project.image}
            alt={`${project.name} — ${project.category}`}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-transparent to-transparent z-20" />
          <div className="absolute top-4 left-4 z-30">
            <span className="text-xs font-medium text-white/90 bg-black/40 backdrop-blur-sm rounded-full px-3 py-1 border border-white/10">
              {project.category}
            </span>
          </div>
        </div>

        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-accent-400 transition-colors">
            {project.name}
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed mb-4 flex-1">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs text-gray-400 bg-white/5 border border-white/10 rounded-md px-2 py-1"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/[0.06]">
            {project.metrics.map((m) => (
              <div key={m.label}>
                <p className="text-lg font-bold gradient-text">{m.value}</p>
                <p className="text-xs text-gray-500 mt-0.5">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.article>
  );

  return (
    <Reveal delay={index * 0.12} className="h-full">
      {linked ? (
        <Link
          to={`/work?project=${project.id}`}
          aria-label={`View ${project.name} project details`}
          className="block h-full rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-400"
        >
          {card}
        </Link>
      ) : (
        card
      )}
    </Reveal>
  );
}
