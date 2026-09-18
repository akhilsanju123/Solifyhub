import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowUpRight } from 'lucide-react';
import { Reveal, WordsReveal, PageWrap } from '../components/anim';
import { posts } from '../data';
import CTA from '../components/CTA';

const categories = ['All', 'Strategy', 'Design', 'Marketing', 'Social Media', 'Advertising', 'Technology', 'Creative'];

export default function BlogPage() {
  const [filter, setFilter] = useState('All');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    return posts.filter((p) => {
      const matchCat = filter === 'All' || p.category === filter;
      const q = query.toLowerCase();
      const matchQ = !q || p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q) || p.tags.some((t) => t.includes(q));
      return matchCat && matchQ;
    });
  }, [filter, query]);

  const featured = posts[0];

  return (
    <PageWrap>
      <section className="pt-32 pb-12 px-5 md:px-10 relative">
        <div className="absolute top-20 right-1/4 w-[500px] h-[500px] rounded-full bg-glow-violet/10 blur-[130px] pointer-events-none" />
        <div className="relative mx-auto max-w-[1600px]">
          <Reveal><span className="font-mono text-xs text-brand-600 uppercase tracking-widest">/ Journal</span></Reveal>
          <h1 className="font-display text-5xl md:text-8xl mt-6 leading-[0.9] tracking-tight">
            <WordsReveal text="Ideas, notes and work in progress." />
          </h1>
          <Reveal delay={0.2} className="mt-10 rounded-3xl overflow-hidden">
            <img src="https://images.pexels.com/photos/577195/pexels-photo-577195.jpeg?auto=compress&cs=tinysrgb&w=1400" alt="Journal and insights" className="w-full h-[40vh] md:h-[55vh] object-cover hover:scale-105 transition-transform duration-700" />
          </Reveal>
        </div>
      </section>

      <section className="px-5 md:px-10 pb-20">
        <div className="mx-auto max-w-[1600px]">
          {/* Featured */}
          <Reveal>
            <Link to={`/blog/${featured.slug}`} data-cursor="view" className="group grid md:grid-cols-2 gap-8 mb-16 rounded-3xl overflow-hidden border border-paper/10 hover:border-brand-400/30 transition-colors p-6">
              <div className="overflow-hidden rounded-2xl">
                <img src={featured.image} alt={featured.title} className="w-full h-[40vh] md:h-[50vh] object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-mono text-xs text-brand-600">Featured / {featured.category}</span>
                <h2 className="font-display text-3xl md:text-5xl mt-3 group-hover:text-brand-600 transition-colors">{featured.title}</h2>
                <p className="text-paper/60 mt-4">{featured.excerpt}</p>
                <div className="flex items-center gap-3 mt-6 text-sm text-paper/40">
                  <span>{featured.author}</span> · <span>{featured.date}</span>
                </div>
              </div>
            </Link>
          </Reveal>

          {/* Search + filters */}
          <div className="flex flex-col md:flex-row gap-6 mb-10">
            <div className="relative flex-1 max-w-md">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-paper/30" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search articles..."
                className="w-full bg-ink2 border border-paper/10 rounded-full pl-12 pr-4 py-3 text-paper focus:border-brand-500 outline-none transition-colors"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  data-cursor="hover"
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    filter === cat ? 'brand-gradient text-white' : 'border border-paper/10 text-paper/60 hover:border-brand-400/40'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-paper/40">
              <p className="font-display text-2xl">No articles found</p>
              <p className="text-sm mt-2">Try a different search or category.</p>
            </div>
          ) : (
            <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              <AnimatePresence>
                {filtered.map((p, i) => (
                  <motion.div
                    key={p.slug}
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                  >
                    <Link to={`/blog/${p.slug}`} data-cursor="view" className="group block">
                      <div className="overflow-hidden rounded-2xl mb-4">
                        <img src={p.image} alt={p.title} className="w-full h-[30vh] object-cover group-hover:scale-105 transition-transform duration-700" />
                      </div>
                      <span className="font-mono text-xs text-brand-500/60">{p.category} / {p.date}</span>
                      <h3 className="font-display text-xl mt-2 group-hover:text-brand-600 transition-colors">{p.title}</h3>
                      <p className="text-paper/50 text-sm mt-2">{p.excerpt}</p>
                      <div className="flex items-center gap-2 mt-4 text-sm text-paper/40 group-hover:text-brand-600 transition-colors">
                        Read more <ArrowUpRight size={16} />
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </section>
      <CTA />
    </PageWrap>
  );
}
