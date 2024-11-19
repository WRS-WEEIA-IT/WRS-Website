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
                    text='Szukasz czegoś więcej? Jesteśmy grupą studentów, którzy wiedzą, że studia to nie tylko nauka.'
                    direction='left'
                    framerProps={{
                        show: { transition: { delay: 0.1 } },
                    }}
                />
                <FadeText
                    className='text-lg text-center md:w-1/2'
                    text='Razem tworzymy przestrzeń, gdzie możesz rozwijać swoje pasje, poznać nowych ludzi i po prostu dobrze się bawić. Integracje, warsztaty, projekty - u nas zawsze coś się dzieje! 🚀'
                    direction='left'
                    framerProps={{
                        show: { transition: { delay: 0.1 } },
                    }}
                />
                <Link href='/about-us'>
                    <Button variant='outline' className='w-max text-foreground'>
                        Dowiedz się więcej 📖
                    </Button>
                </Link>
            </div>
        </section>
    );
};

export default AboutSection;
