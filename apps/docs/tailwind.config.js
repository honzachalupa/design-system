/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./**/*.{js,ts,jsx,tsx}",
        "../../packages/design-system/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {},
    },
    plugins: [],
};
