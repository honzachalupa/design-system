import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button as Component } from "./Button";

export default {
    title: "Atoms/Button",
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
    size: "big",
};

export const WithIcon = Template.bind({});
WithIcon.args = {
    label: "Label",
    type: "submit",
    icon: {
        name: "share",
        color: "red",
    },
};

export const Facebook = Template.bind({});
Facebook.args = {
    label: "Sign Up with Facebook",
    type: "submit",
    icon: {
        name: "facebook",
        color: "#4267B2",
    },
};

export const Google = Template.bind({});
Google.args = {
    label: "Sign Up with Google",
    type: "submit",
    icon: {
        name: "googleColored",
    },
};
