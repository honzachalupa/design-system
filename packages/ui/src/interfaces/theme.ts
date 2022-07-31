import "styled-components";

export type TThemes = "default" | "sample-1";

interface IButtonStyle {
    backgroundColor?: string;
    color?: string;
    border?: {
        color: string;
    };
    boxShadow?: string;
}

export interface ITheme {
    colors: {
        accentPrimary: string;
        accentSecondary: string;
        black: string;
        white: string;
        grayLight: string;
        grayDark: string;
        green: string;
        red: string;
        blueLight: string;
        blueDark: string;
    };
    background: string;
    fonts: {
        primary: string;
        secondary: string;
    };
    fontColors: {
        black: string;
        white: string;
        faded: string;
    };
    breakpoints: {
        sm: string;
        md: string;
    };
    footer: {
        light: string;
        dark: string;
    };
    button?: {
        font?: {
            size?: number;
            weight?: number;
        };
        border?: { width?: number; color?: string; radius?: number };
        padding?: number;
        styles?: {
            default: IButtonStyle;
            [key: string]: IButtonStyle;
        };
    };
    input?: {
        height?: number;
        font?: {
            size?: number;
        };
        border?: { width?: number; color?: string; radius?: number };
        padding?: number;
    };
    modal?: {
        background?: string;
        color?: string;
        border: { width?: number; color?: string; radius?: number };
        padding?: number;
        closeIcon?: {
            size?: number;
            color?: string;
            margin?: number;
        };
        overlay?: {
            background?: string;
            opacity?: number;
            blur?: number;
        };
    };
    list?: {
        header?: {
            font?: {
                color?: string;
                size?: number;
                weight?: number;
                align?: string;
            };
            borderBottom?: {
                width?: number;
                color?: string;
            };
        };
        body?: {
            font?: {
                color?: string;
                size?: number;
                weight?: number;
                align?: string;
            };
            borderBottom?: {
                width?: number;
                color?: string;
            };
        };
    };
}

declare module "styled-components" {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface DefaultTheme extends ITheme {}
}
