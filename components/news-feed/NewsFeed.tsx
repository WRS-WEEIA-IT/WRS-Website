import News from '@/utils/interfaces/News';
import NewsCard from '../news-card/NewsCard';

const NewsFeed = async () => {
    const news: News[] = [
        {
            title: 'ŁDI 2023',
            date: new Date(),
            description: 'Już wkrótce Łódzkie Dni Informatyki!',
            imageUrl: '/ldi.jpg',
        },
        {
            title: 'Wtyczka',
            date: new Date(),
            description: 'A może wybierzesz się z nami na wyjazd?',
            imageUrl: '/wtyczka.jpg',
        },
        {
            title: 'Akcja rekrutacja',
            date: new Date(),
            description: 'Dołącz do nas!',
            imageUrl: '/akcjarekrutacja.jpg',
        },
    ];

    const fetchedNews: News[] = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(news);
        }, 2000);
    });

    return (
        <>
            {fetchedNews.map((news) => (
                <NewsCard news={news} key={news.title} />
            ))}
        </>
    );
};

export default NewsFeed;
