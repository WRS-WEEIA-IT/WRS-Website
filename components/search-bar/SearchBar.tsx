'use client';

import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from '@/components/ui/command';
import { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import SearchBarProps from '@/lib/interfaces/SearchBarProps';
import { useRouter } from 'next/navigation';
import React from 'react';
import Course from '@/lib/interfaces/firebase/Course';
import { getCourses, getMasters } from '@/lib/utils';
import { DoorOpen, GraduationCap } from 'lucide-react';

const SearchBar = ({ searchBarCategories }: SearchBarProps) => {
    const [open, setOpen] = useState(false);
    const [osButtonText, setOsButtonText] = useState<'⌘' | 'CTRL +' | ''>('');
    const [courses, setCourses] = useState<any>();
    const [masters, setMasters] = useState<any>();
    const router = useRouter();

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };

        document.addEventListener('keydown', down);
        return () => document.removeEventListener('keydown', down);
    }, []);

    useEffect(() => {
        if (navigator) {
            const isMac = navigator.platform.indexOf('Mac') != -1 ? '⌘' : 'CTRL +';
            setOsButtonText(isMac);
        }
    }, []);

    useEffect(() => {
        async function setCoursesNavigation() {
            const fetchedCourses = await getCourses();
            const fetchedMasters = await getMasters();

            setCourses(
                <CommandGroup heading='Kierunki'>
                    {fetchedCourses.map((course: Course) => (
                        <CommandItem
                            key={course.title}
                            onSelect={() => {
                                setOpen(false);
                                router.push(`/info/courses/${course.title}`);
                            }}
                            className='cursor-pointer'
                        >
                            <DoorOpen className='mr-3' />
                            <span>{course.title}</span>
                        </CommandItem>
                    ))}
                </CommandGroup>,
            );

            setMasters(
                <CommandGroup heading='Studia magisterskie'>
                    {fetchedMasters.map((course: Course) => (
                        <CommandItem
                            key={course.title}
                            onSelect={() => {
                                setOpen(false);
                                router.push(`/info/masters/${course.title}`);
                            }}
                            className='cursor-pointer'
                        >
                            <GraduationCap className='mr-3' />
                            <span>{course.title}</span>
                        </CommandItem>
                    ))}
                </CommandGroup>,
            );
        }
        setCoursesNavigation();
    }, []);

    const handleSelect = (selectedSearchItem: string) => {
        const selectedItemDetails = searchBarCategories
            .map((category) => category.items.find((item) => item.itemName.toLowerCase() === selectedSearchItem))
            .filter(Boolean)[0];
        if (!selectedItemDetails) return;
        setOpen(false);
        router.push(selectedItemDetails.itemPath);
    };

    const buttonText = <span className=''>{osButtonText} K</span>;

    return (
        <>
            <Button
                variant='outline'
                className='text-muted-foreground flex flex-row gap-4 md:gap-8 lg:gap-12'
                onClick={() => setOpen(true)}
            >
                Szukaj...
                <kbd className='hidden md:inline-flex whitespace-nowrap pointer-events-none h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100'>
                    {buttonText}
                </kbd>
            </Button>
            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput placeholder='Wyszukaj...' />
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    {searchBarCategories.map((category, index) => (
                        <React.Fragment key={category.groupName || index}>
                            <CommandGroup heading={category.groupName}>
                                {category.items.map((categoryItem) => (
                                    <CommandItem
                                        key={categoryItem.itemName}
                                        onSelect={() => handleSelect(categoryItem.itemName.toLowerCase())}
                                        className='cursor-pointer'
                                    >
                                        <category.Icon className='mr-3' />
                                        <span>{categoryItem.itemName}</span>
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                            {index < searchBarCategories.length - 1 && <CommandSeparator />}
                        </React.Fragment>
                    ))}
                    {courses}
                    {masters}
                </CommandList>
            </CommandDialog>
        </>
    );
};

export default SearchBar;
