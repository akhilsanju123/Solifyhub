import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Reveal, PageWrap } from '../components/anim';
import { posts } from '../data';
import { useEnquiry } from '../components/EnquiryContext';
import CTA from '../components/CTA';

export default function BlogDetailPage() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);
  const { open } = useEnquiry();
  if (!post) return <Navigate to="/blog" />;

  const related = posts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 2);
  const fallback = posts.filter((p) => p.slug !== post.slug).slice(0, 2);
  const more = related.length > 0 ? related : fallback;

  return (
    <PageWrap>
      <article className="pt-32 pb-12 px-5 md:px-10 relative">
        <div className="absolute top-20 right-10 w-[400px] h-[400px] rounded-full bg-brand-500/15 blur-[120px] pointer-events-none" />
        <div className="relative mx-auto max-w-3xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-paper/50 hover:text-brand-600 transition-colors mb-8 text-sm">
            <ArrowLeft size={16} /> All Articles
          </Link>
          <span className="font-mono text-sm text-brand-500/60">{post.category} / {post.date}</span>
          <h1 className="font-display text-4xl md:text-6xl mt-3 leading-[0.95] tracking-tight">{post.title}</h1>
          <div className="flex items-center gap-3 mt-6 text-sm text-paper/40">
            <span>By {post.author}</span>
          </div>
          <Reveal delay={0.2} className="mt-10 rounded-3xl overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full h-[40vh] md:h-[55vh] object-cover" />
          </Reveal>

          <div className="mt-12 max-w-none">
            <p className="text-xl text-paper/70 leading-relaxed">{post.excerpt}</p>
            <p className="text-paper/60 leading-relaxed mt-6">
              At SolifyHub, we see this play out across every project we take on. The brands that break through aren't always the ones with the biggest budgets — they're the ones with the clearest point of view and the discipline to express it consistently.
            </p>
            <p className="text-paper/60 leading-relaxed mt-4">
              That means deciding what you stand for, who you're speaking to, and how you want to be remembered. It means choosing a tone, a visual language and a set of ideas that hold together across every touchpoint — from the first ad to the last scroll.
            </p>
            <p className="text-paper/60 leading-relaxed mt-4">
              When those pieces line up, the work stops feeling like marketing and starts feeling like a brand. That's the shift we help our clients make — and it's the thread that runs through everything we create at SolifyHub.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mt-10">
            {post.tags.map((t) => (
              <span key={t} className="text-xs font-mono text-paper/50 border border-paper/10 rounded-full px-3 py-1">#{t}</span>
            ))}
          </div>
        </div>
      </article>

      <section className="py-16 px-5 md:px-10 bg-ink2">
        <div className="mx-auto max-w-[1600px]">
          <h2 className="font-display text-3xl md:text-5xl mb-8">Keep reading</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {more.map((p) => (
              <Link key={p.slug} to={`/blog/${p.slug}`} data-cursor="view" className="group block">
                <div className="overflow-hidden rounded-2xl mb-4">
                  <img src={p.image} alt={p.title} className="w-full h-[30vh] object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <span className="font-mono text-xs text-brand-500/60">{p.category}</span>
                <h3 className="font-display text-xl mt-2 group-hover:text-brand-600 transition-colors">{p.title}</h3>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <button onClick={open} data-cursor="hover" className="inline-flex items-center gap-2 rounded-full brand-gradient text-white px-7 py-4 font-medium hover:opacity-90 transition-opacity group">
              Work with us <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
      <CTA />
    </PageWrap>
  );
}
