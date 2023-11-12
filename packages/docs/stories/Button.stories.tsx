import { Button } from "@honzachalupa/design-system";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Atoms/Button",
    component: Button,
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        label: "Label",
    },
};

export const Small: Story = {
    args: {
        label: "Label",
        size: "small",
    },
};

export const Outlined: Story = {
    args: {
        label: "Label",
        variant: "outline",
    },
};
