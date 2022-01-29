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
            label: "Input 1",
            rules: {
                required: true,
            },
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
