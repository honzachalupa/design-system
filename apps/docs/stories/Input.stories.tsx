import { Input } from "@honzachalupa/design-system";
import React from "react";

export default {
    title: "Atoms/Input",
    component: Input,
};

export const Primary = () => (
    <Input onChange={(value) => console.info("changed", { value })} />
);

export const Variants = () => (
    <>
        <Input onChange={(value) => console.info("changed", { value })} />

        <Input
            size="small"
            placeholder="Small"
            onChange={(value) => console.info("changed", { value })}
        />

        <Input
            defaultValue="Default value"
            onChange={(value) => console.info("changed", { value })}
        />

        <Input
            placeholder="Disabled"
            isDisabled
            onChange={(value) => console.info("changed", { value })}
        />
    </>
);
