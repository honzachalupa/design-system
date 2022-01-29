const rootMain = require("../../../.storybook/main");

module.exports = {
    ...rootMain,
    core: { ...rootMain.core, builder: "webpack5" },
    addons: [...rootMain.addons, "@nrwl/react/plugins/storybook"],
};
