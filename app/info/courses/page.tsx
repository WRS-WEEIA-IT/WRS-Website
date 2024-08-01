import CoursesGridSection from './[sections]/CoursesGridSection';
import FirstDegreeHeaderSection from './[sections]/FirstDegreeHeaderSection';

const CoursesPage = async () => {
    return (
        <div>
            <FirstDegreeHeaderSection />
            <CoursesGridSection />
        </div>
    );
};

export default CoursesPage;
