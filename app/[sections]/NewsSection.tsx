import { FacebookCard } from '@/components/FacebookCard';
import NewsFeed from '@/components/news-feed/NewsFeed';
import NewsFeedLoading from '@/components/news-feed/NewsFeedLoading';
import { Card } from '@/components/ui/card';
import { appDb } from '@/lib/config/firebase';
import FacebookPost from '@/lib/interfaces/firebase/FacebookPost';
import { collection, getDocs } from 'firebase/firestore/lite';
import Link from 'next/link';
import { Suspense } from 'react';

const getFacebookPosts = async (): Promise<FacebookPost[]> => {
    const newsCollection = collection(appDb, 'news');
    const newsSnapshot = await getDocs(newsCollection);
    const newsList = newsSnapshot.docs.map((doc) => doc.data());
    newsList.forEach((news) => {
        news.timeCreated = new Date(news.timeCreated);
    });
    newsList.sort((a, b) => b.timeCreated - a.timeCreated);
    return newsList as FacebookPost[];
};

const NewsSection = async () => {
    const facebookPosts = await getFacebookPosts();

    return (
        <section id='news' className='flex flex-col gap-6 site-container'>
            <div>
                <p className='text-2xl font-semibold leading-none tracking-tight mb-2'>Aktualności</p>
                <p className='text-sm text-muted-foreground'>Bądź na bieżąco!</p>
            </div>
            {facebookPosts.map((post) => (
                <FacebookCard key={post.id} {...post} />
            ))}
            <div className='grid grid-cols-1 md:grid-cols-2 xl:flex gap-4'>
                <Suspense fallback={<NewsFeedLoading />}>
                    <NewsFeed />
                </Suspense>
                <Card className='items-center justify-center inline-flex card-hover'>
                    <Link href='/' className='whitespace-nowrap xl:rotate-90 p-10 md:p-0'>
                        Zobacz wszystko
                    </Link>
                </Card>
            </div>
        </section>
    );
};

export default NewsSection;
