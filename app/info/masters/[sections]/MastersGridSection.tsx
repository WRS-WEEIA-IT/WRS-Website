import { collection, getDocs } from 'firebase/firestore/lite';
import { appDb } from '@/lib/config/firebase';
import Course from '@/lib/interfaces/firebase/Course';
import CourseCard from '@/components/course-card/CourseCard';

const getMasters = async (): Promise<Course[]> => {
    const mastersCollection = collection(appDb, 'masters');
    const mastersSnapshot = await getDocs(mastersCollection);
    const mastersList = mastersSnapshot.docs.map((doc) => doc.data());
    return mastersList as Course[];
};

const MastersGridSection = async () => {
    const courses: Course[] = await getMasters();
    courses.sort((a, b) => a.title.localeCompare(b.title));

    return (
        <div className='site-container grid grid-cols-1 lg:grid-cols-2 gap-4 my-12'>
            {courses.map((course) => (
                <CourseCard key={course.title} {...course} />
            ))}
        </div>
    );
};

export default MastersGridSection;
