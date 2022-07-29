import React, { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../src";
import { TThemes } from "../src/interfaces/theme";
import { useThemeSelector } from "../src/themes/useThemeSelector";

const ProvidersWrapper: React.FC<{
    theme: TThemes;
    children: ReactNode;
}> = ({ theme: themeProp, children }) => {
    const theme = useThemeSelector(themeProp);

    console.log({ themeProp, theme });

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle theme={theme} isScrollDisabled={false} />

            {children}
        </ThemeProvider>
    );
};

const withProviders = (Story: React.FC, context: any) => (
    <ProvidersWrapper theme={context.globals.theme}>
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
        defaultValue: "default",
        toolbar: {
            showName: true,
            items: [
                {
                    value: "default",
                    title: "Default",
                },
                {
                    value: "sample-1",
                    title: "Sample 1",
                },
            ],
        },
    },
};
