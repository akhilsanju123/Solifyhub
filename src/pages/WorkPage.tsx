import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Reveal, WordsReveal, PageWrap } from '../components/anim';
import { projects } from '../data';
import CTA from '../components/CTA';

const categories = ['All', 'Branding', 'Graphic Design', 'Advertising', 'Video', 'Social Media', 'Web', 'Motion', 'Campaigns'];

export default function WorkPage() {
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <PageWrap>
      <section className="pt-32 pb-12 px-5 md:px-10 relative">
        <div className="absolute top-20 right-1/4 w-[500px] h-[500px] rounded-full bg-glow-violet/10 blur-[130px] pointer-events-none" />
        <div className="relative mx-auto max-w-[1600px]">
          <Reveal><span className="font-mono text-xs text-brand-600 uppercase tracking-widest">/ Work</span></Reveal>
          <h1 className="font-display text-5xl md:text-8xl mt-6 leading-[0.9] tracking-tight">
            <WordsReveal text="Selected work" />
          </h1>
          <Reveal delay={0.2} className="mt-10 rounded-3xl overflow-hidden">
            <img src="https://images.pexels.com/photos/8154349/pexels-photo-8154349.jpeg?auto=compress&cs=tinysrgb&w=1400" alt="Our creative work" className="w-full h-[40vh] md:h-[55vh] object-cover hover:scale-105 transition-transform duration-700" />
          </Reveal>
        </div>
      </section>

      <section className="px-5 md:px-10 pb-20">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                data-cursor="hover"
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                  filter === cat ? 'brand-gradient text-white' : 'border border-paper/10 text-paper/60 hover:border-brand-400/40 hover:text-paper'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            <AnimatePresence>
              {filtered.map((p, i) => (
                <motion.div
                  key={p.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className={i === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}
                >
                  <Link to={`/work/${p.slug}`} data-cursor="view" className="group block relative overflow-hidden rounded-2xl">
                    <div className={`relative overflow-hidden ${i === 0 ? 'h-[60vh] lg:h-[70vh]' : 'h-[40vh]'}`}>
                      <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-end justify-between">
                        <div>
                          <span className="font-mono text-xs text-brand-600">{p.category} / {p.year}</span>
                          <h3 className="font-display text-2xl md:text-3xl mt-1 group-hover:translate-x-2 transition-transform">{p.title}</h3>
                          <p className="text-paper/60 text-sm mt-1 max-w-sm">{p.description}</p>
                        </div>
                        <ArrowUpRight size={28} className="text-paper/40 group-hover:text-brand-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all shrink-0" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
      <CTA />
    </PageWrap>
  );
}
