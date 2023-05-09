module.exports = {
    root: true,
    extends: ["next", "turbo", "prettier"],
    settings: {
        next: {
            rootDir: ["packages/*/"],
        },
    },
    ignorePatterns: ["**/build/*"],
    rules: {
        "react-hooks/exhaustive-deps": "off",
        "import/no-anonymous-default-export": "off",
        "@next/next/no-html-link-for-pages": "off",
    },
};
