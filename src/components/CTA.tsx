import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Reveal from './Reveal';

interface CTAProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonTo?: string;
}

export default function CTA({
  title = 'Ready to build something extraordinary?',
  subtitle = "Let's turn your vision into a product your users will love. Book a free consultation and we'll map out the path together.",
  buttonText = 'Start a Project',
  buttonTo = '/contact',
}: CTAProps) {
  return (
    <Reveal>
      <section className="section-pad">
        <div className="container-max">
          <div className="relative overflow-hidden rounded-3xl glass border border-white/10 p-10 md:p-16 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-600/10 via-royal-600/10 to-cyanx-500/10" />
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent-500/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-royal-500/20 rounded-full blur-3xl" />

            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
                {title}
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">{subtitle}</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to={buttonTo}>
                  <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                    <span className="btn-primary text-base px-8 py-4">
                      {buttonText}
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  </motion.span>
                </Link>
                <Link to="/work" className="btn-ghost text-base px-8 py-4">
                  View Our Work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
