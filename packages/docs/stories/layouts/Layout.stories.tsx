import { Layout } from "@honzachalupa/design-system";
import React from "react";

export default {
    title: "Layouts/WithNavigation",
    component: Layout.WithNavigation,
};

export const Primary = () => (
    <Layout.WithNavigation>Content</Layout.WithNavigation>
);
