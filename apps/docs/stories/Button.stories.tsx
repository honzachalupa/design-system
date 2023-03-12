import React from "react";

import { Button } from "ui";

export default {
    title: "Atoms/Button",
    component: Button,
};

export const Primary = () => (
    <Button label="Buttons" onClick={() => console.info("clicked")} />
);

export const Small = () => (
    <Button
        label="Buttons"
        size="small"
        onClick={() => console.info("clicked")}
    />
);

export const Disabled = () => (
    <Button
        label="Buttons"
        isDisabled
        onClick={() => console.info("clicked")}
    />
);
