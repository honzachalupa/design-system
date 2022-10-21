module.exports = {
    displayName: "Utilities library",
    preset: "../../jest.preset.js",
    transform: {
        "^.+\\.[tj]sx?$": "ts-jest",
    },
    testEnvironment: "jsdom",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
    coverageDirectory: "../../coverage/packages/utils",
};
