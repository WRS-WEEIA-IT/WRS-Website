import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { collection, query, orderBy, limit, startAfter, getDocs, DocumentData } from 'firebase/firestore/lite';
import { appDb } from './config/firebase';
import FacebookPost from './interfaces/firebase/FacebookPost';
import Course from './interfaces/firebase/Course';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export async function getFacebookPosts(
    lastDocument: DocumentData | null,
    postsPerPage: number,
): Promise<{ posts: FacebookPost[]; lastDoc: DocumentData }> {
    const newsCollection = collection(appDb, 'news');

    const q = lastDocument
        ? query(newsCollection, orderBy('timeCreated', 'desc'), startAfter(lastDocument), limit(postsPerPage))
        : query(newsCollection, orderBy('timeCreated', 'desc'), limit(postsPerPage));

    const newsSnapshot = await getDocs(q);
    const posts = newsSnapshot.docs.map((doc) => {
        const data = doc.data();
        return {
            ...data,
            timeCreated: new Date(data.timeCreated),
        };
    }) as FacebookPost[];

    return { posts, lastDoc: newsSnapshot.docs[newsSnapshot.docs.length - 1] };
}

export const getCourses = async (): Promise<Course[]> => {
    const coursesCollection = collection(appDb, 'courses');
    const coursesSnapshot = await getDocs(coursesCollection);
    const coursesList = coursesSnapshot.docs.map((doc) => doc.data());
    return coursesList as Course[];
};

export const getMasters = async (): Promise<Course[]> => {
    const mastersCollection = collection(appDb, 'masters');
    const mastersSnapshot = await getDocs(mastersCollection);
    const mastersList = mastersSnapshot.docs.map((doc) => doc.data());
    return mastersList as Course[];
};
