import "styled-components";

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
}

declare module "styled-components" {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface DefaultTheme extends ITheme {}
}
