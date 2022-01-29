import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Link as Component } from "./Link";

export default {
    title: "Atoms/Link",
    component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
    <Component {...args} />
);

export const Default = Template.bind({});
Default.args = { label: "Label" };

export const DefaultDisabled = Template.bind({});
DefaultDisabled.args = { label: "Label", isDisabled: true };

export const Advanced = Template.bind({});
Advanced.args = {
    label: "Label",
    type: "submit",
    color: "accentPrimary",
    size: "big",
};
