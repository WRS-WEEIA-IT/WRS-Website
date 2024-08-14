import { CourseCardSkeleton } from '@/components/course-card/CourseCard';
import CourseGrid from '@/components/course-grid/CourseGrid';
import { Suspense } from 'react';

const CoursesGridSection = () => {
    return (
        <div className='site-container grid grid-cols-1 lg:grid-cols-2 gap-4 my-12'>
            <Suspense
                fallback={
                    <>
                        <CourseCardSkeleton />
                        <CourseCardSkeleton />
                    </>
                }
            >
                <CourseGrid />
            </Suspense>
        </div>
    );
};

export default CoursesGridSection;
