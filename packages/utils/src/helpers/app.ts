import { RefObject } from "react";
import { IAbstractObject } from "../types";

export const cleanObject = (object: IAbstractObject) =>
    Object.fromEntries(
        Object.entries(object).filter(
            ([_, v]) => v !== null && v !== undefined,
        ),
    );

export const scrollToTop = () => window.scrollTo({ top: 0 });

export const scrollToRef = (ref: RefObject<HTMLElement>) =>
    ref.current?.scrollIntoView();
