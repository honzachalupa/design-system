import React from "react";
import { SwitchButton } from "../../../packages/design-system/build";

export default {
    title: "Atoms/SwitchButton",
    component: SwitchButton,
};

export const Primary = () => (
    <SwitchButton
        options={[
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
        ]}
        onChange={(e) => console.info("changed", { e })}
    />
);

export const Variants = () => (
    <>
        <SwitchButton
            options={[
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
            ]}
            onChange={(e) => console.info("changed", { e })}
        />

        <br />

        <SwitchButton
            options={[
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
            ]}
            size="small"
            onChange={(e) => console.info("changed", { e })}
        />

        <br />

        <SwitchButton
            options={[
                {
                    value: "option-1",
                    label: "Option 1 (disabled)",
                    isDisabled: true,
                },
                {
                    value: "option-2",
                    label: "Option 2",
                },
                {
                    value: "option-3",
                    label: "Option 3",
                },
            ]}
            onChange={(e) => console.info("changed", { e })}
        />
    </>
);
