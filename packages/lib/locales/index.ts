import { TTranslations } from "../types";
import modal_cs from "./cs/modal";
import pwaPrompt_cs from "./cs/pwaPrompt";
import modal_en from "./en/modal";
import pwaPrompt_en from "./en/pwaPrompt";

export const translations: TTranslations = {
    modal: {
        cs: modal_cs,
        en: modal_en,
    },
    pwaPrompt: {
        cs: pwaPrompt_cs,
        en: pwaPrompt_en,
    },
};

export type TTranslationsNamespace = keyof typeof translations;
