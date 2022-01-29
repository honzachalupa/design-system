import { Document, Page, Text, View } from "@react-pdf/renderer";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { PdfDocumentPreview as Component } from "./PdfDocumentPreview";

export default {
    title: "Molecules/PdfDocumentPreview",
    component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
    <Component {...args} />
);

export const Default = Template.bind({});
Default.args = {
    document: (
        <Document>
            <Page size="A4" orientation="landscape">
                <View>
                    <Text>Content</Text>
                </View>
            </Page>
        </Document>
    ),
};
