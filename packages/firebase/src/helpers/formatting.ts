import { Timestamp } from "firebase/firestore";

export const dateToTimestamp = (date: Date) => Timestamp.fromDate(date);
