import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';
import EventCardProps from '@/lib/interfaces/EventCardProps';
import getTailwindColor from '@/lib/utils/getTailwindColor';
import { appStorage } from '@/lib/config/firebase';
import { getDownloadURL, ref } from 'firebase/storage';
import ImageAsync from '../image-async/ImageAsync';
import { Suspense } from 'react';

const getEventImage = async (imageDbUrl: string) => {
    const imageRef = ref(appStorage, `events/${imageDbUrl}`);
    console.log(imageRef);
    const imageUrl = await getDownloadURL(imageRef);
    console.log(imageUrl);

    await new Promise((resolve) => setTimeout(resolve, 5000));

    return imageUrl;
};

const EventCard = async ({ title, description, imageUrl, path, buttonColor, icon }: EventCardProps) => {
    const tailwindColor = getTailwindColor(buttonColor);

    return (
        <>
            <span id={title} className='mb-24' />
            <div className='md:grid grid-cols-2 gap-4 md:gap-16'>
                <div className='flex flex-col gap-2 justify-between'>
                    <div className='flex flex-col gap-2 justify-between'>
                        <p className='text-xl md:text-2xl'>{`${title}${icon ? ' ' + icon : ''}`}</p>
                        {description?.map((paragraph, index) => (
                            <p className='text-sm md:text-base text-muted-foreground' key={index}>
                                {paragraph}
                            </p>
                        ))}
                    </div>
                    <Link href={path}>
                        <Button className={`whitespace-nowrap w-min mt-2 ${tailwindColor} mb-4`}>Sprawdź galerię!</Button>
                    </Link>
                </div>
                <Suspense fallback={<div className=' aspect-video bg-secondary rounded-lg animate-pulse' />}>
                    <ImageAsync src={getEventImage(imageUrl)} alt={title} width={500} height={500} className='rounded-lg aspect-video' />
                </Suspense>
            </div>
        </>
    );
};

export default EventCard;
