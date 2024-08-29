import NewsFeed from '@/components/news-feed/NewsFeed';
import { Card } from '@/components/ui/card';
import { FacebookCardSkeleton } from '@/components/ui/FacebookCard';
import Link from 'next/link';
import { Suspense } from 'react';

const NewsSection = async () => {
    return (
        <section id='news' className='flex flex-col gap-6 site-container'>
            <div className='flex flex-col gap-8 md:site-container'>
                <div>
                    <h2 className='text-3xl font-semibold leading-none tracking-tight mb-3'>Aktualności</h2>
                    <p className='text-lg text-muted-foreground'>Bądź na bieżąco!</p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-1 gap-8'>
                    <Suspense fallback={<FacebookCardSkeleton />}>
                        <NewsFeed />
                    </Suspense>
                </div>

                <Card className='items-center justify-center inline-flex card-hover shadow-xl'>
                    <Link href='/news' className='whitespace-nowrap p-6 text-lg'>
                        Zobacz wszystkie aktualności
                    </Link>
                </Card>
            </div>
        </section>
    );
};

export default NewsSection;
