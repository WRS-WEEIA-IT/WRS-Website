import InfoCard from '@/components/info-card/InfoCard';
import { infoCardRoutes } from '@/lib/routes/routes';

const InfoSection = () => {
    return (
        <div className='site-container py-12'>
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
