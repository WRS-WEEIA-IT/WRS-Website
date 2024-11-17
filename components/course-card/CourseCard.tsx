'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '@/components/ui/card';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Course from '@/lib/interfaces/firebase/Course';

export const CourseCard = ({ title, titleIcon, description, courseDescriptionLink, coursePlanLink, buttonColor }: Course) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [height, setHeight] = useState('0px');
    const contentRef = useRef<HTMLDivElement>(null);
    const maxLength = 150;

    useEffect(() => {
        if (contentRef.current) {
            setHeight(isExpanded ? `${contentRef.current.scrollHeight}px` : '100px');
        }
    }, [isExpanded]);

    const toggleExpand = () => setIsExpanded(!isExpanded);

    return (
        <Card className='grid h-full grid-flow-row-dense' id={title}>
            <CardHeader className='flex flex-row items-baseline gap-2'>
                <CardTitle>{titleIcon}</CardTitle>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription>
                    <div ref={contentRef} className='relative overflow-hidden transition-[max-height] duration-300 ease-in-out' style={{ maxHeight: height }}>
                        <blockquote className='border-l-2 pl-6 italic'>{description}</blockquote>
                        {!isExpanded && description.length > maxLength && <div className='absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-background to-transparent' />}
                    </div>
                    {description.length > maxLength && (
                        <Button variant='ghost' size='sm' onClick={toggleExpand} className='mt-2 transition-all duration-300 ease-in-out'>
                            {isExpanded ? (
                                <>
                                    Pokaż mniej <ChevronUp className='ml-2 h-4 w-4 transition-transform duration-300' />
                                </>
                            ) : (
                                <>
                                    Pokaż więcej <ChevronDown className='ml-2 h-4 w-4 transition-transform duration-300' />
                                </>
                            )}
                        </Button>
                    )}
                </CardDescription>
                <CardDescription className='pt-4 text-end'>
                    ~ Źródło: <a href={courseDescriptionLink}>Politechnika Łódzka</a>
                </CardDescription>
            </CardContent>
            <CardFooter className='flex gap-4'>
                <Link href={courseDescriptionLink} target='_blank'>
                    <Button className={`bg-${buttonColor}-500 hover:bg-${buttonColor}-600 h-min w-full`}>Pełny opis kierunku</Button>
                </Link>
                <Link href={coursePlanLink} target='_blank'>
                    <Button className={`bg-${buttonColor}-500 hover:bg-${buttonColor}-600 h-min w-full`}>Szczegółowy plan studiów</Button>
                </Link>
            </CardFooter>
        </Card>
    );
};

export const CourseCardSkeleton = () => {
    return (
        <Card className='grid h-full grid-flow-row-dense'>
            <CardHeader className='flex flex-row items-baseline gap-2'>
                <CardTitle>
                    <div className='animate-pulse bg-gray-200 h-6 w-6 rounded-full' />
                </CardTitle>
                <CardTitle>
                    <div className='animate-pulse bg-gray-200 h-6 w-24 rounded-full' />
                </CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription>
                    <div className='animate-pulse bg-gray-200 h-4 w-full rounded-md mb-2' />
                    <div className='animate-pulse bg-gray-200 h-4 w-full rounded-md mb-2' />
                    <div className='animate-pulse bg-gray-200 h-4 w-full rounded-md mb-2' />
                </CardDescription>
                <CardDescription className='pt-4 text-end'>
                    <div className='animate-pulse bg-gray-200 h-4 w-24 rounded-md' />
                </CardDescription>
            </CardContent>
            <CardFooter className='flex gap-4'>
                <Button className={`bg-gray-200 hover:bg-gray-300 w-24`}>
                    <div className='animate-pulse bg-gray-200 h-4 w-full rounded-md' />
                </Button>
                <Button className={`bg-gray-200 hover:bg-gray-300 w-24`}>
                    <div className='animate-pulse bg-gray-200 h-4 w-full rounded-md' />
                </Button>
            </CardFooter>
        </Card>
    );
};
