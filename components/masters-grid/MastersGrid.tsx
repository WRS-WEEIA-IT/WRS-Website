import Course from '@/lib/interfaces/firebase/Course';
import { CourseCard } from '@/components/course-card/CourseCard';
import { getMasters } from '@/lib/utils';
import ErrorIndicator from '../error-indicator/ErrorIndicator';

const MastersGrid = async () => {
    try {
        const masters: Course[] = await getMasters();
        masters.sort((a, b) => a.title.localeCompare(b.title));

        return (
            <>
                {masters.map((masterCourse) => (
                    <CourseCard key={masterCourse.title} {...masterCourse} />
                ))}
            </>
        );
    } catch (error: any) {
        return <ErrorIndicator />;
    }
};

export default MastersGrid;
