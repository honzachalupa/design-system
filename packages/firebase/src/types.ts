import { FieldPath, OrderByDirection, WhereFilterOp } from "firebase/firestore";

export type TQuery = {
    where?: [string | FieldPath, WhereFilterOp, unknown][];
    orderBy?: [string | FieldPath, OrderByDirection][];
    limit?: number;
};
