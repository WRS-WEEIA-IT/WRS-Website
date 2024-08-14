import { getFacebookPosts } from '@/lib/utils';
import { FacebookCard } from '../ui/FacebookCard';
import ErrorIndicator from '../error-indicator/ErrorIndicator';

const NewsFeed = async () => {
    try {
        const { posts } = await getFacebookPosts(null, 2);

        return (
            <>
                {posts.map((post) => (
                    <FacebookCard {...post} key={post.id} />
                ))}
            </>
        );
    } catch (error: any) {
        return <ErrorIndicator />;
    }
};

export default NewsFeed;
