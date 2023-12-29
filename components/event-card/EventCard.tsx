import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';
import EventCardProps from '@/lib/interfaces/EventCardProps';
import getTailwindColor from '@/lib/utils/getTailwindColor';

const EventCard = ({ title, description, imageUrl, path, buttonColor, icon }: EventCardProps) => {
    const tailwindColor = getTailwindColor(buttonColor);
    return (
        <>
            <span id={title} className='mb-24' />
            <div className='md:grid grid-cols-2 gap-4 md:gap-16'>
                <div className='flex flex-col gap-2 justify-between'>
                    <div className='flex flex-col gap-2 justify-between'>
                        <p className='text-xl md:text-2xl'>{`${title}${icon ? ' ' + icon : ''}`}</p>
                        {description.map((paragraph, index) => (
                            <p className='text-sm md:text-base text-muted-foreground' key={index}>
                                {paragraph}
                            </p>
                        ))}
                    </div>
                    <Link href={path}>
                        <Button className={`whitespace-nowrap w-min mt-2 ${tailwindColor} mb-4`}>Sprawdź galerię!</Button>
                    </Link>
                </div>
                <Image src={imageUrl} width={400} height={300} alt={''} className='w-full aspect-video object-cover rounded-md' />
            </div>
        </>
    );
};

export default EventCard;
