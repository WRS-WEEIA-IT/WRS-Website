import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

export default function Home() {
  return (
    <main className=''>
      <section id='landing-text' className='flex flex-col items-center justify-between gap-6 py-24 px-52'>
        <p className='text-4xl'>Połączeni studiowaniem.</p>
        <p className='text-6xl'>
          💪 Rozwijani <span className='text-primary drop-shadow-[0_0_45px_rgba(67,133,243,1)]'>WRS</span>em 💪
        </p>
      </section>
      <section id='news' className='pt-12 flex flex-col gap-6 px-52'>
        <div>
          <p className='text-2xl font-semibold leading-none tracking-tight'>Aktualności</p>
          <p className='text-sm text-muted-foreground'>Bądź na bieżąco!</p>
        </div>
        <div className='flex gap-6 items-stretch'>
          <Card className='w-1/3 hover:border-primary hover:drop-shadow-[0_0_15px_rgba(67,133,243,0.2)] duration-200'>
            <CardHeader>
              <CardTitle>ŁDI 2023</CardTitle>
              <CardDescription>Już wkrótce Łódzkie Dni Informatyki!</CardDescription>
            </CardHeader>
            <CardContent>
              <Image src='/ldi.jpg' width={500} height={300} alt='ldi' className='min-h-[250px] object-cover rounded-lg' />
            </CardContent>
            <CardFooter className='justify-between'>
              <Button variant='default'>Zobacz więcej</Button>
              <Badge variant='secondary'>11.11.2023</Badge>
            </CardFooter>
          </Card>
          <Card className='w-1/3 hover:border-primary hover:drop-shadow-[0_0_15px_rgba(67,133,243,0.2)] duration-200'>
            <CardHeader>
              <CardTitle>Wtyczka</CardTitle>
              <CardDescription>A może wybierzesz się z nami na wyjazd?</CardDescription>
            </CardHeader>
            <CardContent>
              <Image src='/wtyczka.jpg' width={500} height={300} alt='ldi' className='min-h-[250px] object-cover rounded-lg' />
            </CardContent>
            <CardFooter className='justify-between'>
              <Button variant='default'>Zobacz więcej</Button>
              <Badge variant='secondary'>11.11.2023</Badge>
            </CardFooter>
          </Card>
          <Card className='w-1/3 hover:border-primary hover:drop-shadow-[0_0_15px_rgba(67,133,243,0.2)] duration-200'>
            <CardHeader>
              <CardTitle>Akcja rekrutacja</CardTitle>
              <CardDescription>Dołącz do nas!</CardDescription>
            </CardHeader>
            <CardContent>
              <Image src='/akcjarekrutacja.jpg' width={500} height={300} alt='ldi' className='min-h-[250px] object-cover rounded-lg' />
            </CardContent>
            <CardFooter className='justify-between'>
              <Button variant='default'>Zobacz więcej</Button>
              <Badge variant='secondary'>11.11.2023</Badge>
            </CardFooter>
          </Card>
        </div>
      </section>
      <section id='about' className='py-12 flex flex-col bg-gradient-to-r from-purple-500 to-pink-500 gap-6 my-24 border-y'>
        <div className='flex flex-col items-center gap-6 px-52 text-background dark:text-foreground'>
          <p className='text-4xl font-semibold'>Kim tak właściwie jesteśmy?</p>
          <p className='text-lg text-center w-1/2'>
            Jesteśmy grupą studentów, którzy postanowili połączyć siły i wspólnie działać na rzecz studentów Wydziału Elektrotechniki,
            Elektroniki, Informatyki i Automatyki.
          </p>
          <p className='text-lg text-center w-1/2'>
            Naszym celem jest wspieranie studentów w trakcie studiów, a także zapewnienie im rozrywki i możliwości rozwoju 🚀
          </p>
          <Button variant='outline' className='w-max text-foreground'>
            Dowiedz się więcej o nas 📖
          </Button>
        </div>
      </section>
    </main>
  );
}
