type Locale = "en" | "cs";

type Key =
    | "modalClose"
    | "pwaPromptTitle"
    | "pwaPromptContent"
    | "pwaPromptItem1Content"
    | "pwaPromptItem2Content";

const translations: {
    [key in Locale]: {
        [key in Key]: string;
    };
} = {
    en: {
        modalClose: "Close",
        pwaPromptTitle: "Add to Home Screen",
        pwaPromptContent:
            "This website has an app functionality. Add is to your home screen to use it in fullscreen and with other benefits.",
        pwaPromptItem1Content: 'Press the "Share" button on the menu bar below',
        pwaPromptItem2Content: 'Press "Add to Home Screen" button',
    },
    cs: {
        modalClose: "Zavřít",
        pwaPromptTitle: "Přidat na plochu",
        pwaPromptContent:
            "Přidejte si tuto aplikaci na plochu pro používání v režimu na celou obrazovku a další výhody.",
        pwaPromptItem1Content: 'Stiskněte tlačítko "Sdílet" v dolní nabídce',
        pwaPromptItem2Content: 'Stiskněte tlačítko "Přidat na plochu"',
    },
};

export const useTranslations = (locale: Locale) => {
    const t = (key: Key) => translations[locale][key];

    return t;
};
