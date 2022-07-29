import themes from "./themes";

export const useThemeSelector = (themeId?: string) => {
    if (themeId === "default") {
        return themes.themeDefault;
    } else if (themeId === "sample-1") {
        return themes.themeSample1;
    } else {
        throw new Error(`Theme "${themeId}" not found.`);
    }
};
