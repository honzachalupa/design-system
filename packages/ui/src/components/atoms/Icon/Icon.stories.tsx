import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Icon as Component } from "./Icon";

export default {
    title: "Atoms/Icon",
    component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
    <Component {...args} />
);

export const Default = Template.bind({});
Default.args = { name: "share", size: 60 };
