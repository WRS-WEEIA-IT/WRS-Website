import Link from "next/link";
import { Input } from "../ui/input";
import { ModeToggle } from "../ui/modeToggle";

const Navbar = () => {
  return (
    <div className='flex py-6 px-52 sticky top-0 border-b backdrop-blur-md align-middle gap-4'>
      <nav className='flex space-x-4 lg:space-x-6 items-center'>
        <Link
          href='/'
          className='text-lg font-extrabold transition-colors hover:text-primary'
        >
          WRS WEEIA
        </Link>
        <Link
          href='/info'
          className='text-lg font-medium transition-colors hover:text-primary'
        >
          Dla studentów
        </Link>
        <Link
          href='/about-us'
          className='text-lg font-medium text-muted-foreground transition-colors hover:text-primary'
        >
          O nas
        </Link>
        <Link
          href='/events'
          className='text-lg font-medium text-muted-foreground transition-colors hover:text-primary'
        >
          Nasze wydarzenia
        </Link>
      </nav>
      <div className='ml-auto'>
        <Input type='text' placeholder='Szukaj...' />
      </div>
      <ModeToggle />
    </div>
  );
};

export default Navbar;
