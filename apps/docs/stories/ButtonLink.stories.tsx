import { ButtonLink } from "@honzachalupa/design-system";
import React from "react";

export default {
    title: "Atoms/ButtonLink",
    component: ButtonLink,
};

export const Variants = () => (
    <>
        <ButtonLink label="Default" href="#" />

        <br />
        <br />

        <ButtonLink label="Small" size="small" href="#" />

        <br />
        <br />

        <ButtonLink label="Disabled" isDisabled href="#" />
    </>
);
