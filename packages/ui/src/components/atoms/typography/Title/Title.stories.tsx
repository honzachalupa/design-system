import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Title as Component } from './Title';

export default {
    title: 'Atoms/Typography/Title',
    component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
    <Component {...args} />
);

export const Default = Template.bind({});
Default.args = {
    children: "Default h1 title",
    level: 1
};


export const Advanced = Template.bind({});
Advanced.args = {
    children: "Advanced h3 title",
    level: 3,
    size: 40,
    alignment: "center",
};
