import { FirebaseOptions, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getStorage } from 'firebase/storage';

const firebaseConfig: FirebaseOptions = {
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

export const app = initializeApp(firebaseConfig);
export const appDb = getFirestore(app);
export const appStorage = getStorage(app);
