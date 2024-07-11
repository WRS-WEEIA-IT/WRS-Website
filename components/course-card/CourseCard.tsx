import Link from 'next/link';
import { Button } from '../ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '../ui/card';
import Course from '@/lib/interfaces/firebase/Course';
import getTailwindColor from '@/lib/helpers/getTailwindColor';

const CourseCard = ({ title, titleIcon, description, courseDescriptionLink, coursePlanLink, buttonColor }: Course) => {
    const tailwindButtonColor = getTailwindColor(buttonColor, '500');

    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    {titleIcon} {title}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription>
                    <blockquote className='border-l-2 pl-6 italic'>{description}</blockquote>
                </CardDescription>
                <CardDescription className='pt-4 text-end'>
                    ~ Źródło: <a href={courseDescriptionLink}>Politechnika Łódzka</a>
                </CardDescription>
            </CardContent>
            <CardFooter className='flex gap-4'>
                <Button className={`${tailwindButtonColor}`}>
                    <Link href={courseDescriptionLink} target='_blank'>
                        Pełny opis kierunku
                    </Link>
                </Button>
                <Button className={`${tailwindButtonColor}`}>
                    <Link href={coursePlanLink} target='_blank'>
                        Szczegółowy plan studiów
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    );
};

export default CourseCard;
