import { Reveal, WordsReveal, PageWrap } from '../components/anim';
import CTA from '../components/CTA';
import SplitSection from '../components/SplitSection';
import { Target, Eye, Users } from 'lucide-react';

const values = [
  { title: 'Creative', desc: 'We lead with imagination and back it with craft.' },
  { title: 'Bold', desc: 'We make work that has the confidence to be noticed.' },
  { title: 'Premium', desc: 'Every detail matters, from the idea to the final pixel.' },
  { title: 'Modern', desc: 'We design for the way people actually experience brands.' },
  { title: 'Innovative', desc: 'We find new ways to tell stories that feel fresh.' },
  { title: 'Strategic', desc: 'Every choice serves a purpose beyond looking good.' },
  { title: 'Digital', desc: 'We build for screens, feeds and the spaces in between.' },
  { title: 'Professional', desc: 'We show up, communicate clearly and deliver on time.' },
];

const team = [
  { name: 'Srinivasa Rao', role: 'Founder & Creative Director', image: 'https://images.pexels.com/photos/37605831/pexels-photo-37605831.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { name: 'Aarav Mehta', role: 'Head of Strategy', image: 'https://images.pexels.com/photos/37148308/pexels-photo-37148308.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { name: 'Nisha Rao', role: 'Lead Designer', image: 'https://images.pexels.com/photos/29086752/pexels-photo-29086752.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { name: 'Priya Sharma', role: 'Social Media Lead', image: 'https://images.pexels.com/photos/27086922/pexels-photo-27086922.jpeg?auto=compress&cs=tinysrgb&w=800' },
];

const introImage = 'https://images.pexels.com/photos/6476257/pexels-photo-6476257.jpeg?auto=compress&cs=tinysrgb&w=1200';
const missionImage = 'https://images.pexels.com/photos/6476258/pexels-photo-6476258.jpeg?auto=compress&cs=tinysrgb&w=1200';
const visionImage = 'https://images.pexels.com/photos/3183131/pexels-photo-3183131.jpeg?auto=compress&cs=tinysrgb&w=1200';

export default function AboutPage() {
  return (
    <PageWrap>
      {/* Intro — image left, text right, no min-h-screen */}
      <section className="pt-32 pb-12 px-5 md:px-10 relative">
        <div className="absolute top-20 right-10 w-[400px] h-[400px] rounded-full bg-brand-500/15 blur-[120px] pointer-events-none" />
        <div className="relative mx-auto max-w-[1600px]">
          <Reveal><span className="font-mono text-xs text-brand-600 uppercase tracking-widest">/ About Us</span></Reveal>
          <h1 className="font-display text-5xl md:text-7xl mt-6 leading-[0.9] tracking-tight max-w-4xl">
            <WordsReveal text="We turn ideas into experiences." />
          </h1>
          <div className="grid lg:grid-cols-2 gap-10 mt-10 items-center">
            <Reveal delay={0.15}>
              <div className="relative rounded-3xl overflow-hidden group">
                <img src={introImage} alt="SolifyHub team at work" className="w-full h-[40vh] md:h-[50vh] object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-900/20 to-transparent" />
              </div>
            </Reveal>
            <div className="space-y-5">
              <Reveal delay={0.2}>
                <p className="text-lg text-paper/60 leading-relaxed">
                  SolifyHub is a creative agency and digital marketing partner. We combine creative thinking, strategy, design, content and technology to turn business ideas into something people can see, understand, remember and act on.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <p className="text-lg text-paper/60 leading-relaxed">
                  We believe great work starts with a sharp idea and ends with a real result. Between those two points, we bring craft, clarity and the kind of creative conviction that makes brands impossible to ignore — online and off.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-14 px-5 md:px-10 bg-ink2">
        <div className="mx-auto max-w-[1600px] grid lg:grid-cols-2 gap-10 items-center">
          <Reveal>
            <div className="relative rounded-3xl overflow-hidden group">
              <img src={missionImage} alt="Our mission" className="w-full h-[40vh] md:h-[50vh] object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-900/30 to-transparent" />
            </div>
          </Reveal>
          <div>
            <Reveal><div className="flex items-center gap-3 mb-5"><Target size={28} className="text-brand-600" /><span className="font-mono text-xs text-brand-600 uppercase tracking-widest">/ Our Mission</span></div></Reveal>
            <Reveal delay={0.1}><h2 className="font-display text-3xl md:text-5xl leading-tight tracking-tight mb-5">Make every brand impossible to ignore.</h2></Reveal>
            <Reveal delay={0.2}><p className="text-base text-paper/60 leading-relaxed">Our mission is to help businesses grow by turning ideas into experiences that people remember. We combine strategy, design, content and technology to create work that doesn't just look good — it moves people to act. Every project we take on is built to make a real, measurable difference for the brand behind it.</p></Reveal>
            <Reveal delay={0.3}><p className="text-base text-paper/60 leading-relaxed mt-3">We exist to close the gap between what a brand wants to say and what its audience actually feels — using craft, clarity and creative conviction to make that connection stick.</p></Reveal>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-14 px-5 md:px-10">
        <div className="mx-auto max-w-[1600px] grid lg:grid-cols-2 gap-10 items-center">
          <div className="lg:order-2">
            <Reveal>
              <div className="relative rounded-3xl overflow-hidden group">
                <img src={visionImage} alt="Our vision" className="w-full h-[40vh] md:h-[50vh] object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-glow-violet/20 to-transparent" />
              </div>
            </Reveal>
          </div>
          <div className="lg:order-1">
            <Reveal><div className="flex items-center gap-3 mb-5"><Eye size={28} className="text-brand-600" /><span className="font-mono text-xs text-brand-600 uppercase tracking-widest">/ Our Vision</span></div></Reveal>
            <Reveal delay={0.1}><h2 className="font-display text-3xl md:text-5xl leading-tight tracking-tight mb-5">A world where every brand has a voice.</h2></Reveal>
            <Reveal delay={0.2}><p className="text-base text-paper/60 leading-relaxed">We envision a future where small and growing brands have the same creative firepower as the biggest names. Where strategy, design and digital marketing aren't luxuries — they're the foundation every brand builds on.</p></Reveal>
            <Reveal delay={0.3}><p className="text-base text-paper/60 leading-relaxed mt-3">Our goal is to be the partner that helps make that happen — one idea, one campaign, one experience at a time — for brands across India and beyond.</p></Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-14 px-5 md:px-10 bg-ink2">
        <div className="mx-auto max-w-[1600px]">
          <h2 className="font-display text-3xl md:text-5xl mb-8 tracking-tight">What we value</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-paper/10 border border-paper/10 rounded-2xl overflow-hidden">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.05} className="bg-ink2 p-6 md:p-8 hover:bg-brand-50 transition-colors">
                <h3 className="font-display text-2xl gradient-text">{v.title}</h3>
                <p className="text-paper/50 text-sm mt-2">{v.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-14 px-5 md:px-10">
        <div className="mx-auto max-w-[1600px]">
          <Reveal><div className="flex items-center gap-3 mb-5"><Users size={28} className="text-brand-600" /><span className="font-mono text-xs text-brand-600 uppercase tracking-widest">/ Our Team</span></div></Reveal>
          <Reveal delay={0.1}><h2 className="font-display text-3xl md:text-5xl mb-8 tracking-tight">The people behind the work.</h2></Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={i * 0.08}>
                <div className="group">
                  <div className="relative overflow-hidden rounded-2xl mb-4">
                    <img src={member.image} alt={member.name} className="w-full h-[45vh] object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="font-display text-xl">{member.name}</h3>
                  <p className="text-brand-600 text-sm mt-1">{member.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SplitSection />
      <CTA />
    </PageWrap>
  );
}
