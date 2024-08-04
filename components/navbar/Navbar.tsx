'use client';

import Link from 'next/link';
import { ModeToggle } from '../ui/modeToggle';
import SearchBar from '../search-bar/SearchBar';
import { usePathname } from 'next/navigation';
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet';
import { Separator } from '../ui/separator';
import { Menu } from 'lucide-react';
import { Button } from '../ui/button';
import { useEffect, useState } from 'react';
import { navbarRoutes } from '@/lib/routes/routes';
import { searchBarGroups } from '@/lib/routes/routes';

const Navbar = () => {
    const currentPath = usePathname();
    const [currentWidth, setCurrentWidth] = useState(1000);
    const mdWidth = 768;

    useEffect(() => {
        setCurrentWidth(window.innerWidth);
        window.addEventListener('resize', () => {
            setCurrentWidth(window.innerWidth);
        });
    }, []);

    return (
        <div className='flex py-6 site-container sticky top-0 border-b backdrop-blur-md align-middle gap-4 z-30'>
            <nav className='flex gap-4 lg:gap-6 items-center whitespace-nowrap text-sm md:text-sm lg:text-base'>
                <Link href='/' className='font-extrabold transition-colors text-hover'>
                    WRS WEEIA
                </Link>
                {currentWidth >= mdWidth && (
                    <div className='hidden md:flex md:gap-4 lg:gap-6 '>
                        {navbarRoutes.map((route) => (
                            <Link
                                key={route.path}
                                href={route.path}
                                className={`font-medium text-muted-foreground transition-colors text-hover ${
                                    currentPath === route.path ? 'text-primary' : ''
                                }`}
                            >
                                {route.title}
                            </Link>
                        ))}
                    </div>
                )}
            </nav>
            <div className='ml-auto'>
                <SearchBar searchBarCategories={searchBarGroups} />
            </div>
            <ModeToggle />
            {currentWidth < mdWidth && (
                <nav>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant='outline' size='icon'>
                                <Menu className='h-[1.2rem] w-[1.2rem]' />
                            </Button>
                        </SheetTrigger>
                        <SheetContent className='flex flex-col gap-4'>
                            <SheetHeader>
                                <SheetClose asChild>
                                    <Link href='/'>
                                        <SheetTitle className='text-start'>WRS WEEIA</SheetTitle>
                                    </Link>
                                </SheetClose>
                            </SheetHeader>
                            <Separator />
                            <div className='flex flex-col gap-3'>
                                {navbarRoutes.map((route) => (
                                    <SheetClose asChild key={route.title}>
                                        <Link
                                            href={route.path}
                                            className={`font-medium text-muted-foreground transition-colors text-hover ${
                                                currentPath === route.path ? 'text-primary' : ''
                                            }`}
                                        >
                                            {route.title}
                                        </Link>
                                    </SheetClose>
                                ))}
                            </div>
                        </SheetContent>
                    </Sheet>
                </nav>
            )}
        </div>
    );
};

export default Navbar;
