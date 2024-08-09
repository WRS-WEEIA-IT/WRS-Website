import AboutSection from '@/app/[sections]/AboutSection';
import LandingSection from '@/app/[sections]/LandingSection';
import NewsSection from '@/app/[sections]/NewsSection';
import { Suspense } from 'react';

export default function Home() {
    return (
        <main className=''>
            <LandingSection />
            <Suspense>
                <NewsSection />
            </Suspense>
            <AboutSection />
        </main>
    );
}
