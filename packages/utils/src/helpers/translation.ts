export const LANGUAGE_TEST = "test";

export const getBrowserLanguage = (fallbackLanguage?: string): string =>
    new URL(window.location.href).searchParams.get("lang") ||
    navigator.language ||
    fallbackLanguage ||
    "en";
