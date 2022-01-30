const webpack = require("webpack");
const getWebpackConfig = require("@nrwl/react/plugins/webpack");

module.exports = (webpackConfig) => {
    webpackConfig = getWebpackConfig(webpackConfig);

    return {
        ...webpackConfig,
        plugins: [
            ...webpackConfig.plugins,
            new webpack.ProvidePlugin({
                Buffer: ["buffer", "Buffer"],
                process: "process/browser",
            }),
        ],
        module: {
            ...webpackConfig.module,
            rules: [
                ...webpackConfig.module.rules,
                {
                    test: /\.(ts|tsx)$/,
                    loader: require.resolve("babel-loader"),
                    options: {
                        presets: [
                            "@babel/preset-typescript",
                            ["@babel/preset-react", { runtime: "automatic" }],
                        ],
                    },
                },
            ],
        },
        resolve: {
            ...webpackConfig.resolve,
            fallback: {
                ...webpackConfig.resolve.fallback,
                process: require.resolve("process/browser"),
                zlib: require.resolve("browserify-zlib"),
                stream: require.resolve("stream-browserify"),
                util: require.resolve("util"),
                buffer: require.resolve("buffer"),
                asset: require.resolve("assert"),
            },
        },
        node: {
            ...webpackConfig.node,
            global: true,
        },
    };
};
