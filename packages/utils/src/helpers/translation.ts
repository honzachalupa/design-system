export const LANGUAGE_TEST = "test";

export const getBrowserLanguage = (fallbackLanguage?: string) =>
    new URL(window.location.href).searchParams.get("lang") ||
    navigator.language ||
    fallbackLanguage;
