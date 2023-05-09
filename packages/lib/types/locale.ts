export type TLocale = "en" | "cs";

export type TTranslations = {
    [key: string]: {
        [key in TLocale]: {
            [key: string]: string;
        };
    };
};
