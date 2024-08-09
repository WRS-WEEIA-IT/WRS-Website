import AboutSection from '@/app/[sections]/AboutSection';
import LandingSection from '@/app/[sections]/LandingSection';
import NewsSection from '@/app/[sections]/NewsSection';
import { Suspense } from 'react';
import MapSection from './[sections]/MapSection';

export default function Home() {
    return (
        <main className=''>
            <LandingSection />
            <Suspense>
                <NewsSection />
            </Suspense>
            <AboutSection />
            <MapSection />
        </main>
    );
}
