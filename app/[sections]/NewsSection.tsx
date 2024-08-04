import { FacebookCard } from '@/components/FacebookCard';
import NewsFeedV2 from '@/components/news-feed-v2/NewsFeedV2';
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
            <NewsFeedV2 facebookPosts={facebookPosts} />
        </section>
    );
};

export default NewsSection;
