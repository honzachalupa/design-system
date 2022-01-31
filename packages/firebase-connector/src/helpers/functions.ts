import * as functions from "firebase-functions";
import "firebase-functions/lib/logger/compat";

export const initFunction = (docPath: string) =>
    functions.region("europe-west3").firestore.document(docPath);

export const initScheduledFunction = (schedule: string) =>
    functions
        .region("europe-west3")
        .pubsub.schedule(schedule)
        .timeZone("Europe/Prague");
