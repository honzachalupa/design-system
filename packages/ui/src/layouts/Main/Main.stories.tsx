import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Layout as Component } from "./Main";

export default {
    title: "Layouts/Main",
    component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
    <Component {...args} />
);

export const Default = Template.bind({});
Default.args = {
    children: "Content",
};
