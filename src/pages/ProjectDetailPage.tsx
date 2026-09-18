import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Reveal, PageWrap } from '../components/anim';
import { projects } from '../data';
import { useEnquiry } from '../components/EnquiryContext';
import CTA from '../components/CTA';

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const { open } = useEnquiry();
  if (!project) return <Navigate to="/work" />;

  return (
    <PageWrap>
      <section className="pt-32 pb-12 px-5 md:px-10 relative">
        <div className="absolute top-20 left-1/4 w-[400px] h-[400px] rounded-full bg-brand-500/15 blur-[120px] pointer-events-none" />
        <div className="relative mx-auto max-w-[1600px]">
          <Link to="/work" className="inline-flex items-center gap-2 text-paper/50 hover:text-brand-600 transition-colors mb-8 text-sm">
            <ArrowLeft size={16} /> All Work
          </Link>
          <span className="font-mono text-sm text-brand-500/60">{project.category} / {project.year}</span>
          <h1 className="font-display text-5xl md:text-8xl mt-2 leading-[0.9] tracking-tight">{project.title}</h1>
          <p className="text-lg text-paper/60 mt-6 max-w-xl">{project.description}</p>
          <button onClick={open} data-cursor="hover" className="mt-8 inline-flex items-center gap-2 rounded-full brand-gradient text-white px-6 py-3.5 font-medium hover:opacity-90 transition-opacity group">
            Start a project <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </section>
      <Reveal className="px-5 md:px-10">
        <div className="mx-auto max-w-[1600px] rounded-3xl overflow-hidden">
          <img src={project.image} alt={project.title} className="w-full h-[50vh] md:h-[70vh] object-cover" />
        </div>
      </Reveal>
      <CTA />
    </PageWrap>
  );
}
