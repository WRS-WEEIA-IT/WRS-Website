'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '@/components/ui/card';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Course from '@/lib/interfaces/firebase/Course';

const CourseCard = ({ title, titleIcon, description, courseDescriptionLink, coursePlanLink, buttonColor }: Course) => {
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
        <Card className='grid h-full grid-flow-row-dense '>
            <CardHeader>
                <CardTitle>
                    {titleIcon} {title}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription>
                    <div
                        ref={contentRef}
                        className='relative overflow-hidden transition-[max-height] duration-300 ease-in-out'
                        style={{ maxHeight: height }}
                    >
                        <blockquote className='border-l-2 pl-6 italic'>{description}</blockquote>
                        {!isExpanded && description.length > maxLength && (
                            <div className='absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-background to-transparent' />
                        )}
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
                <Button className={`bg-${buttonColor}-500 hover:bg-${buttonColor}-600 h-min`}>
                    <Link href={courseDescriptionLink} target='_blank'>
                        Pełny opis kierunku
                    </Link>
                </Button>
                <Button className={`bg-${buttonColor}-500 hover:bg-${buttonColor}-600 h-min`}>
                    <Link href={coursePlanLink} target='_blank'>
                        Szczegółowy plan studiów
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    );
};

export default CourseCard;
