import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const NewsFeedLoading = () => {
  return (
    <>
      {[0, 0, 0].map((news, index) => (
        <Card key={index} className='w-full hover:border-primary hover:drop-shadow-[0_0_15px_rgba(67,133,243,0.2)] duration-200'>
          <CardHeader>
            <div className='flex justify-between animate-pulse'>
              <CardTitle className='animate-pulse bg-secondary rounded-sm'>
                <span className='invisible'>Example</span>
              </CardTitle>
              <Badge variant='secondary' className='animate-pulse'>
                <span className='invisible font-bold'>01.12.2023</span>
              </Badge>
            </div>
            <CardDescription className='animate-pulse bg-secondary rounded-sm w-min whitespace-nowrap'>
              <span className='invisible'>Example description blabla</span>
            </CardDescription>
          </CardHeader>
          <CardContent className='animate-pulse'>
            <div className='w-full aspect-video bg-secondary rounded-lg' />
          </CardContent>
          <CardFooter className='flex justify-between items-end'>
            <Button variant='default' className='flex-1'>
              Zobacz więcej
            </Button>
          </CardFooter>
        </Card>
      ))}
    </>
  );
};

export default NewsFeedLoading;
