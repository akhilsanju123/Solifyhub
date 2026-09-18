import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Reveal, WordsReveal, PageWrap } from '../components/anim';
import { services } from '../data';
import CTA from '../components/CTA';

export default function ServicesPage() {
  return (
    <PageWrap>
      <section className="pt-32 pb-12 px-5 md:px-10 relative">
        <div className="absolute top-20 left-1/3 w-[500px] h-[500px] rounded-full bg-glow-violet/10 blur-[130px] pointer-events-none" />
        <div className="relative mx-auto max-w-[1600px]">
          <Reveal><span className="font-mono text-xs text-brand-600 uppercase tracking-widest">/ Services</span></Reveal>
          <h1 className="font-display text-5xl md:text-8xl mt-6 leading-[0.9] tracking-tight">
            <WordsReveal text="What we create" />
          </h1>
          <Reveal delay={0.2} className="mt-10 rounded-3xl overflow-hidden">
            <img src="https://images.pexels.com/photos/7691707/pexels-photo-7691707.jpeg?auto=compress&cs=tinysrgb&w=1400" alt="Digital marketing services" className="w-full h-[40vh] md:h-[55vh] object-cover hover:scale-105 transition-transform duration-700" />
          </Reveal>
        </div>
      </section>

      <section className="py-10 px-5 md:px-10 bg-ink2">
        <div className="mx-auto max-w-[1600px]">
          <div className="border-t border-paper/10">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.03}>
                <Link
                  to={`/services/${s.slug}`}
                  data-cursor="explore"
                  className="group relative grid grid-cols-12 items-center gap-4 py-6 md:py-8 border-b border-paper/10 hover:border-brand-400/40 transition-colors"
                >
                  <span className="col-span-2 md:col-span-1 font-mono text-xs text-brand-500/60">{s.number}</span>
                  <h3 className="col-span-7 md:col-span-3 font-display text-2xl md:text-4xl group-hover:translate-x-2 transition-transform">{s.title}</h3>
                  <p className="hidden md:block col-span-5 text-paper/50 text-sm">{s.short}</p>
                  <div className="col-span-3 md:col-span-2 flex justify-end">
                    <ArrowUpRight size={24} className="text-paper/30 group-hover:text-brand-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>
                  <div className="col-span-12 md:col-span-1 flex flex-wrap gap-1.5">
                    {s.subs.slice(0, 3).map((sub) => (
                      <span key={sub} className="text-[10px] font-mono text-paper/40 border border-paper/10 rounded-full px-2 py-0.5">{sub}</span>
                    ))}
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </PageWrap>
  );
}
