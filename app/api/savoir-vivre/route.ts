import { getDownloadURL, ref } from 'firebase/storage';
import { appDb, appStorage } from '@/lib/config/firebase';
import { doc, getDoc } from 'firebase/firestore/lite';
import { NextResponse } from 'next/server';
import StatusCodes from 'http-status-codes';

export async function GET() {
    try {
        const documentRef = doc(appDb, 'documents', 'savoir-vivre');
        const document = await getDoc(documentRef);
        const documentData = document.data();

        if (!documentData) {
            return NextResponse.json({ error: 'Document not found' }, { status: StatusCodes.NOT_FOUND });
        }

        const documentStoragePath = documentData.storagePath;
        const documentRefStorage = ref(appStorage, documentStoragePath);
        const documentUrl = await getDownloadURL(documentRefStorage);

        // Redirect the client to the Firebase Storage URL
        return NextResponse.redirect(documentUrl);
    } catch (error) {
        console.error('Error fetching PDF:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: StatusCodes.INTERNAL_SERVER_ERROR });
    }
}
