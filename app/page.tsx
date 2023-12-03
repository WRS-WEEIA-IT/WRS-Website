import AboutSection from '@/app/[sections]/AboutSection';
import DutiesSection from '@/app/[sections]/DutiesSection';
import LandingSection from '@/app/[sections]/LandingSection';
import NewsSection from '@/app/[sections]/NewsSection';

export default function Home() {
  return (
    <main className=''>
      <LandingSection />
      <NewsSection />
      <AboutSection />
      <DutiesSection />
    </main>
  );
}
