import { ITheme } from "../../interfaces/theme";

const colors: ITheme["colors"] = {
    accentPrimary: "red",
    accentSecondary: "blue",
    black: "black",
    white: "white",
    grayLight: "rgba(0, 0, 0, 0.1)",
    grayDark: "#656565",
    green: "#1fb141",
    red: "#e60000",
    blueLight: "#3E6EDD",
    blueDark: "#3E6EDD",
};

export const themeSample1: ITheme = {
    colors,
    background: colors.grayLight,
    fonts: {
        primary: "sans-serif",
        secondary: "sans-serif",
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
    button: {
        border: {
            radius: 5,
        },
        styles: {
            default: {
                backgroundColor: colors.blueDark,
                color: "white",
            },
        },
    },
    input: {
        border: {
            color: colors.blueLight,
            radius: 10,
        },
    },
    modal: {
        background: "white",
        color: "blue",
        border: { width: 5, color: "lightgray", radius: 20 },
        padding: 50,
        closeIcon: {
            size: 50,
            color: "red",
        },
        overlay: {
            background: "blue",
            opacity: 0.5,
            blur: 5,
        },
    },
    list: {
        header: {
            font: {
                color: "red",
                align: "center",
            },
        },
        body: {
            font: {
                color: "black",
                align: "center",
            },
            borderBottom: {
                width: 0,
            },
        },
    },
    loader: {
        color: "black",
    },
};
