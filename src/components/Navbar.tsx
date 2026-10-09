import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { Menu, X, Hexagon } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Work', path: '/work' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const prefersReducedMotion = useReducedMotion();
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      const handler = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setOpen(false);
          toggleBtnRef.current?.focus();
        }
      };
      document.addEventListener('keydown', handler);
      return () => {
        document.body.style.overflow = '';
        document.removeEventListener('keydown', handler);
      };
    }
    document.body.style.overflow = '';
  }, [open]);

  const indicatorTransition = prefersReducedMotion
    ? { duration: 0 }
    : { type: 'spring' as const, stiffness: 400, damping: 30 };

  const panelTransition = prefersReducedMotion
    ? { duration: 0 }
    : { duration: 0.25 };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-ink-950/80 backdrop-blur-xl border-b border-white/[0.06]'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-5 sm:px-6 md:px-10 lg:px-16 flex items-center justify-between h-16 md:h-20" aria-label="Primary">
          <Link to="/" className="flex items-center gap-2 group" aria-label="NEXA Digital home">
            <span className="relative">
              <Hexagon className="w-8 h-8 text-accent-500 transition-transform duration-300 group-hover:rotate-12" fill="currentColor" fillOpacity={0.15} />
            </span>
            <span className="font-display text-xl font-bold tracking-tight text-white">
              NEXA<span className="text-accent-400"> Digital</span>
            </span>
          </Link>

          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const active =
            link.path === '/'
              ? location.pathname === '/'
              : location.pathname.startsWith(link.path);
              return (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                      active ? 'text-white' : 'text-gray-400 hover:text-white'
                    }`}
                    aria-current={active ? 'page' : undefined}
                  >
                    {link.label}
                    {active && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute inset-0 bg-white/[0.06] rounded-lg border border-white/[0.08]"
                        transition={indicatorTransition}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden md:block">
            <Link to="/contact" className="btn-primary text-sm py-2.5 px-5">
              Start a Project
            </Link>
          </div>

          <button
            ref={toggleBtnRef}
            className="md:hidden p-2 -mr-2 text-gray-200 hover:text-white"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={panelTransition}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-ink-950/95 backdrop-blur-xl" onClick={() => setOpen(false)} />
            <motion.nav
              ref={menuRef}
              id="mobile-menu"
              initial={prefersReducedMotion ? undefined : { y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={prefersReducedMotion ? undefined : { y: -20, opacity: 0 }}
              transition={panelTransition}
              className="absolute top-16 inset-x-0 bg-ink-900 border-b border-white/10 px-5 sm:px-6 py-6"
              aria-label="Mobile"
            >
              <ul className="flex flex-col gap-2">
                {navLinks.map((link) => {
                  const active =
            link.path === '/'
              ? location.pathname === '/'
              : location.pathname.startsWith(link.path);
                  return (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                          active
                            ? 'bg-accent-500/10 text-accent-400 border border-accent-500/20'
                            : 'text-gray-300 hover:bg-white/5'
                        }`}
                        aria-current={active ? 'page' : undefined}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
                <li className="pt-2">
                  <Link to="/contact" className="btn-primary w-full">
                    Start a Project
                  </Link>
                </li>
              </ul>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
