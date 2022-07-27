import { ComponentMeta, ComponentStory } from "@storybook/react";
import { IconButton as Component } from "./IconButton";

export default {
    title: "Atoms/IconButton",
    component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
    <Component {...args} />
);

export const Default = Template.bind({});
Default.args = {
    label: "Label",
    icon: {
        name: "person",
    },
};
