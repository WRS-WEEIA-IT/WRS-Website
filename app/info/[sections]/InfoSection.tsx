import InfoCard from '@/components/info-card/InfoCard';
import { infoCardRoutes } from '@/lib/routes/routes';

const InfoSection = () => {
    return (
        <div className='site-container py-12'>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-4 grid-flow-dense'>
                {infoCardRoutes.map((route) => (
                    <InfoCard
                        key={route.path}
                        title={route.title}
                        description={route.description}
                        color={route.color}
                        Icon={route.Icon}
                        path={route.path}
                    />
                ))}
            </div>
        </div>
    );
};

export default InfoSection;
