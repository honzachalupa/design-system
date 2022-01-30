import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../src";
import { DefaultTheme } from "../src/DefaultTheme";

const ProvidersWrapper: React.FC<{
    children: any;
}> = ({ children }) => {
    const theme = DefaultTheme;

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle theme={theme} isScrollDisabled={false} />

            {children}
        </ThemeProvider>
    );
};

const withProviders = (Story: React.FC, context: any) => (
    <ProvidersWrapper>
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
