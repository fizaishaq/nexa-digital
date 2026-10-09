import { motion, useReducedMotion } from 'motion/react';
import { Hexagon } from 'lucide-react';

export default function HeroVisual() {
  const prefersReducedMotion = useReducedMotion();
  const orbits = [
    { size: 180, duration: 20, items: 3 },
    { size: 280, duration: 30, items: 5 },
    { size: 380, duration: 40, items: 7 },
  ];

  const orbitTransition = prefersReducedMotion
    ? { duration: 0, repeat: 0 }
    : { duration: 20, repeat: Infinity, ease: 'linear' as const };

  const chipTransition = prefersReducedMotion
    ? { duration: 0, repeat: 0 }
    : { duration: 4, repeat: Infinity, ease: 'easeInOut' as const };

  return (
    <div className="relative w-full aspect-square max-w-lg mx-auto" aria-hidden="true">
      {/* Glow */}
      <div className="absolute inset-0 bg-radial-glow" />
      <div className={`absolute inset-1/4 bg-accent-500/10 rounded-full blur-3xl ${prefersReducedMotion ? '' : 'animate-pulse-glow'}`} />

      {/* Grid */}
      <div className="absolute inset-0 bg-grid opacity-40 rounded-full mask-fade-b" />

      {/* Center */}
      <motion.div
        initial={prefersReducedMotion ? false : { scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-accent-500 to-royal-600 rounded-2xl blur-2xl opacity-60" />
          <div className="relative w-24 h-24 rounded-2xl glass border border-white/20 flex items-center justify-center shadow-2xl shadow-accent-500/30">
            <Hexagon className="w-12 h-12 text-accent-400" fill="currentColor" fillOpacity={0.2} />
          </div>
        </div>
      </motion.div>

      {/* Orbits */}
      {orbits.map((orbit, i) => (
        <motion.div
          key={i}
          className="absolute top-1/2 left-1/2 rounded-full border border-white/[0.06]"
          style={{ width: orbit.size, height: orbit.size, x: '-50%', y: '-50%' }}
          animate={{ rotate: 360 }}
          transition={{ ...orbitTransition, duration: orbit.duration }}
        >
          {Array.from({ length: orbit.items }).map((_, j) => {
            const angle = (j / orbit.items) * Math.PI * 2;
            const x = Math.cos(angle) * (orbit.size / 2);
            const y = Math.sin(angle) * (orbit.size / 2);
            const sizes = ['w-3 h-3', 'w-2.5 h-2.5', 'w-2 h-2'];
            const colors = ['bg-accent-400', 'bg-royal-400', 'bg-cyanx-400'];
            return (
              <motion.div
                key={j}
                className={`absolute top-1/2 left-1/2 rounded-full ${sizes[i]} ${colors[(i + j) % 3]} shadow-lg`}
                style={{ x, y }}
                animate={{ rotate: -360 }}
                transition={{ ...orbitTransition, duration: orbit.duration }}
              >
                <div className={`absolute inset-0 rounded-full ${colors[(i + j) % 3]} blur-sm opacity-60`} />
              </motion.div>
            );
          })}
        </motion.div>
      ))}

      {/* Floating chips */}
      <motion.div
        className="absolute top-[12%] right-[8%] glass rounded-xl px-3 py-2 text-xs text-gray-300"
        animate={prefersReducedMotion ? undefined : { y: [0, -10, 0] }}
        transition={chipTransition}
      >
        <span className="text-accent-400 font-semibold">React</span> + TypeScript
      </motion.div>
      <motion.div
        className="absolute bottom-[15%] left-[5%] glass rounded-xl px-3 py-2 text-xs text-gray-300"
        animate={prefersReducedMotion ? undefined : { y: [0, 10, 0] }}
        transition={{ ...chipTransition, duration: 5, delay: 1 }}
      >
        <span className="text-royal-400 font-semibold">AI</span> Powered
      </motion.div>
      <motion.div
        className="absolute top-[45%] left-[2%] glass rounded-xl px-3 py-2 text-xs text-gray-300"
        animate={prefersReducedMotion ? undefined : { y: [0, -8, 0] }}
        transition={{ ...chipTransition, duration: 4.5, delay: 0.5 }}
      >
        <span className="text-cyanx-400 font-semibold">99.9%</span> Uptime
      </motion.div>
    </div>
  );
}
