import { motion } from 'framer-motion';
import { Reveal } from './anim';

const steps = [
  { num: '01', title: 'Discover', desc: 'We dig into your brand, audience and ambition to find the real opportunity.' },
  { num: '02', title: 'Strategize', desc: 'We shape the sharp idea and the plan to carry it across every channel.' },
  { num: '03', title: 'Create', desc: 'We design, write, film and build — turning the strategy into things people feel.' },
  { num: '04', title: 'Launch', desc: 'We put the work into the world with intention, timing and craft.' },
  { num: '05', title: 'Grow', desc: 'We measure, learn and scale what works to keep momentum building.' },
];

const processImage = 'https://images.pexels.com/photos/6476257/pexels-photo-6476257.jpeg?auto=compress&cs=tinysrgb&w=1400';

export default function Process() {
  return (
    <section className="py-16 md:py-20 px-5 md:px-10">
      <div className="mx-auto max-w-[1600px]">
        <Reveal><span className="font-mono text-xs text-brand-600 uppercase tracking-widest">/ Process</span></Reveal>
        <h2 className="font-display text-5xl md:text-7xl mt-4 mb-10 tracking-tight">From Idea to Impact</h2>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-paper/10" />
            <motion.div
              className="absolute left-0 top-0 w-px brand-gradient"
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: 'easeInOut' }}
            />
            <div className="space-y-8">
              {steps.map((s, i) => (
                <Reveal key={s.num} delay={i * 0.1}>
                  <div className="flex items-start gap-6 pl-8 relative">
                    <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-brand-500 -translate-x-1/2" />
                    <span className="font-mono text-sm text-brand-500/60">{s.num}</span>
                    <div>
                      <h3 className="font-display text-3xl md:text-5xl">{s.title}</h3>
                      <p className="text-paper/50 mt-2 max-w-md">{s.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.2} className="min-h-[420px] lg:min-h-0">
            <div className="relative h-full min-h-[420px] overflow-hidden rounded-3xl group">
              <img src={processImage} alt="Creative team turning ideas into work" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <span className="font-mono text-xs text-brand-600 uppercase tracking-widest">/ Built with intention</span>
                <p className="font-display text-2xl md:text-3xl mt-2 max-w-sm">Every step moves the idea closer to impact.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
