module.exports = {
    root: true,
    extends: ["next", "turbo", "prettier"],
    rules: {
        "@next/next/no-html-link-for-pages": "off",
    },
    settings: {
        next: {
            rootDir: ["apps/*/"],
        },
    },
};
