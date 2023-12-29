import InfoCard from '@/components/info-card/InfoCard';
import { infoCardRoutes } from '@/lib/routes/routes';

const InfoSection = () => {
    return (
        <div className='site-container py-12'>
            <div className='site-container text-center'>
                <p className='text-2xl font-semibold mb-3'>Najważniejsze informacje</p>
                <p className='text-muted-foreground mb-2 text-xs md:text-sm'>
                    Nie wiesz jak napisać maila do dziekana? A może nawet nie wiesz kto to jest dziekan?
                    <br /> Lub nawet nie zdążyłeś jeszcze się zapisać na studia?
                </p>
                <p className='bg-[size:200%] animate-background-pulse mb-12 text-sm md:text-base bg-gradient-to-r from-violet-500 to-pink-500 text-transparent bg-clip-text'>
                    Nie martw się, <br /> wszystko znajdziesz tutaj! 👇
                </p>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-max'>
                {infoCardRoutes.map((route) => (
                    <InfoCard
                        key={route.path}
                        title={route.title}
                        path={route.path}
                        description={route.description}
                        color={route.color}
                        Icon={route.Icon}
                    />
                ))}
            </div>
        </div>
    );
};

export default InfoSection;
