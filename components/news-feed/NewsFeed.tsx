'use client';

import React, { useState, useEffect } from 'react';
import { FacebookCard } from '../ui/FacebookCard';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import FacebookPost from '@/lib/interfaces/firebase/FacebookPost';
import { ArrowDown } from 'lucide-react';

const POSTS_PER_PAGE = 2;

const NewsFeed = ({ facebookPosts }: { facebookPosts: FacebookPost[] }) => {
    const [posts, setPosts] = useState<FacebookPost[]>([]);
    const [visiblePosts, setVisiblePosts] = useState(POSTS_PER_PAGE);

    useEffect(() => {
        const postsArray = Array.isArray(facebookPosts) ? facebookPosts : [];
        if (postsArray.length === 0) return;

        const sortedPosts = postsArray.sort((a, b) => (b.timeCreated as any) - (a.timeCreated as any));

        setPosts(sortedPosts);
    }, [facebookPosts]);

    const loadMore = () => {
        setVisiblePosts((prevVisible) => prevVisible + POSTS_PER_PAGE);
    };

    return (
        <section id='news' className='flex flex-col gap-8 md:site-container'>
            <div>
                <h2 className='text-3xl font-semibold leading-none tracking-tight mb-3'>Aktualności</h2>
                <p className='text-lg text-muted-foreground'>Bądź na bieżąco!</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-1 gap-8'>
                {posts.slice(0, visiblePosts).map((post) => (
                    <FacebookCard {...post} text={post.text} key={post.id} />
                ))}
            </div>

            {visiblePosts < posts.length && (
                <div className='mx-auto'>
                    <Button variant='ghost' onClick={loadMore} className='flex gap-2'>
                        Załaduj więcej
                        <ArrowDown />
                    </Button>
                </div>
            )}

            <Card className='items-center justify-center inline-flex card-hover mt-8'>
                <Link href='/' className='whitespace-nowrap p-6 text-lg'>
                    Zobacz wszystkie aktualności
                </Link>
            </Card>
        </section>
    );
};

export default NewsFeed;
