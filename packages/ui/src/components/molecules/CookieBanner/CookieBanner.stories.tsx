import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CookieBanner as Component } from "./CookieBanner";

export default {
    title: "Molecules/CookieBanner",
    component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
    <Component {...args} />
);

export const Default = Template.bind({});
Default.args = {
    headline: "Headline",
    content: "Content",
    agreeButtonText: "Agree",
    disagreeButtonText: "Disagree",
};
