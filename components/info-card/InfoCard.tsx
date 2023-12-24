import InfoCardConfig from '@/lib/interfaces/InfoCardConfig';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { colorVariants } from '@/lib/constants/cardColors';

const InfoCard = ({ title, description, color, Icon }: InfoCardConfig) => {
    return (
        <Card className={`${colorVariants[color].border} ${colorVariants[color].dropShadow}`}>
            <CardHeader>
                <CardTitle className='text-center text-base md:text-lg lg:text-2x'>{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription className='text-center text-xs md:text-sm'>{description}</CardDescription>
            </CardContent>
            <CardFooter className='flex items-center justify-center'>
                <div className='flex items-center justify-center'>
                    <div className={`w-16 h-16 rounded-full ${colorVariants[color].bg} flex items-center justify-center`}>
                        <Icon className='size-10' />
                    </div>
                </div>
            </CardFooter>
        </Card>
    );
};

export default InfoCard;
