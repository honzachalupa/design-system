import { Button } from "@honzachalupa/design-system";
import React from "react";

export default {
    title: "Atoms/Button",
    component: Button,
};

export const Primary = () => (
    <Button label="Default" onClick={() => console.info("clicked")} />
);

export const Variants = () => (
    <>
        <Button label="Default solid" onClick={() => console.info("clicked")} />

        <br />
        <br />

        <Button
            label="Small solid"
            size="small"
            onClick={() => console.info("clicked")}
        />

        <br />
        <br />

        <Button
            label="Disabled solid"
            isDisabled
            onClick={() => console.info("clicked")}
        />

        <br />
        <br />

        <Button
            label="External solid"
            isExternal
            onClick={() => console.info("clicked")}
        />

        <br />
        <br />

        <Button
            label="Default outline"
            variant="outline"
            onClick={() => console.info("clicked")}
        />

        <br />
        <br />

        <Button
            label="Small outline"
            size="small"
            variant="outline"
            onClick={() => console.info("clicked")}
        />

        <br />
        <br />

        <Button
            label="Disabled outline"
            variant="outline"
            isDisabled
            onClick={() => console.info("clicked")}
        />

        <br />
        <br />

        <Button
            label="External outline"
            variant="outline"
            isExternal
            onClick={() => console.info("clicked")}
        />
    </>
);
