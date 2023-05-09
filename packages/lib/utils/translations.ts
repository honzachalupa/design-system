import { TTranslationsNamespace } from "../locales";
import { TLocale, TTranslations } from "../types";

export const resolveTranslation = (
    translations: TTranslations,
    namespace: TTranslationsNamespace,
    locale: TLocale,
    key: string
) => {
    try {
        // @ts-ignore
        return translations[namespace][locale][key];
    } catch (error) {
        console.error(
            `Translation for ${namespace.toString()}:${key} not found`
        );

        return `${namespace}:${key}`;
    }
};
