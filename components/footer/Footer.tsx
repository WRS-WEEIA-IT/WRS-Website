import { Facebook, Mail, Phone, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className='footer site-container py-12 border-t flex flex-col gap-4'>
            <div className='flex gap-4 text-muted-foreground'>
                <div className='w-[24px] h-[24px]'>
                    <Mail />
                </div>
                <p>eeia@samorzad.p.lodz.pl</p>
            </div>
            <div className='flex gap-4 text-muted-foreground'>
                <div className='w-[24px] h-[24px]'>
                    <Phone />
                </div>
                <p>(+48) 42 631 24 98</p>
            </div>
            <a href='https://www.facebook.com/weeia' className='flex gap-4 text-muted-foreground '>
                <div className='w-[24px] h-[24px]'>
                    <Facebook />
                </div>
                <p>Wydział Elektrotechniki Elektroniki Informatyki i Automatyki</p>
            </a>
            <a href='https://www.instagram.com/weeia_/' className='flex gap-4 text-muted-foreground '>
                <div className='w-[24px] h-[24px]'>
                    <Instagram />
                </div>
                <p>weeia_</p>
            </a>
        </footer>
    );
};

export default Footer;
