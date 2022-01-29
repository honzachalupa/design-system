import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ContentBlockHeader as Component } from './ContentBlockHeader';

export default {
    title: 'Atoms/ContentBlockHeader',
    component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
    <Component {...args} />
);

export const Default = Template.bind({});
Default.args = {
    headline: "Headline"
};

export const Advanced = Template.bind({});
Advanced.args = {
    subheadline: "Subheadline",
    headline: "Headline",
    description: "Description",
    alignment: "center",
};
