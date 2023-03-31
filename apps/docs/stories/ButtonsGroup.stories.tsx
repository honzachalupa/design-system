import { Button, ButtonLink, ButtonsGroup } from "@honzachalupa/design-system";
import React from "react";

export default {
    title: "Atoms/ButtonsGroup",
    component: ButtonsGroup,
};

export const Variants = () => (
    <ButtonsGroup>
        <Button label="Button" onClick={() => console.info("clicked")} />
        <Button label="Button" onClick={() => console.info("clicked")} />
        <ButtonLink label="Button Link" href="#" />
        <ButtonLink label="Button Link" href="#" />
    </ButtonsGroup>
);
