import NewsFeed from '@/components/news-feed/NewsFeed';
import { appDb } from '@/lib/config/firebase';
import FacebookPost from '@/lib/interfaces/firebase/FacebookPost';
import { collection, getDocs } from 'firebase/firestore/lite';

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
            <NewsFeed facebookPosts={facebookPosts} />
        </section>
    );
};

export default NewsSection;
