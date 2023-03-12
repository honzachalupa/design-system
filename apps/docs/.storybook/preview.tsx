import React from "react";
import "ui/tailwind-globals.css";

const withProviders = (Story: React.FC, context: any) => {
    return <Story {...context} />;
};

export const decorators = [withProviders];

export const parameters = {
    actions: { argTypesRegex: "^on.*" },
    options: {
        storySort: {
            order: ["Atoms", "Molecules", "Organisms"],
        },
    },
};
