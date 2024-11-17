import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import ManagementCard from '@/lib/interfaces/firebase/ManagementCard';

export default function ManagemetCard(
    { imageUrl, name, position }: ManagementCard = {
        imageUrl: '/placeholder-user.jpg',
        name: 'Jane Doe',
        position: 'Software Engineer',
    },
) {
    return (
        <Card className='w-full max-w-sm mx-auto'>
            <CardContent className='flex flex-col items-center p-6'>
                <Avatar className='w-32 h-32 mb-4 bg-fuchsia-100'>
                    <AvatarImage src={imageUrl} alt={name} />
                    <AvatarFallback>
                        {name
                            .split(' ')
                            .map((n) => n[0])
                            .join('')}
                    </AvatarFallback>
                </Avatar>
                <h2 className='text-xl font-bold text-center mb-1'>{name}</h2>
                <p className='text-muted-foreground text-center'>{position}</p>
            </CardContent>
        </Card>
    );
}
