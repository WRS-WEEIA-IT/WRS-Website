import { Facebook, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className='footer px-52 py-12 border-t flex flex-col gap-4'>
      <div className='flex gap-4 text-muted-foreground'>
        <Mail />
        <p>eeia@samorzad.p.lodz.pl</p>
      </div>
      <div className='flex gap-4 text-muted-foreground'>
        <Phone />
        <p>(+48) 123 123 123</p>
      </div>
      <a href='https://www.facebook.com/weeia'>
        <div className='flex gap-4 text-muted-foreground'>
          <Facebook />
          <p>Wydział Elektrotechniki Elektroniki Informatyki i Automatyki</p>
        </div>
      </a>
    </footer>
  );
};

export default Footer;
