'use client';

import Lottie from 'lottie-react';
import errorAnimation from '@/public/Puzzle.json';
import { Button } from '../ui/button';

const ErrorIndicator = () => {
    return (
        <>
            <Lottie animationData={errorAnimation} loop={true} />
            <p className='text-center text-4xl'>Wystąpił błąd po stronie serwera :(</p>
            <p className='text-center text-lg'>
                Strona jest wciąż rozwijana, pomóż mi w tym{' '}
                <Button variant='link' className='text-lg'>
                    Zgłaszając błąd
                </Button>
            </p>
        </>
    );
};

export default ErrorIndicator;
