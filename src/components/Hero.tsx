import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEnquiry } from './EnquiryContext';
import Logo from './Logo';

export default function Hero() {
  const { open } = useEnquiry();
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { damping: 30, stiffness: 100 });
  const sy = useSpring(my, { damping: 30, stiffness: 100 });
  const x1 = useTransform(sx, [-0.5, 0.5], [-30, 30]);
  const y1 = useTransform(sy, [-0.5, 0.5], [-30, 30]);
  const x2 = useTransform(sx, [-0.5, 0.5], [20, -20]);
  const y2 = useTransform(sy, [-0.5, 0.5], [20, -20]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const r = ref.current.getBoundingClientRect();
      mx.set((e.clientX - r.left) / r.width - 0.5);
      my.set((e.clientY - r.top) / r.height - 0.5);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [mx, my]);

  const headline = ['Creative', 'Ideas.', 'Digital', 'Impact.'];

  return (
    <section ref={ref} className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden pt-28 pb-12 px-5 md:px-10">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-brand-500/10 blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-glow-violet/8 blur-[120px]" />
        <motion.div style={{ x: x1, y: y1 }} className="absolute top-20 right-20 w-72 h-72 rounded-full border border-brand-300/30" />
        <motion.div style={{ x: x2, y: y2 }} className="absolute bottom-32 left-10 w-48 h-48 rounded-full border border-glow-violet/15" />
        <div className="absolute inset-0 grain opacity-[0.04]" />
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(10,23,51,0.03) 1px, transparent 1px)', backgroundSize: '100% 80px' }} />

        {/* Large floating logo mark */}
        <motion.div
          style={{ x: x1, y: y1 }}
          className="absolute top-1/2 right-[-5%] md:right-[8%] -translate-y-1/2 hidden md:block"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            className="opacity-20"
          >
            <Logo showText={false} className="scale-[5]" />
          </motion.div>
        </motion.div>
      </div>

      <div className="relative mx-auto max-w-[1600px] w-full">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
          className="flex items-center gap-3 mb-8">
          <span className="w-12 h-px bg-brand-500" />
          <span className="font-mono text-xs text-brand-600 uppercase tracking-widest">Creative Agency / Digital Marketing</span>
        </motion.div>

        <h1 className="font-display text-[15vw] md:text-[10vw] lg:text-[9vw] leading-[0.85] tracking-tighter">
          {headline.map((word, i) => (
            <span key={i} className="inline-block overflow-hidden align-bottom mr-3">
              <motion.span
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.4 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className={`inline-block ${i % 2 === 1 ? 'gradient-text' : ''}`}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        <div className="grid md:grid-cols-2 gap-8 mt-10 items-end">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-lg md:text-xl text-paper/70 max-w-md leading-relaxed"
          >
            A creative agency turns a business idea into something people can see, understand, remember and act on.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <button onClick={open} data-cursor="hover"
              className="group inline-flex items-center gap-2 rounded-full brand-gradient text-white px-7 py-4 font-medium hover:opacity-90 transition-opacity">
              Enquire Now
              <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
            <Link to="/services" data-cursor="hover"
              className="inline-flex items-center gap-2 rounded-full border border-paper/15 px-7 py-4 font-medium hover:border-brand-500 hover:text-brand-600 transition-colors">
              Explore Services
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-12 rounded-3xl overflow-hidden"
        >
          <img src="https://images.pexels.com/photos/6476257/pexels-photo-6476257.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="SolifyHub creative team collaborating" className="w-full h-[30vh] md:h-[45vh] object-cover hover:scale-105 transition-transform duration-700" />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-paper/40"
      >
        <span className="font-mono text-xs">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
