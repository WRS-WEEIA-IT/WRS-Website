import { Button } from '../ui/button';
import Link from 'next/link';
import { appStorage } from '@/lib/config/firebase';
import { getDownloadURL, ref } from 'firebase/storage';
import ImageAsync from '../image-async/ImageAsync';
import { Suspense } from 'react';
import Event from '@/lib/interfaces/firebase/Event';

const getEventImage = async (imageStoragePath: string) => {
    const imageRef = ref(appStorage, imageStoragePath);
    const imageUrl = await getDownloadURL(imageRef);
    return imageUrl;
};

const EventCard = async ({ title, description, storagePath, forwardPath, buttonColor, icon }: Event) => {
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
                    <Link href={forwardPath}>
                        <Button className={`whitespace-nowrap w-min mt-2 bg-${buttonColor}-500 hover:bg-${buttonColor}-600 mb-4`}>
                            Sprawdź galerię!
                        </Button>
                    </Link>
                </div>
                <Suspense fallback={<div className=' aspect-video bg-secondary rounded-lg animate-pulse' />}>
                    <ImageAsync
                        src={getEventImage(storagePath)}
                        alt={title}
                        width={500}
                        height={500}
                        className='rounded-lg aspect-video object-cover'
                    />
                </Suspense>
            </div>
        </>
    );
};

export default EventCard;
