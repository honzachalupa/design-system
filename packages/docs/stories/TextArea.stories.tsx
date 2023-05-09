import React from "react";
import { TextArea } from "../../../packages/design-system/build";

export default {
    title: "Atoms/TextArea",
    component: TextArea,
};

export const Primary = () => (
    <TextArea onChange={(value) => console.info("changed", { value })} />
);

export const Variants = () => (
    <>
        <TextArea onChange={(value) => console.info("changed", { value })} />

        <TextArea
            size="small"
            placeholder="Small"
            onChange={(value) => console.info("changed", { value })}
        />

        <TextArea
            defaultValue="Default value"
            onChange={(value) => console.info("changed", { value })}
        />

        <TextArea
            placeholder="Disabled"
            isDisabled
            onChange={(value) => console.info("changed", { value })}
        />
    </>
);
