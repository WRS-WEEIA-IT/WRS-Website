import { GraduationCap } from 'lucide-react';

const FirstDegreeHeaderSection = async () => {
    return (
        <div
            className='w-full text-center py-8 mb-8 relative overflow-hidden'
            style={{ background: 'linear-gradient(270deg, #3b82f6, #8b5cf6)' }}
        >
            <div className='absolute inset-0 bg-gradient-to-r from-green-400 via-yellow-300 to-green-400 bg-[size:200%] animate-background-pulse' />
            <div className='relative z-10'>
                <h1 className='text-4xl md:text-5xl font-bold text-white mb-2'>Studia 1. stopnia</h1>
                <div className='flex items-center justify-center text-white'>
                    <GraduationCap className='mr-2' />
                    <p className='text-lg md:text-xl'>Rozpocznij swoją akademicką podróż</p>
                </div>
            </div>
        </div>
    );
};

export default FirstDegreeHeaderSection;
