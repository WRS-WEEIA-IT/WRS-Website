import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { Button } from '../../components/ui/button';
import News from '@/utils/interfaces/News';
import format from 'date-fns/format';

const NewsCard = ({ news }: { news: News }) => {
  return (
    <Card className='w-1/3 hover:border-primary hover:drop-shadow-[0_0_15px_rgba(67,133,243,0.2)] duration-200'>
      <CardHeader>
        <div className='flex justify-between'>
          <CardTitle>{news.title}</CardTitle>
          <Badge variant='outline'>{format(news.date, 'dd.MM.yyyy')}</Badge>
        </div>
        <CardDescription>{news.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Image src={news.imageUrl} width={500} height={300} alt={news.title} className='min-h-[250px] object-cover rounded-lg' />
      </CardContent>
      <CardFooter className='flex justify-between items-end'>
        <Button variant='default' className='flex-1'>
          Zobacz więcej
        </Button>
      </CardFooter>
    </Card>
  );
};

export default NewsCard;
