import { Separator } from '@/components/ui/separator';

const JoinUsSection = () => {
    return (
        <div className='site-container py-12'>
            <div className='site-container'>
                <p className='bg-gradient-to-r from-yellow-500 via-fuchsia-500 to-yellow-500 bg-[size:200%] animate-background-pulse text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center text-transparent bg-clip-text pb-2'>
                    A może do nas dołączysz?
                </p>
                <div className='grid grid-cols-10 justify-center mt-12'>
                    <p className='flex-1 text-center text-lg md:text-xl col-span-4'>Akcja rekrutacja</p>
                    <Separator orientation='vertical' className='justify-self-center col-span-2' />
                    <p className='flex-1 text-center text-lg md:text-xl col-span-4'>Cotygodniowe spotkania</p>
                    <Separator className='my-6 col-span-10' />
                    <p className='flex-1 text-center text-sm col-span-4'>
                        Dołącz do nas oficjalnie przez @akcję rekrutację, wydarzenie specjalnie przygotowane dla nowych WRSowiczów
                    </p>
                    <Separator orientation='vertical' className='justify-self-center md:mx-12 col-span-2' />
                    <p className='flex-1 text-center text-sm col-span-4'>
                        Ale nikt nie zabrania ci przyjść do nas na spotkanie i spróbować się wdrożyć samemu 😉
                    </p>
                </div>
            </div>
        </div>
    );
};

export default JoinUsSection;
