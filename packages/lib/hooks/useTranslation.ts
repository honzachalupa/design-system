import { useCallback, useContext } from "react";
import { TTranslationsNamespace, translations } from "../locales";
import { Context } from "../utils/Context";
import { resolveTranslation } from "../utils/translations";

export const useTranslation = () => {
    const { locale } = useContext(Context);

    const t = useCallback(
        (namespace: TTranslationsNamespace, key: string) =>
            resolveTranslation(translations, namespace, locale, key),
        [locale]
    );

    return t;
};
