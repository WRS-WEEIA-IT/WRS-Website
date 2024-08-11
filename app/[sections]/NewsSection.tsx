import NewsFeed from '@/components/news-feed/NewsFeed';
import { appDb } from '@/lib/config/firebase';
import FacebookPost from '@/lib/interfaces/firebase/FacebookPost';
import { collection, getDocs, limit, orderBy, query } from 'firebase/firestore/lite';

const getFacebookPosts = async (): Promise<FacebookPost[]> => {
    const newsCollection = collection(appDb, 'news');
    const q = query(newsCollection, orderBy('timeCreated', 'desc'), limit(10));
    const newsSnapshot = await getDocs(q);
    const newsList = newsSnapshot.docs.map((doc) => {
        const data = doc.data();
        return {
            ...data,
            timeCreated: new Date(data.timeCreated),
        };
    });
    return newsList as FacebookPost[];
};

const NewsSection = async () => {
    const facebookPosts = await getFacebookPosts();

    return (
        <section id='news' className='flex flex-col gap-6 site-container'>
            <NewsFeed facebookPosts={facebookPosts} />
        </section>
    );
};

export default NewsSection;
