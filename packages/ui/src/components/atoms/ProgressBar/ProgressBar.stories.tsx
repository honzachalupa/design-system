import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ProgressBar as Component } from './ProgressBar';

export default {
    title: 'Atoms/ProgressBar',
    component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
    <Component {...args} />
);

export const Default = Template.bind({});
Default.args = {
    progress: 30
};
