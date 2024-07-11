import { collection, getDocs } from 'firebase/firestore/lite';
import { appDb } from '@/lib/config/firebase';
import Course from '@/lib/interfaces/firebase/Course';
import CourseCard from '@/components/course-card/CourseCard';

const getCourses = async (): Promise<Course[]> => {
    const coursesCollection = collection(appDb, 'courses');
    const coursesSnapshot = await getDocs(coursesCollection);
    const coursesList = coursesSnapshot.docs.map((doc) => doc.data());
    return coursesList as Course[];
};

const CoursesPage = async () => {
    const courses: Course[] = await getCourses();

    return (
        <div className='site-container'>
            {courses.map((course) => (
                <CourseCard key={course.title} {...course} />
            ))}
        </div>
    );
};

export default CoursesPage;
