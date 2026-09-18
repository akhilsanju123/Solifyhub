import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from './anim';
import { services } from '../data';

export default function Services() {
  return (
    <section className="py-16 md:py-20 px-5 md:px-10 bg-ink2">
      <div className="mx-auto max-w-[1600px]">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <Reveal><span className="font-mono text-xs text-brand-600 uppercase tracking-widest">/ Services</span></Reveal>
            <h2 className="font-display text-5xl md:text-7xl mt-4 tracking-tight">What We Create</h2>
          </div>
          <Reveal delay={0.2}>
            <Link to="/services" data-cursor="hover" className="inline-flex items-center gap-2 text-paper/60 hover:text-brand-600 transition-colors">
              All Services <ArrowUpRight size={18} />
            </Link>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="mb-12 rounded-2xl overflow-hidden">
          <img src="https://images.pexels.com/photos/6476258/pexels-photo-6476258.jpeg?auto=compress&cs=tinysrgb&w=1400" alt="Digital marketing services" className="w-full h-[25vh] md:h-[35vh] object-cover hover:scale-105 transition-transform duration-700" />
        </Reveal>

        <div className="border-t border-paper/10">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.03}>
              <Link
                to={`/services/${s.slug}`}
                data-cursor="explore"
                className="group relative grid grid-cols-12 items-center gap-4 py-6 md:py-8 border-b border-paper/10 hover:border-brand-400/40 transition-colors"
              >
                <span className="col-span-2 md:col-span-1 font-mono text-xs text-brand-500/60 group-hover:text-brand-600 transition-colors">{s.number}</span>
                <h3 className="col-span-7 md:col-span-4 font-display text-2xl md:text-4xl group-hover:translate-x-2 transition-transform duration-500">{s.title}</h3>
                <p className="hidden md:block col-span-5 text-paper/50 text-sm group-hover:text-paper/80 transition-colors">{s.short}</p>
                <div className="col-span-3 md:col-span-2 flex justify-end">
                  <ArrowUpRight size={24} className="text-paper/30 group-hover:text-brand-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute right-10 top-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-brand-400/10 blur-[40px]" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
