import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useEnquiry } from './EnquiryContext';

export default function CTA() {
  const { open } = useEnquiry();
  return (
    <section className="relative py-20 md:py-28 px-5 md:px-10 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-brand-500/8 blur-[150px]" />
        <div className="absolute inset-0 grain opacity-[0.1]" />
      </div>
      <div className="relative text-center mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="font-display text-5xl md:text-8xl leading-[0.95] tracking-tight"
        >
          Have an idea? <br />Let's make it happen.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-8 text-lg md:text-xl text-paper/60 max-w-xl mx-auto"
        >
          Tell us what you're building, and let's create something people remember.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.6 }}
          onClick={open} data-cursor="hover"
          className="mt-10 inline-flex items-center gap-3 rounded-full brand-gradient text-white px-8 py-5 text-lg font-medium hover:opacity-90 transition-opacity group"
        >
          Enquire Now
          <ArrowUpRight size={22} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </motion.button>
      </div>
    </section>
  );
}
