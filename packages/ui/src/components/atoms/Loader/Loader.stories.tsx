import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Loader as Component } from "./Loader";

export default {
    title: "Atoms/Loader",
    component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
    <Component {...args} />
);

export const Default = Template.bind({});
Default.args = { message: "Optional message" };
