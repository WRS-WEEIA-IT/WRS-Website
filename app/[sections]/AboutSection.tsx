import Link from 'next/link';
import { Button } from '../../components/ui/button';

const AboutSection = () => {
    return (
        <section
            id='about'
            className='py-12 flex flex-col bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 bg-[size:200%] gap-6 my-24 border-y animate-background-pulse'
        >
            <div className='flex flex-col items-center gap-6 site-container text-background dark:text-foreground text-center'>
                <p className='text-4xl font-semibold'>Kim tak właściwie jesteśmy?</p>
                <p className='text-lg text-center md:w-1/2'>
                    Jesteśmy grupą studentów, którzy postanowili połączyć siły i wspólnie działać na rzecz studentów Wydziału
                    Elektrotechniki, Elektroniki, Informatyki i Automatyki.
                </p>
                <p className='text-lg text-center md:w-1/2'>
                    Naszym celem jest wspieranie studentów w trakcie studiów, a także zapewnienie im rozrywki i możliwości rozwoju 🚀
                </p>
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
