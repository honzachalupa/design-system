import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../src";
import { DefaultTheme } from "../src/DefaultTheme";

const ProvidersWrapper: React.FC<{
    locale: string;
    theme: any; // TThemes
    children: any;
}> = ({ locale, theme: themeProp, children }) => {
    console.log({ locale, themeProp });

    const theme = DefaultTheme;

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle theme={theme} isScrollDisabled={false} />

            {children}
        </ThemeProvider>
    );
};

const withProviders = (Story: React.FC, context: any) => (
    <ProvidersWrapper
        theme={context.globals.theme}
        locale={context.globals.locale}
    >
        <Story {...context} />
    </ProvidersWrapper>
);

export const decorators = [withProviders];

export const parameters = {
    actions: { argTypesRegex: "^on.*" },
    options: {
        storySort: {
            order: ["Atoms", "Molecules", "Organisms"],
        },
    },
};

export const globalTypes = {
    theme: {
        name: "Themes",
        defaultValue: "wedding",
        toolbar: {
            showName: true,
            items: [
                {
                    value: "general",
                    title: "General",
                },
                {
                    value: "wedding",
                    title: "Wedding",
                },
            ],
        },
    },
    locale: {
        name: "Locales",
        defaultValue: "cs",
        toolbar: {
            showName: true,
            items: [
                { value: "cs", right: "🇨🇿", title: "Česky" },
                { value: "sk", right: "🇸🇰", title: "Slovensky" },
                {
                    value: "test",
                    title: "No language (show translations keys)",
                },
            ],
        },
    },
};
