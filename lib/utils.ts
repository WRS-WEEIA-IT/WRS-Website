import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import {
    collection,
    query,
    orderBy,
    limit,
    startAfter,
    getDocs,
    getCount,
    DocumentData,
    doc,
    getDoc,
    Query,
} from 'firebase/firestore/lite';
import { appDb } from './config/firebase';
import FacebookPost from './interfaces/firebase/FacebookPost';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export async function getFacebookPosts(postsPerPage: number, cursor: string | null) {
    const newsCollection = collection(appDb, 'news');
    const totalCountSnapshot = await getCount(newsCollection);
    const totalCount = totalCountSnapshot.data().count;

    let q: Query<DocumentData> = query(newsCollection, orderBy('timeCreated', 'desc'), limit(postsPerPage + 1));

    if (cursor) {
        const cursorDoc = await getDoc(doc(appDb, 'news', cursor));
        if (cursorDoc.exists()) {
            q = query(q, startAfter(cursorDoc));
        }
    }

    const newsSnapshot = await getDocs(q);
    const posts = newsSnapshot.docs.slice(0, postsPerPage).map((doc) => {
        const data = doc.data();
        return {
            id: doc.id,
            ...data,
            timeCreated: new Date(data.timeCreated),
        };
    }) as FacebookPost[];

    const nextCursor = newsSnapshot.docs.length > postsPerPage ? newsSnapshot.docs[postsPerPage - 1].id : null;

    return { posts, nextCursor, totalCount };
}
