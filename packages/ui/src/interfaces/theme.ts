import "styled-components";

interface IButtonStyle {
    backgroundColor?: string;
    color?: string;
    borderColor?: string;
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
        padding?: string;
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
        padding?: string;
    };
}

declare module "styled-components" {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface DefaultTheme extends ITheme {}
}
