import { CourseCardSkeleton } from '@/components/course-card/CourseCard';
import MastersGrid from '@/components/masters-grid/MastersGrid';
import { Suspense } from 'react';

const MastersGridSection = async () => {
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
                <MastersGrid />
            </Suspense>
        </div>
    );
};

export default MastersGridSection;
