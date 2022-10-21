export interface ITranslations {
    [languageCode: string]: {
        translation: {
            form?: {
                validationMessages: {
                    isRequired: string;
                    maxLength: string;
                    minLength: string;
                    pattern: string;
                };
            };
            cookieBanner?: {
                headline: string;
                content: string;
                agreeButtonText: string;
                disagreeButtonText: string;
            };
            copyButton?: {
                copy: string;
                copied: string;
            };
        };
    };
}
