'use client';

import { FacebookCard } from '@/components/ui/FacebookCard';
import { getFacebookPosts } from '@/lib/utils';
import { useEffect, useState } from 'react';
import FacebookPost from '@/lib/interfaces/firebase/FacebookPost';
import { DocumentData } from 'firebase/firestore/lite';
import { Card } from '@/components/ui/card';

const NewsPage = () => {
    const [lastDocument, setLastDocument] = useState<DocumentData | null>(null);
    const [facebookPosts, setFacebookPosts] = useState<FacebookPost[]>([]);
    const [loading, setLoading] = useState(false);
    const postsPerPage = 5;

    const loadPosts = async (isInitial: boolean = false) => {
        setLoading(true);
        try {
            const { posts, lastDoc } = await getFacebookPosts(isInitial ? null : lastDocument, postsPerPage);
            if (isInitial) {
                setFacebookPosts(posts);
            } else {
                setFacebookPosts((prevPosts) => [...prevPosts, ...posts]);
            }
            setLastDocument(lastDoc);
        } catch (error) {
            console.error('Error loading posts:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadPosts(true);
    }, []);

    const handleShowMore = () => {
        loadPosts();
    };

    return (
        <div>
            <div className='bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 bg-[size:200%] animate-background-pulse text-background dark:text-foreground'>
                <div className='site-container py-12'>
                    <p className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center'>Aktualności 📰</p>
                </div>
            </div>
            <div className='news-page site-container mt-12'>
                <div className='news-list site-container flex flex-col gap-8'>
                    {facebookPosts.map((post, index) => (
                        <FacebookCard key={index} {...post} />
                    ))}
                    {lastDocument && (
                        <Card className='items-center justify-center inline-flex card-hover mb-12'>
                            <div
                                className={`p-6 w-full text-center cursor-pointer ${
                                    loading ? ' text-muted-foreground' : 'text-foreground'
                                }`}
                                onClick={handleShowMore}
                            >
                                {loading ? 'Ładuję...' : 'Pokaż więcej'}
                            </div>
                        </Card>
                    )}
                    {!lastDocument && facebookPosts.length > 0 && (
                        <Card className='items-center justify-center inline-flex  mb-12'>
                            <div className='p-6 text-muted-foreground'>To już wszystkie aktualności!</div>
                        </Card>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NewsPage;
