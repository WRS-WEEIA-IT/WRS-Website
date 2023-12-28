import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';
import EventCardProps from '@/lib/interfaces/EventCardProps';

const EventCard = ({ title, description, imageUrl, path }: EventCardProps) => {
    return (
        <div className='grid grid-cols-2 gap-4 md:gap-16 mb-12'>
            <div className='flex flex-col gap-2 justify-between'>
                <div className='flex flex-col gap-2 justify-between'>
                    <p className='text-xl md:text-2xl'>{title}</p>
                    {description.map((paragraph, index) => (
                        <p className='text-sm md:text-base text-muted-foreground' key={index}>
                            {paragraph}
                        </p>
                    ))}
                </div>
                <Link href={path}>
                    <Button className='whitespace-nowrap w-min mt-2'>Sprawdź galerię!</Button>
                </Link>
            </div>
            <Image src={imageUrl} width={400} height={300} alt={''} className='w-full aspect-video rounded-md' />
        </div>
    );
};

export default EventCard;
