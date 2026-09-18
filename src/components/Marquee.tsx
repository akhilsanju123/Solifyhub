const items = ['Branding', 'Design', 'Advertising', 'Video', 'Social Media', 'Content', 'Web', 'Motion', 'Campaigns', 'Strategy', 'Digital Marketing'];

export default function Marquee() {
  return (
    <div className="relative py-8 border-y border-paper/10 overflow-hidden bg-ink2">
      <div className="flex animate-marquee whitespace-nowrap group">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="group-hover:[animation-play-state:paused] inline-flex items-center mx-6 font-display text-5xl md:text-7xl text-paper/80">
            {item}
            <span className="mx-6 text-brand-500">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
