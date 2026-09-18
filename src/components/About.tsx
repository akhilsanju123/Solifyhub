import { Reveal, WordsReveal } from './anim';
import { useEffect, useRef, useState } from 'react';

const stats = [
  { num: '01', label: 'Creative Thinking', value: 100, suffix: '%' },
  { num: '02', label: 'Digital Strategy', value: 95, suffix: '%' },
  { num: '03', label: 'Visual Storytelling', value: 120, suffix: '+' },
  { num: '04', label: 'Business Growth', value: 80, suffix: '%' },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / 1500, 1);
          setN(Math.floor(value * p));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [value]);
  return <span ref={ref}>{n}{suffix}</span>;
}

export default function About() {
  return (
    <section className="py-16 md:py-20 px-5 md:px-10">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid lg:grid-cols-12 gap-10 mb-12">
          <div className="lg:col-span-5">
            <Reveal><span className="font-mono text-xs text-brand-600 uppercase tracking-widest">/ About</span></Reveal>
            <Reveal delay={0.15} className="mt-8 rounded-2xl overflow-hidden">
              <img src="https://images.pexels.com/photos/6476592/pexels-photo-6476592.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="SolifyHub team at work" className="w-full h-[34vh] md:h-[42vh] object-cover hover:scale-105 transition-transform duration-700" />
            </Reveal>
          </div>
          <div className="lg:col-span-7 lg:pt-10">
            <h2 className="font-display text-4xl md:text-6xl leading-tight tracking-tight">
              <WordsReveal text="We turn ideas into experiences." />
            </h2>
            <Reveal delay={0.3}>
              <p className="mt-6 text-lg text-paper/60 max-w-xl leading-relaxed">
                SolifyHub combines creative thinking, strategy, design, digital marketing, content and technology — so your brand doesn't just show up, it sticks.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-paper/10 border border-paper/10 rounded-2xl overflow-hidden">
          {stats.map((s, i) => (
            <Reveal key={s.num} delay={i * 0.1} className="bg-ink2 p-8 md:p-10 hover:bg-brand-50 transition-colors">
              <span className="font-mono text-xs text-brand-500/60">{s.num}</span>
              <div className="font-display text-4xl md:text-6xl mt-3 text-paper">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <p className="text-paper/50 text-sm mt-2">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
