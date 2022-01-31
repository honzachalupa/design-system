import { ComponentMeta, ComponentStory } from "@storybook/react";
import { QrCode as Component } from "./QrCode";

export default {
    title: "Atoms/QrCode",
    component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
    <Component {...args} />
);

export const Default = Template.bind({});
Default.args = {
    value: "Sample value",
};
