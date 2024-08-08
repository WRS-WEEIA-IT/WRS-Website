import { appDb } from '@/lib/config/firebase';
import { setDoc, doc } from '@firebase/firestore/lite';

export async function POST(req: Request, res: Response) {
    try {
        const requestBody = await req.json();
        const data = requestBody;
        console.info(data);
        const postId = data.id;

        const docRef = doc(appDb, 'news', postId);
        await setDoc(docRef, data);

        return new Response(JSON.stringify(docRef), {
            status: 200,
        });
    } catch (error: any) {
        console.error(error.message);
        return new Response(error.message, {
            status: 500,
        });
    }
}
