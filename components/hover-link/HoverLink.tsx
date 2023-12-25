import Link from 'next/link';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '../ui/hover-card';
import { Button } from '../ui/button';

const HoverLink = ({ path, linkText, content }: { path: string; linkText: string; content: string }) => {
    return (
        <HoverCard>
            <HoverCardTrigger asChild>
                <Link href={path}>
                    <Button variant='link' className='p-0 text-primary h-min'>
                        @{linkText}
                    </Button>
                </Link>
            </HoverCardTrigger>
            <HoverCardContent>
                <p className='text-start'>{content}</p>
            </HoverCardContent>
        </HoverCard>
    );
};

export default HoverLink;
