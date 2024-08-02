import { appDb } from '@/lib/config/firebase';
import { addDoc, collection } from '@firebase/firestore/lite';

export async function POST(req: Request, res: Response) {
    try {
        console.info(JSON.stringify(req));
        const requestBody = await req.json();
        const { collectionName, data } = requestBody;
        console.info(collectionName, data);

        const collectionRef = collection(appDb, collectionName);
        const docRef = await addDoc(collectionRef, data);

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
