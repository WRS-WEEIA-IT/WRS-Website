import NewsFeed from '@/components/news-feed/NewsFeed';
import { getFacebookPosts } from '@/lib/utils';

const NewsSection = async () => {
    const { posts } = await getFacebookPosts(null, 2);

    return (
        <section id='news' className='flex flex-col gap-6 site-container'>
            <NewsFeed posts={posts} />
        </section>
    );
};

export default NewsSection;
