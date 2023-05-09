import {
    ButtonLink,
    ButtonsGroup,
    HeroSection,
} from "@honzachalupa/design-system";
import React from "react";

export default {
    title: "Molecules/HeroSection",
    component: HeroSection,
};

export const Primary = () => (
    <HeroSection
        headline={
            <>
                Data to enrich your{" "}
                <span className="accent-foreground">online business</span>
            </>
        }
        subheadline="Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua."
        actions={
            <ButtonsGroup>
                <ButtonLink
                    label="GitHub"
                    href="https://github.com/honzachalupa/design-system"
                    target="_blank"
                />

                <ButtonLink
                    label="NPM"
                    href="https://www.npmjs.com/package/@honzachalupa/design-system"
                    target="_blank"
                />

                <ButtonLink
                    label="Storybook"
                    href="https://www.chromatic.com/library?appId=61f6de08e97ef3003afa0396"
                    target="_blank"
                />
            </ButtonsGroup>
        }
    />
);
