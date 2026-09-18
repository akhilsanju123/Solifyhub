import { Reveal } from './anim';

const cards = [
  { num: '01', title: 'Creative First', desc: 'Every project starts with an idea worth caring about — not a template.' },
  { num: '02', title: 'Strategy Driven', desc: 'We design with intent, so the work does a job, not just decorates one.' },
  { num: '03', title: 'Digital Focused', desc: 'Built for how people actually scroll, watch, click and share today.' },
  { num: '04', title: 'Results Oriented', desc: 'We care about the metrics that move your business, not just the awards.' },
];

export default function WhySolifyHub() {
  return (
    <section className="py-16 md:py-20 px-5 md:px-10 bg-ink2">
      <div className="mx-auto max-w-[1600px]">
        <Reveal><span className="font-mono text-xs text-brand-600 uppercase tracking-widest">/ Why</span></Reveal>
        <h2 className="font-display text-5xl md:text-7xl mt-4 mb-10 tracking-tight">Why SolifyHub?</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((c, i) => (
            <Reveal key={c.num} delay={i * 0.1}>
              <div className="group h-full p-8 rounded-2xl border border-paper/10 hover:border-brand-400/40 hover:bg-brand-50 transition-all duration-500 hover:-translate-y-2">
                <span className="font-mono text-sm text-brand-500/60">{c.num}</span>
                <h3 className="font-display text-2xl mt-4 mb-3 group-hover:text-brand-600 transition-colors">{c.title}</h3>
                <p className="text-paper/50 text-sm leading-relaxed">{c.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
