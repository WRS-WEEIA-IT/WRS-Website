import Link from 'next/link';
import { Button } from '../../components/ui/button';
import { FadeText } from '@/components/magicui/fade-text';

const AboutSection = () => {
    return (
        <section
            id='about'
            className='py-12 flex flex-col bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 bg-[size:200%] gap-6 my-24 border-y animate-background-pulse'
        >
            <div className='flex flex-col items-center gap-6 site-container text-background dark:text-foreground text-center'>
                <FadeText
                    className='text-4xl font-semibold'
                    text='Kim tak właściwie jesteśmy?'
                    direction='left'
                    framerProps={{
                        show: { transition: { delay: 0.1 } },
                    }}
                />
                <FadeText
                    className='text-lg text-center md:w-1/2'
                    text='Jesteśmy grupą studentów, którzy postanowili połączyć siły i wspólnie działać na rzecz studentów Wydziału
                    Elektrotechniki, Elektroniki, Informatyki i Automatyki.'
                    direction='left'
                    framerProps={{
                        show: { transition: { delay: 0.1 } },
                    }}
                />
                <FadeText
                    className='text-lg text-center md:w-1/2'
                    text='Naszym celem jest wspieranie studentów w trakcie studiów, a także zapewnienie im rozrywki i możliwości rozwoju 🚀'
                    direction='left'
                    framerProps={{
                        show: { transition: { delay: 0.1 } },
                    }}
                />
                <Link href='/about-us'>
                    <Button variant='outline' className='w-max text-foreground'>
                        Dowiedz się więcej o nas 📖
                    </Button>
                </Link>
            </div>
        </section>
    );
};

export default AboutSection;
