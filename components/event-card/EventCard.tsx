import { Button } from '../ui/button';
import { appStorage } from '@/lib/config/firebase';
import { getDownloadURL, ref } from 'firebase/storage';
import ImageAsync from '../image-async/ImageAsync';
import { Suspense } from 'react';
import Event from '@/lib/interfaces/firebase/Event';
import { Facebook, Globe } from 'lucide-react';

const getEventImage = async (imageStoragePath: string) => {
    const imageRef = ref(appStorage, imageStoragePath);
    const imageUrl = await getDownloadURL(imageRef);
    return imageUrl;
};

const EventCard = async ({ title, description, storagePath, facebookPath, websitePath, buttonColor, icon }: Event) => {
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
                    <div className='flex gap-4 md-gap-4 mt-4 mb-4 md:mb-0'>
                        <a href={facebookPath} className='w-full md:w-min'>
                            <Button
                                className={`h-12 whitespace-nowrap w-full md:w-min bg-${buttonColor}-500 hover:bg-${buttonColor}-600 flex gap-4`}
                            >
                                <div>
                                    <Facebook />
                                </div>
                                <p className='hidden md:block'>Wydarzenie</p>
                            </Button>
                        </a>
                        {websitePath && (
                            <a href={websitePath} className='w-full md:w-min'>
                                <Button
                                    className={`h-12 whitespace-nowrap w-full md:w-min  bg-${buttonColor}-500 hover:bg-${buttonColor}-600 flex gap-4`}
                                >
                                    <div>
                                        <Globe />
                                    </div>
                                    <p className='hidden md:block'>Strona</p>
                                </Button>
                            </a>
                        )}
                    </div>
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
