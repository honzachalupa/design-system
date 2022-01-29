import { ITheme } from "./interfaces/theme";

const colors: ITheme["colors"] = {
    accentPrimary: "#0c2461",
    accentSecondary: "#E42552",
    black: "black",
    white: "white",
    grayLight: "rgba(0, 0, 0, 0.1)",
    grayDark: "#656565",
    green: "#1fb141",
    red: "#e60000",
    blueLight: "#4dc5d7",
    blueDark: "#21b7cd",
};

export const DefaultTheme: ITheme = {
    colors,
    background: colors.white,
    fonts: {
        primary: "'Barlow', sans-serif",
        secondary: "'Playfair Display', sans-serif",
    },
    fontColors: {
        black: colors.black,
        white: colors.white,
        faded: colors.grayDark,
    },
    breakpoints: {
        sm: "600px",
        md: "1100px",
    },
    footer: {
        light: "#b7e1de",
        dark: "#9dcfc6",
    },
};
