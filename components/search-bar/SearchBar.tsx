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

const SearchBar = ({ searchBarCategories }: SearchBarProps) => {
    const [open, setOpen] = useState(false);
    const [osButtonText, setOsButtonText] = useState<'⌘' | 'CTRL +' | ''>('');
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
                    {searchBarCategories.map((category) => (
                        <>
                            <CommandGroup key={category.groupName} heading={category.groupName}>
                                {category.items.map((categoryItem) => (
                                    <CommandItem key={categoryItem.itemName} onSelect={handleSelect} className='cursor-pointer'>
                                        <category.Icon className='mr-3' />
                                        <span>{categoryItem.itemName}</span>
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                            <CommandSeparator />
                        </>
                    ))}
                </CommandList>
            </CommandDialog>
        </>
    );
};

export default SearchBar;
