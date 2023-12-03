const LandingSection = () => {
  return (
    <section id='landing-text' className='flex flex-col items-center justify-between gap-6 py-24 site-container text-center'>
      <p className='text-3xl md:text-4xl lg:text-5xl xl:text-5xl'>Połączeni studiowaniem.</p>
      <p className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl'>
        <span className='hidden md:inline-block'>💪 </span>
        {' Rozwijani'} <span className='text-primary drop-shadow-[0_0_45px_rgba(67,133,243,1)]'>WRS</span>
        <span className='whitespace-nowrap'>em 💪</span>
      </p>
    </section>
  );
};

export default LandingSection;
