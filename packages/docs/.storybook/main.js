const path = require("path");

module.exports = {
    stories: ["../stories/**/*.stories.tsx"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        // "storybook-dark-mode",
    ],
    framework: "@storybook/react",
    core: {
        builder: "@storybook/builder-vite",
    },
};
