module.exports = {
    root: true,
    extends: ["next", "turbo", "prettier"],
    settings: {
        next: {
            rootDir: ["apps/*/", "packages/*/"],
        },
    },
    ignorePatterns: ["**/build/*"],
    rules: {
        "react-hooks/exhaustive-deps": "off",
        "@next/next/no-html-link-for-pages": "off",
    },
};
