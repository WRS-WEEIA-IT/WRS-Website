import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { Button } from '../ui/button';
import News from '@/lib/interfaces/News';
import format from 'date-fns/format';

const NewsCard = ({ news }: { news: News }) => {
    return (
        <Card className='w-full card-hover relative'>
            <CardHeader className=' max-h-36'>
                <div className='flex justify-between'>
                    <CardTitle className='text-base md:text-lg lg:text-2xl'>{news.title}</CardTitle>
                    <Badge variant='outline' className='h-min'>
                        {format(news.date, 'dd.MM.yyyy')}
                    </Badge>
                </div>
                <CardDescription className='text-xs md:text-sm'>{news.description}</CardDescription>
            </CardHeader>
            <CardContent className=' mb-16'>
                <Image
                    src={news.imageUrl}
                    width={300}
                    height={300}
                    alt={news.title}
                    className='aspect-video object-cover rounded-lg w-full'
                />
            </CardContent>
            <CardFooter className=' absolute bottom-0 w-full'>
                <Button variant='default' className='flex-1'>
                    Zobacz więcej
                </Button>
            </CardFooter>
        </Card>
    );
};

export default NewsCard;
