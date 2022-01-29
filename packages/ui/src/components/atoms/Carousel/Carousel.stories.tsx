import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Carousel as Component } from "./Carousel";

export default {
    title: "Atoms/Carousel",
    component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
    <Component {...args} />
);

export const Default = Template.bind({});
Default.args = {
    slides: [
        {
            backgroundColor: "red",
            renderer: () => <p>Component 1</p>,
        },
        {
            backgroundColor: "green",
            renderer: () => <p>Component 2</p>,
        },
        {
            backgroundColor: "blue",
            renderer: () => <p>Component 3</p>,
        },
    ],
};
