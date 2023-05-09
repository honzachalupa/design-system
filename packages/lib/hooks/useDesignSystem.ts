import { useLocalStorage } from "@react-hooks-library/core";
import { useEffect } from "react";

interface Props {
    locale: "en" | "cs";
}

export const useDesignSystem = ({ locale }: Props) => {
    const [, setLocale] = useLocalStorage("designSystemLocale", locale);

    useEffect(() => {
        setLocale(locale);
    }, [locale]);

    return null;
};
