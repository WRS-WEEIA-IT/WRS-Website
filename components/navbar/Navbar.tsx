import Link from 'next/link';
import { ModeToggle } from '../ui/modeToggle';
import SearchBar from '../search-bar/SearchBar';

const Navbar = () => {
  return (
    <div className='flex py-6 site-container sticky top-0 border-b backdrop-blur-md align-middle gap-4 z-30'>
      <nav className='flex gap-4 lg:gap-6 items-center whitespace-nowrap text-sm md:text-sm lg:text-base'>
        <Link href='/' className='font-extrabold transition-colors text-hover'>
          WRS WEEIA
        </Link>
        <div className='hidden md:flex md:gap-4 lg:gap-6 '>
          <Link href='/info' className='font-medium text-muted-foreground transition-colors text-hover'>
            Dla studentów
          </Link>
          <Link href='/about-us' className='font-medium text-muted-foreground transition-colors text-hover'>
            O nas
          </Link>
          <Link href='/events' className='font-medium text-muted-foreground transition-colors text-hover'>
            Nasze wydarzenia
          </Link>
        </div>
      </nav>
      <div className='ml-auto'>
        <SearchBar />
      </div>
      <ModeToggle />
    </div>
  );
};

export default Navbar;
