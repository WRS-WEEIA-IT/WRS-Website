import Course from '@/lib/interfaces/firebase/Course';
import { CourseCard } from '@/components/course-card/CourseCard';
import { getCourses } from '@/lib/utils';
import ErrorIndicator from '../error-indicator/ErrorIndicator';

const CourseGrid = async () => {
    try {
        await new Promise((resolve) => setTimeout(resolve, 10000));
        const courses: Course[] = await getCourses();
        courses.sort((a, b) => a.title.localeCompare(b.title));

        return (
            <>
                {courses.map((course) => (
                    <CourseCard key={course.title} {...course} />
                ))}
            </>
        );
    } catch (error: any) {
        return <ErrorIndicator />;
    }
};

export default CourseGrid;
