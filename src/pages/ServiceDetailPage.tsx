import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowUpRight, ArrowLeft, Check } from 'lucide-react';
import { Reveal, PageWrap } from '../components/anim';
import { services } from '../data';
import { useEnquiry } from '../components/EnquiryContext';
import CTA from '../components/CTA';

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);
  const { open } = useEnquiry();
  if (!service) return <Navigate to="/services" />;

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <PageWrap>
      <section className="pt-32 pb-12 px-5 md:px-10 relative">
        <div className="absolute top-20 right-10 w-[400px] h-[400px] rounded-full bg-brand-500/15 blur-[120px] pointer-events-none" />
        <div className="relative mx-auto max-w-[1600px]">
          <Link to="/services" className="inline-flex items-center gap-2 text-paper/50 hover:text-brand-600 transition-colors mb-8 text-sm">
            <ArrowLeft size={16} /> All Services
          </Link>
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7">
              <span className="font-mono text-sm text-brand-500/60">{service.number}</span>
              <h1 className="font-display text-6xl md:text-9xl mt-2 leading-[0.85] tracking-tighter">{service.title}</h1>
            </div>
            <div className="lg:col-span-5">
              <p className="text-lg text-paper/60 leading-relaxed">{service.description}</p>
              <button onClick={open} data-cursor="hover" className="mt-6 inline-flex items-center gap-2 rounded-full brand-gradient text-white px-6 py-3.5 font-medium hover:opacity-90 transition-opacity group">
                Enquire Now <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
          <Reveal delay={0.2} className="mt-12 rounded-3xl overflow-hidden">
            <img src={service.image} alt={service.title} className="w-full h-[40vh] md:h-[55vh] object-cover" />
          </Reveal>
        </div>
      </section>

      <section className="py-16 px-5 md:px-10 bg-ink2">
        <div className="mx-auto max-w-[1600px] grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-display text-3xl md:text-5xl mb-8">What's included</h2>
            <ul className="space-y-3">
              {service.subs.map((sub, i) => (
                <Reveal key={sub} delay={i * 0.05}>
                  <li className="flex items-center gap-3 text-lg text-paper/70 border-b border-paper/5 pb-3">
                    <span className="w-6 h-6 rounded-full bg-brand-500/10 flex items-center justify-center shrink-0"><Check size={14} className="text-brand-600" /></span>
                    {sub}
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-3xl md:text-5xl mb-8">How we work</h2>
            <div className="space-y-6">
              {service.process.map((step, i) => (
                <Reveal key={step} delay={i * 0.1}>
                  <div className="flex gap-4">
                    <span className="font-mono text-sm text-brand-500/60 mt-1">{String(i + 1).padStart(2, '0')}</span>
                    <p className="text-lg text-paper/70">{step}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-5 md:px-10">
        <div className="mx-auto max-w-[1600px]">
          <h2 className="font-display text-3xl md:text-5xl mb-8">Related services</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {related.map((s) => (
              <Link key={s.slug} to={`/services/${s.slug}`} data-cursor="explore" className="group p-6 rounded-2xl border border-paper/10 hover:border-brand-400/40 hover:bg-ink2 transition-all">
                <span className="font-mono text-xs text-brand-500/60">{s.number}</span>
                <h3 className="font-display text-2xl mt-2 group-hover:text-brand-600 transition-colors">{s.title}</h3>
                <p className="text-paper/50 text-sm mt-2">{s.short}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </PageWrap>
  );
}
