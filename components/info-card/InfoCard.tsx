import InfoCardConfig from '@/utils/interfaces/InfoCardConfig';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';

const InfoCard = ({ title, description, color, Icon }: InfoCardConfig) => {
    const colorVariants = {
        blue: {
            bg: 'bg-blue-500',
            border: 'hover:border-blue-500',
            shadow: 'shadow-blue-500',
            dropShadow: 'duration-200 hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]',
        },
        green: {
            bg: 'bg-green-500',
            border: 'hover:border-green-500',
            shadow: 'shadow-green-500',
            dropShadow: 'duration-200 hover:drop-shadow-[0_0_15px_rgba(0,255,0,0.5)]',
        },
        red: {
            bg: 'bg-red-500',
            border: 'hover:border-red-500',
            shadow: 'shadow-red-500',
            dropShadow: 'duration-200 hover:drop-shadow-[0_0_15px_rgba(255,0,0,0.5)]',
        },
        yellow: {
            bg: 'bg-yellow-500',
            border: 'hover:border-yellow-500',
            shadow: 'shadow-yellow-500',
            dropShadow: 'duration-200 hover:drop-shadow-[0_0_15px_rgba(255,255,0,0.5)]',
        },
        purple: {
            bg: 'bg-purple-500',
            border: 'hover:border-purple-500',
            shadow: 'shadow-purple-500',
            dropShadow: 'duration-200 hover:drop-shadow-[0_0_15px_rgba(255,0,255,0.5)]',
        },
        pink: {
            bg: 'bg-pink-500',
            border: 'hover:border-pink-500',
            shadow: 'shadow-pink-500',
            dropShadow: 'duration-200 hover:drop-shadow-[0_0_15px_rgba(255,0,255,0.5)]',
        },
        orange: {
            bg: 'bg-orange-500',
            border: 'hover:border-orange-500',
            shadow: 'shadow-orange-500',
            dropShadow: 'duration-200 hover:drop-shadow-[0_0_15px_rgba(255,165,0,0.5)]',
        },
        magenta: {
            bg: 'bg-magenta-500',
            border: 'hover:border-magenta-500',
            shadow: 'shadow-magenta-500',
            dropShadow: 'duration-200 hover:drop-shadow-[0_0_15px_rgba(255,0,255,0.5)]',
        },
        teal: {
            bg: 'bg-teal-500',
            border: 'hover:border-teal-500',
            shadow: 'shadow-teal-500',
            dropShadow: 'duration-200 hover:drop-shadow-[0_0_15px_rgba(0,128,128,0.5)]',
        },
        cyan: {
            bg: 'bg-cyan-500',
            border: 'hover:border-cyan-500',
            shadow: 'shadow-cyan-500',
            dropShadow: 'duration-200 hover:drop-shadow-[0_0_15px_rgba(0,255,255,0.5)]',
        },
    };

    return (
        <Card className={`${colorVariants[color].border} ${colorVariants[color].dropShadow}`}>
            <CardHeader>
                <CardTitle className='text-center'>{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription className='text-center'>{description}</CardDescription>
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
