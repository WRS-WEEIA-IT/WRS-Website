import Link from 'next/link';
import { Button } from '@/components/ui/button';

const SavoirVivreSection = () => {
    return (
        <section
            id='savoir-vivre'
            className='py-12 flex flex-col bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 bg-[size:200%] gap-6 my-24 border-y animate-background-pulse'
        >
            <div className='flex flex-col items-center gap-6 site-container text-background dark:text-foreground text-center'>
                <p className='text-4xl font-semibold'>Savoir Vivre</p>
                <p className='text-lg text-center md:w-1/2'>
                    Tutaj znajdziesz informacje o savoir vivre. Dowiedz się, jak zachowywać się w różnych sytuacjach społecznych i
                    akademickich.
                </p>
                <p className='text-lg text-center md:w-1/2'>
                    Nasze zasady savoir vivre pomogą Ci w budowaniu pozytywnych relacji i tworzeniu przyjaznej atmosfery na uczelni.
                </p>
                <Link href='/api/savoir-vivre'>
                    <Button variant='outline' className='w-max text-foreground'>
                        Pobierz Vademecum Kultury Studenta 📚
                    </Button>
                </Link>
            </div>
        </section>
    );
};

export default SavoirVivreSection;
