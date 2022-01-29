import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Switch as Component } from "./Switch";

export default {
    title: "Atoms/Switch",
    component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
    <Component {...args} />
);

export const Checked = Template.bind({});
Checked.args = { label: "Checked", isChecked: true };

export const Unchecked = Template.bind({});
Unchecked.args = { label: "Unchecked", isChecked: false };
