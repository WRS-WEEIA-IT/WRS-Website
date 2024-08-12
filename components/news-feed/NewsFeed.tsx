import { FacebookCard } from '../ui/FacebookCard';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import FacebookPost from '@/lib/interfaces/firebase/FacebookPost';

const NewsFeed = ({ posts }: { posts: FacebookPost[] }) => {
    return (
        <section id='news' className='flex flex-col gap-8 md:site-container'>
            <div>
                <h2 className='text-3xl font-semibold leading-none tracking-tight mb-3'>Aktualności</h2>
                <p className='text-lg text-muted-foreground'>Bądź na bieżąco!</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-1 gap-8'>
                {posts.map((post) => (
                    <FacebookCard {...post} key={post.id} />
                ))}
            </div>

            <Card className='items-center justify-center inline-flex card-hover'>
                <Link href='/news' className='whitespace-nowrap p-6 text-lg'>
                    Zobacz wszystkie aktualności
                </Link>
            </Card>
        </section>
    );
};

export default NewsFeed;
