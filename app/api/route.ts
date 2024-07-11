import { appDb } from '@/lib/config/firebase';
import { addDoc, collection } from '@firebase/firestore/lite';

export async function POST(req: Request, res: Response) {
    try {
        const requestBody = await req.json();
        const { collectionName, data } = requestBody;
        console.log(collectionName, data);

        const collectionRef = collection(appDb, collectionName);
        const docRef = await addDoc(collectionRef, data);

        return new Response(JSON.stringify(docRef), {
            status: 200,
        });
    } catch (error: any) {
        return new Response(error.message, {
            status: 500,
        });
    }
}
