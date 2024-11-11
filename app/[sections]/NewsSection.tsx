import { FadeText } from '@/components/magicui/fade-text';
import NewsFeed from '@/components/news-feed/NewsFeed';
import { Card } from '@/components/ui/card';
import { FacebookCardSkeleton } from '@/components/ui/FacebookCard';
import Link from 'next/link';
import { Suspense } from 'react';

const NewsSection = async () => {
    return (
        <section id='news' className='flex flex-col gap-6 site-container'>
            <div className='flex flex-col gap-8 readable-width'>
                <div>
                    <FadeText
                        className='text-3xl font-semibold leading-none tracking-tight mb-3'
                        text='Aktualności'
                        direction='left'
                        framerProps={{
                            show: { transition: { delay: 0.1 } },
                        }}
                    />
                    <FadeText
                        className='text-lg text-muted-foreground'
                        text='Bądź na bieżąco!'
                        direction='left'
                        framerProps={{
                            show: { transition: { delay: 0.1 } },
                        }}
                    />
                </div>

                <div className='grid grid-cols-1 gap-8'>
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
