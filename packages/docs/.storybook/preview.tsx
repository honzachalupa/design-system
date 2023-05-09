import "@honzachalupa/design-system/build/tailwind-globals.css";
import React from "react";

const withProviders = (Story: React.FC, context: any) => {
    return <Story {...context} />;
};

export const decorators = [withProviders];

export const parameters = {
    darkMode: {
        stylePreview: true,
    },
    actions: { argTypesRegex: "^on.*" },
    options: {
        storySort: {
            order: ["Atoms", "Molecules", "Organisms"],
        },
    },
};
