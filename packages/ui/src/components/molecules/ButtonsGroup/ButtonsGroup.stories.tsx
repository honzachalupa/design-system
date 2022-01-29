import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Fragment } from 'react';
import { Button } from '../../atoms/Button/Button';
import { ButtonsGroup as Component } from './ButtonsGroup';

export default {
    title: 'Molecules/ButtonsGroup',
    component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
    <Component {...args} />
);

export const Default = Template.bind({});
Default.args = {
    children: (
        <Fragment>
            <Button label="Button 1" />
            <Button label="Button 2" />
        </Fragment>
    )
};

export const Vertical = Template.bind({});
Vertical.args = {
    children: (
        <Fragment>
            <Button label="Button 1" />
            <Button label="Button 2" />
        </Fragment>
    ),
    orientation: "vertical"
};

export const Advanced = Template.bind({});
Advanced.args = {
    children: (
        <Fragment>
            <Button label="Button 1" />
            <Button label="Button 2" />
        </Fragment>
    ),
    alignment: "right"
};
