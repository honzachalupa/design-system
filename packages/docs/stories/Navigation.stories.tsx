import { Navigation } from "@honzachalupa/design-system";
import React from "react";

export default {
    title: "Molecules/Navigation",
    component: Navigation,
};

export const Primary = () => (
    <Navigation
        brand={{
            name: "Design System",
        }}
        primaryItems={[
            {
                label: "Home",
                href: "/",
            },
            {
                label: "Documentation",
                href: "/documentation",
            },
            {
                label: "About",
                href: "/about",
            },
        ]}
        secondaryItems={[
            {
                label: "Try it",
                onClick: () => {},
            },
            {
                label: "Sign Up",
                href: "/sign-up",
            },
        ]}
    />
);
