import { motion } from 'framer-motion';
import { Reveal } from './anim';

export default function SplitSection() {
  return (
    <section className="py-16 md:py-20 px-5 md:px-10">
      <div className="mx-auto max-w-[1600px] grid md:grid-cols-2 gap-px bg-paper/10 rounded-3xl overflow-hidden border border-paper/10">
        <div className="bg-ink2 p-10 md:p-16 group hover:bg-brand-50 transition-colors">
          <Reveal>
            <span className="font-mono text-xs text-brand-600 uppercase tracking-widest">/ Creative Agency</span>
            <h3 className="font-display text-4xl md:text-6xl mt-4 leading-tight">How should the brand communicate?</h3>
            <p className="text-paper/50 mt-6 max-w-md">We shape the voice, the look and the feeling — so every touchpoint says the same thing, with intention.</p>
          </Reveal>
        </div>
        <div className="bg-ink2 p-10 md:p-16 group hover:bg-brand-50 transition-colors">
          <Reveal delay={0.15}>
            <span className="font-mono text-xs text-glow-violet uppercase tracking-widest">/ Digital Marketing Agency</span>
            <h3 className="font-display text-4xl md:text-6xl mt-4 leading-tight">How do we reach the right people and generate results?</h3>
            <ul className="mt-6 space-y-2 text-paper/60">
              {['Run Ads', 'SEO', 'SMO / SMM', 'Remarketing Campaigns', 'Track Conversions'].map((item) => (
                <li key={item} className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-glow-violet" /> {item}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 md:gap-8 mt-12 font-display text-2xl md:text-4xl">
        {['Creative', 'Digital', 'Results'].map((w, i) => (
          <div key={w} className="flex items-center gap-4 md:gap-8">
            <motion.span
              initial={{ opacity: 0.3 }} whileInView={{ opacity: 1 }}
              viewport={{ once: true }} transition={{ delay: i * 0.3, duration: 0.6 }}
              className={i === 2 ? 'gradient-text' : 'text-paper/70'}
            >
              {w}
            </motion.span>
            {i < 2 && <motion.span initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.3 + 0.2, duration: 0.4 }} className="w-12 h-px bg-brand-500 origin-left" />}
          </div>
        ))}
      </div>
    </section>
  );
}
