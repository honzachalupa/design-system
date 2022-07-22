import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Form as Component } from ".";

export default {
    title: "Molecules/Form",
    component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
    <Component {...args} />
);

export const Default = Template.bind({});
Default.args = {
    inputs: [
        {
            id: "input-1",
            controlType: "input",
            label: "Input",
            rules: {
                required: true,
            },
        },
        {
            id: "input-2",
            controlType: "select",
            label: "Select",
            options: [
                {
                    id: "1",
                    label: "Option 1",
                },
                {
                    id: "2",
                    label: "Option 2",
                },
                {
                    id: "3",
                    label: "Option 3",
                },
            ],
            rules: {
                required: true,
            },
            isReadOnly: true,
        },
    ],
    validationTexts: {
        isRequired: "Validation failed (isRequired)",
        minLength: "Validation failed (minLength)",
        maxLength: "Validation failed (maxLength)",
        pattern: "Validation failed (pattern)",
    },
    buttonsRenderer: (submit) => [
        {
            label: "Submit",
            onClick: submit,
        },
    ],
};

export const MultipleColumns = Template.bind({});
MultipleColumns.args = {
    columns: 2,
    inputs: [
        {
            id: "input-1",
            controlType: "input",
            label: "Input",
            rules: {
                required: true,
            },
        },
        {
            id: "input-2",
            controlType: "select",
            label: "Select",
            options: [
                {
                    id: "1",
                    label: "Option 1",
                },
                {
                    id: "2",
                    label: "Option 2",
                },
                {
                    id: "3",
                    label: "Option 3",
                },
            ],
            rules: {
                required: true,
            },
            isReadOnly: true,
        },
    ],
    validationTexts: {
        isRequired: "Validation failed (isRequired)",
        minLength: "Validation failed (minLength)",
        maxLength: "Validation failed (maxLength)",
        pattern: "Validation failed (pattern)",
    },
    buttonsRenderer: (submit) => [
        {
            label: "Submit",
            onClick: submit,
        },
    ],
};
