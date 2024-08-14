import Course from '@/lib/interfaces/firebase/Course';
import CourseCard from '@/components/course-card/CourseCard';
import { getCourses } from '@/lib/utils';

const CoursesGridSection = async () => {
    const courses: Course[] = await getCourses();
    courses.sort((a, b) => a.title.localeCompare(b.title));

    return (
        <div className='site-container grid grid-cols-1 lg:grid-cols-2 gap-4 my-12'>
            {courses.map((course) => (
                <CourseCard key={course.title} {...course} />
            ))}
        </div>
    );
};

export default CoursesGridSection;
