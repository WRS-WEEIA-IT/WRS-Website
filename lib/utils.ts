import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { collection, query, orderBy, limit, startAfter, getDocs, DocumentData } from 'firebase/firestore/lite';
import { appDb } from './config/firebase';
import FacebookPost from './interfaces/firebase/FacebookPost';

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
