export interface ITranslations {
    [languageCode: string]: {
        translation: {
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
