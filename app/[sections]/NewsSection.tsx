import { Badge } from '@/components/ui/badge';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

const NewsSection = () => {
  return (
    <section id='news' className='pt-12 flex flex-col gap-6 px-52'>
      <div>
        <p className='text-2xl font-semibold leading-none tracking-tight'>Aktualności</p>
        <p className='text-sm text-muted-foreground'>Bądź na bieżąco!</p>
      </div>
      <div className='flex gap-6 items-stretch'>
        <Card className='w-1/3 hover:border-primary hover:drop-shadow-[0_0_15px_rgba(67,133,243,0.2)] duration-200'>
          <CardHeader>
            <div className='flex justify-between'>
              <CardTitle>ŁDI 2023</CardTitle>
              <Badge variant='outline'>11.11.2023</Badge>
            </div>
            <CardDescription>Już wkrótce Łódzkie Dni Informatyki!</CardDescription>
          </CardHeader>
          <CardContent>
            <Image src='/ldi.jpg' width={500} height={300} alt='ldi' className='min-h-[250px] object-cover rounded-lg' />
          </CardContent>
          <CardFooter className='flex justify-between items-end'>
            <Button variant='default' className='flex-1'>
              Zobacz więcej
            </Button>
          </CardFooter>
        </Card>
        <Card className='w-1/3 hover:border-primary hover:drop-shadow-[0_0_15px_rgba(67,133,243,0.2)] duration-200'>
          <CardHeader>
            <div className='flex justify-between'>
              <CardTitle>Wtyczka</CardTitle>
              <Badge variant='outline'>11.11.2023</Badge>
            </div>
            <CardDescription>A może wybierzesz się z nami na wyjazd?</CardDescription>
          </CardHeader>
          <CardContent>
            <Image src='/wtyczka.jpg' width={500} height={300} alt='ldi' className='min-h-[250px] object-cover rounded-lg' />
          </CardContent>
          <CardFooter className='flex justify-between items-end'>
            <Button variant='default' className='flex-1'>
              Zobacz więcej
            </Button>
          </CardFooter>
        </Card>
        <Card className='w-1/3 hover:border-primary hover:drop-shadow-[0_0_15px_rgba(67,133,243,0.2)] duration-200'>
          <CardHeader>
            <div className='flex justify-between'>
              <CardTitle>Akcja rekrutacja</CardTitle>
              <Badge variant='outline'>11.11.2023</Badge>
            </div>
            <CardDescription>Dołącz do nas!</CardDescription>
          </CardHeader>
          <CardContent>
            <Image src='/akcjarekrutacja.jpg' width={500} height={300} alt='ldi' className='min-h-[250px] object-cover rounded-lg' />
          </CardContent>
          <CardFooter>
            <Button variant='default' className='flex-1'>
              Zobacz więcej
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default NewsSection;
