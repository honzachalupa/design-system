import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Text as Component } from './Text';

export default {
    title: 'Atoms/Typography/Text',
    component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
    <Component {...args} />
);

export const Default = Template.bind({});
Default.args = {
    children: "Default text"
};


export const Advanced = Template.bind({});
Advanced.args = {
    children: "Advanced text",
    color: "blue",
    sizeRem: 30,
    weight: 800,
    alignment: "center",
};
