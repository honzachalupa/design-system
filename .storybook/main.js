const getCustomWebpackConfig = require("./webpack.config.js");

module.exports = {
    stories: [
        "../src/**/*.stories.mdx",
        "../src/**/*.stories.@(js|jsx|ts|tsx)",
    ],
    addons: ["@storybook/addon-essentials"],
    webpackFinal: (config) => getCustomWebpackConfig(config),
};
