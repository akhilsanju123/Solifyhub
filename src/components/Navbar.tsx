import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import { navItems, services } from '../data';
import { useEnquiry } from './EnquiryContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [expandedService, setExpandedService] = useState<string | null>(null);
  const { open } = useEnquiry();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); setMegaOpen(false); }, [location.pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass shadow-lg shadow-black/30 py-3' : 'py-5 bg-transparent'
        }`}
      >
        <nav className="mx-auto max-w-[1600px] px-5 md:px-10 flex items-center justify-between">
          <Link to="/"><Logo /></Link>

          <div className="hidden lg:flex items-center gap-1">
            <Link to="/" className="px-4 py-2 text-sm text-paper/70 hover:text-paper transition-colors">Home</Link>
            {navItems.map((item) => {
              const path = item === 'Journal' ? '/blog' : `/${item.toLowerCase().replace(' ', '-')}`;
              const isServices = item === 'Services';
              return (
                <div
                  key={item}
                  className="relative"
                  onMouseEnter={() => isServices && setMegaOpen(true)}
                  onMouseLeave={() => isServices && setMegaOpen(false)}
                >
                  <Link
                    to={path}
                    className={`px-4 py-2 text-sm transition-colors flex items-center gap-1 ${
                      location.pathname === path ? 'text-brand-600' : 'text-paper/70 hover:text-paper'
                    }`}
                  >
                    {item}
                    {isServices && <span className={`transition-transform ${megaOpen ? 'rotate-180' : ''}`}>▾</span>}
                  </Link>
                </div>
              );
            })}
            <Link to="/contact" className="px-4 py-2 text-sm text-paper/70 hover:text-paper transition-colors">Contact</Link>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={open}
              data-cursor="hover"
              className="hidden md:inline-flex items-center gap-2 rounded-full brand-gradient text-white px-5 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Enquire Now <ArrowUpRight size={16} />
            </button>
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden text-paper p-2"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {megaOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute left-0 right-0 top-full glass border-t border-paper/10 overflow-hidden"
              onMouseEnter={() => setMegaOpen(true)}
              onMouseLeave={() => setMegaOpen(false)}
            >
              <div className="mx-auto max-w-[1600px] px-10 py-10 grid grid-cols-3 gap-x-8 gap-y-2">
                {services.map((s, i) => (
                  <motion.div
                    key={s.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <Link
                      to={`/services/${s.slug}`}
                      data-cursor="explore"
                      className="group flex items-start gap-4 py-3 border-b border-paper/5 hover:border-brand-400/40 transition-colors"
                    >
                      <span className="font-mono text-xs text-brand-500/60 mt-1">{s.number}</span>
                      <div className="flex-1">
                        <h4 className="font-display text-lg group-hover:text-brand-600 transition-colors">{s.title}</h4>
                        <p className="text-xs text-paper/50 mt-0.5">{s.short}</p>
                      </div>
                      <ArrowUpRight size={18} className="text-paper/30 group-hover:text-brand-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed inset-0 z-[60] bg-ink lg:hidden overflow-y-auto"
          >
            <div className="flex items-center justify-between p-5 border-b border-paper/10">
              <Logo />
              <button onClick={() => setMobileOpen(false)} className="text-paper p-2" aria-label="Close menu">
                <X size={24} />
              </button>
            </div>
            <div className="p-5 space-y-1">
              <Link to="/" className="block py-3 text-2xl font-display border-b border-paper/5">Home</Link>
              {navItems.map((item, i) => {
                const path = item === 'Journal' ? '/blog' : `/${item.toLowerCase().replace(' ', '-')}`;
                const isServices = item === 'Services';
                return (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.08 }}
                  >
                    {isServices ? (
                      <div>
                        <button
                          onClick={() => setExpandedService(expandedService === 'Services' ? null : 'Services')}
                          className="w-full flex items-center justify-between py-3 text-2xl font-display"
                        >
                          Services <span className={`transition-transform ${expandedService === 'Services' ? 'rotate-180' : ''}`}>▾</span>
                        </button>
                        <AnimatePresence>
                          {expandedService === 'Services' && (
                            <motion.div
                              initial={{ height: 0 }}
                              animate={{ height: 'auto' }}
                              exit={{ height: 0 }}
                              className="overflow-hidden pl-4"
                            >
                              {services.map((s) => (
                                <Link key={s.slug} to={`/services/${s.slug}`} className="flex items-center gap-3 py-2.5 text-paper/70">
                                  <span className="font-mono text-xs text-brand-500/60">{s.number}</span>
                                  {s.title}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link to={path} className="block py-3 text-2xl font-display border-b border-paper/5">{item}</Link>
                    )}
                  </motion.div>
                );
              })}
              <Link to="/contact" className="block py-3 text-2xl font-display border-b border-paper/5">Contact</Link>
              <button
                onClick={() => { setMobileOpen(false); open(); }}
                className="mt-6 w-full rounded-full brand-gradient text-white px-5 py-4 text-base font-medium flex items-center justify-center gap-2"
              >
                Enquire Now <ArrowUpRight size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
