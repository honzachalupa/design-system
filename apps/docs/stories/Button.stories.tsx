import { Button } from "@honzachalupa/design-system";
import React from "react";

export default {
    title: "Atoms/Button",
    component: Button,
};

export const Variants = () => (
    <>
        <Button label="Default" onClick={() => console.info("clicked")} />

        <br />
        <br />

        <Button
            label="Small"
            size="small"
            onClick={() => console.info("clicked")}
        />

        <br />
        <br />

        <Button
            label="Disabled"
            isDisabled
            onClick={() => console.info("clicked")}
        />
    </>
);
