import {
    FieldPath,
    OrderByDirection,
    Timestamp as TFirestoreTimestamp,
    WhereFilterOp,
} from "@firebase/firestore";

export type TTimestamp = TFirestoreTimestamp;

export type TQuery = {
    where?: [string | FieldPath, WhereFilterOp, unknown][];
    orderBy?: [string | FieldPath, OrderByDirection][];
    limit?: number;
};
