import { DocumentSnapshot, QuerySnapshot } from "firebase/firestore";

export const convertDocToItem = (doc: DocumentSnapshot) => ({
    id: doc.id,
    ...doc.data(),
});

export const convertDocsToItems = (docs: QuerySnapshot<unknown>) => {
    const items: any[] = [];

    docs.forEach((doc) => {
        const data = doc.data();

        items.push({
            id: doc.id,
            ...(data as object),
        });
    });

    return items;
};
