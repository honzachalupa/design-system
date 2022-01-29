import { addons } from "@storybook/addons";
import { create } from "@storybook/theming";

addons.setConfig({
    theme: create({
        base: "light",
        brandTitle: "My custom storybook",
        brandUrl: "https://example.com",
        brandImage: "https://place-hold.it/350x150",
    }),
});
