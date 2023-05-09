import { useLocalStorage } from "@react-hooks-library/core";
import accountForm_cs from "../locales/cs/accountForm";
import modal_cs from "../locales/cs/modal";
import pwaPrompt_cs from "../locales/cs/pwaPrompt";
import accountForm_en from "../locales/en/accountForm";
import modal_en from "../locales/en/modal";
import pwaPrompt_en from "../locales/en/pwaPrompt";

const translations = {
    modal: {
        cs: modal_cs,
        en: modal_en,
    },
    pwaPrompt: {
        cs: pwaPrompt_cs,
        en: pwaPrompt_en,
    },
    accountForm: {
        cs: accountForm_cs,
        en: accountForm_en,
    },
};

type Namespace = keyof typeof translations;

export const useTranslation = () => {
    const [locale] = useLocalStorage("designSystemLocale", "en");

    const t = (namespace: Namespace, key: string) => {
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

    return t;
};
