"use client";

import { ReactNode, createContext, useState } from "react";
import "../tailwind-globals.css";
import { TLocale } from "../types";

const initialContext = {
    locale: "en" as TLocale,
    setLocale: (_: TLocale) => {},
};

type IContext = typeof initialContext;

export const Context = createContext<IContext>(initialContext);

export const ContextProvider: React.FC<{
    children: ReactNode;
}> = ({ children }) => {
    const [context, setContext] = useState<IContext>(initialContext);

    const setLocale = (locale: TLocale) => {
        setContext((prevContext) => ({
            ...prevContext,
            locale,
        }));
    };

    const value: IContext = {
        ...context,
        setLocale,
    };

    return <Context.Provider value={value}>{children}</Context.Provider>;
};
