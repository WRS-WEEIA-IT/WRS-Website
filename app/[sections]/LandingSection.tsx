const LandingSection = () => {
    return (
        <div className='bg-gradient-to-r from-yellow-500 via-fuchsia-500 to-pink-500 bg-[size:200%] animate-background-pulse py-10 lg:py-20 mb-12 lg:mb-12'>
            <section
                id='landing-text'
                className='text-background dark:text-foreground flex flex-col items-center justify-between gap-3 md:gap-6 site-container text-center'
            >
                <p className='text-2xl md:text-4xl lg:text-5xl xl:text-5xl'>Połączeni studiowaniem.</p>
                <p className='text-3xl md:text-5xl lg:text-6xl xl:text-7xl'>
                    <span className='hidden md:inline-block'>💪 </span>
                    {' Rozwijani'} <span className=' text-yellow-300 drop-shadow-[0_0_45px_rgba(200,200,0,1)]'>WRS</span>
                    <span className='whitespace-nowrap'>em 💪</span>
                </p>
            </section>
        </div>
    );
};

export default LandingSection;
