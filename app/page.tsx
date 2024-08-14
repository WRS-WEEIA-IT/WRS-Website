import AboutSection from '@/app/[sections]/AboutSection';
import LandingSection from '@/app/[sections]/LandingSection';
import NewsSection from '@/app/[sections]/NewsSection';
import MapSection from './[sections]/MapSection';

export default function Home() {
    return (
        <main className=''>
            <LandingSection />
            <NewsSection />
            <AboutSection />
            <MapSection />
        </main>
    );
}
