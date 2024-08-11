import Link from 'next/link';
import { FacebookCard } from '@/components/ui/FacebookCard';
import { getFacebookPosts } from '@/lib/utils';

const NewsPage = async ({ searchParams }: { searchParams: { page?: string; cursor?: string } }) => {
    const page = Number(searchParams.page) || 1;
    const cursor = searchParams.cursor || null;
    const postsPerPage = 10;

    const { posts, nextCursor, totalCount } = await getFacebookPosts(postsPerPage, cursor);
    const totalPages = Math.ceil(totalCount / postsPerPage);

    return (
        <div className='news-page site-container'>
            <h1>Latest News</h1>
            <div className='news-list site-container flex flex-col gap-4'>
                {posts.map((post, index) => (
                    <FacebookCard key={index} {...post} />
                ))}
            </div>
            <div className='pagination'>
                {page > 1 && <Link href={`/news?page=${page - 1}`}>Previous</Link>}
                <span>
                    Page {page} of {totalPages}
                </span>
                {nextCursor && <Link href={`/news?page=${page + 1}&cursor=${nextCursor}`}>Next</Link>}
            </div>
        </div>
    );
};

export default NewsPage;
