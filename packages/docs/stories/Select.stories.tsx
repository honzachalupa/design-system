import { Select } from "@honzachalupa/design-system";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Atoms/Select",
    component: Select,
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const options = [
    {
        value: "option-1",
        label: "Option 1",
    },
    {
        value: "option-2",
        label: "Option 2",
    },
    {
        value: "option-3",
        label: "Option 3",
    },
    {
        value: "option-4",
        label: "Option 4",
    },
    {
        value: "option-5",
        label: "Option 5",
    },
];

export const Primary: Story = {
    args: {
        label: "Label",
        options,
        onChange: () => {},
    },
};

export const Multi: Story = {
    args: {
        label: "Label",
        options,
        isMulti: true,
        onChange: console.log,
    },
};

export const Searchable: Story = {
    args: {
        label: "Label",
        options,
        isSearchable: true,
        onChange: console.log,
    },
};

export const Disabled: Story = {
    args: {
        label: "Label",
        options,
        isDisabled: true,
        onChange: console.log,
    },
};
