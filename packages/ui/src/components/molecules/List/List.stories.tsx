import { IAbstractObject } from "@honzachalupa/utils";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { List as Component } from "./List";

export default {
    title: "Molecules/List",
    component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
    <Component {...args} />
);

export const Default = Template.bind({});
Default.args = {
    data: [
        {
            id: 1,
            someValue: "A",
        },
        {
            id: 2,
            someValue: "B",
        },
        {
            id: 3,
            someValue: "C",
        },
    ],
    columns: [
        {
            id: "id",
        },
        {
            id: "someValue",
        },
    ],
};

export const Advanced = Template.bind({});
Advanced.args = {
    headline: "Headline",
    data: [
        {
            id: 1,
            someValue: "A",
        },
        {
            id: 2,
            someValue: "B",
        },
        {
            id: 3,
            someValue: "C",
        },
    ],
    columns: [
        {
            id: "id",
            label: "ID",
        },
        {
            id: "someValue",
            label: "Some value",
        },
    ],
    actions: [
        {
            label: "Click",
            onClick: ({ id }: IAbstractObject) => alert(`Item ID: ${id}`),
        },
    ],
    rowHighlighting: {
        isGreen: ({ someValue }: IAbstractObject) => someValue === "A",
        isRed: ({ id }: IAbstractObject) => id === 3,
    },
    isCountShown: true,
};
