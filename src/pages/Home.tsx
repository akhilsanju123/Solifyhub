import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import About from '../components/About';
import Services from '../components/Services';
import SplitSection from '../components/SplitSection';
import Process from '../components/Process';
import WhySolifyHub from '../components/WhySolifyHub';
import CTA from '../components/CTA';
import { PageWrap } from '../components/anim';

export default function Home() {
  return (
    <PageWrap>
      <Hero />
      <Marquee />
      <About />
      <Services />
      <SplitSection />
      <Process />
      <WhySolifyHub />
      <CTA />
    </PageWrap>
  );
}
