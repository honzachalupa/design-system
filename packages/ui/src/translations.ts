import { ITranslations } from "./interfaces/translations";

export const translations: ITranslations = {
    en: {
        translation: {
            form: {
                validationMessages: {
                    isRequired: "Field is required",
                    minLength: "Minimal length is {{value}}",
                    maxLength: "Maximal length is {{value}}",
                    pattern: "Invalid pattern",
                },
            },
            cookieBanner: {
                headline: "Headline",
                content: "Content",
                agreeButtonText: "Agree",
                disagreeButtonText: "Disagree",
            },
            copyButton: {
                copy: "Copy",
                copied: "Copied",
            },
        },
    },
};
