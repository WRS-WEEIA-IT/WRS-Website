import NewsFeed from '@/components/news-feed/NewsFeed';
import NewsFeedLoading from '@/components/news-feed/NewsFeedLoading';
import { Suspense } from 'react';

const NewsSection = async () => {
  return (
    <section id='news' className='pt-12 flex flex-col gap-6 px-52'>
      <div>
        <p className='text-2xl font-semibold leading-none tracking-tight'>Aktualności</p>
        <p className='text-sm text-muted-foreground'>Bądź na bieżąco!</p>
      </div>
      <div className='flex gap-6 items-stretch'>
        <Suspense fallback={<NewsFeedLoading />}>
          <NewsFeed />
        </Suspense>
      </div>
    </section>
  );
};

export default NewsSection;
