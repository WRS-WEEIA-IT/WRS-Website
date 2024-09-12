import WordPullUp from '@/components/magicui/word-pull-up';

const LandingSection = () => {
    return (
        <div className='bg-gradient-to-r from-yellow-500 via-fuchsia-500 to-pink-500 bg-[size:200%] animate-background-pulse py-10 lg:py-20 mb-12 lg:mb-12'>
            <section
                id='landing-text'
                className='text-background dark:text-foreground flex flex-col items-center justify-between gap-3 md:gap-6 site-container text-center'
            >
                <WordPullUp className='text-2xl md:text-4xl lg:text-5xl xl:text-5xl' words='There is no WEEIA' />
                <WordPullUp
                    className='text-2xl md:text-4xl lg:text-5xl xl:text-5xl'
                    words='without'
                    framerProps={{
                        hidden: { y: 20, opacity: 0 },
                        show: { y: 0, opacity: 1, transition: { delay: 0.8 } },
                    }}
                />
                <WordPullUp
                    framerProps={{
                        hidden: { y: 20, opacity: 0 },
                        show: { y: 0, opacity: 1, transition: { delay: 1.0 } },
                    }}
                    className='text-yellow-300 drop-shadow-[0_0_45px_rgba(200,200,0,1)] text-4xl md:text-6xl lg:text-7xl xl:text-8xl'
                    words='💪WE💪'
                />
            </section>
        </div>
    );
};

export default LandingSection;
