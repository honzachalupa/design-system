import { ComponentMeta, ComponentStory } from "@storybook/react";
import { PdfRenderer } from "../PdfRenderer";
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
        <PdfRenderer.Document>
            <PdfRenderer.Page size="A4" orientation="landscape">
                <PdfRenderer.View>
                    <PdfRenderer.Image
                        src="https://image.shutterstock.com/z/stock-vector-sample-stamp-sample-square-grunge-sign-sample-1474408826.jpg"
                        style={{
                            width: 600,
                            height: 400,
                            backgroundColor: "red",
                        }}
                    />

                    <PdfRenderer.Text>Content</PdfRenderer.Text>
                </PdfRenderer.View>
            </PdfRenderer.Page>
        </PdfRenderer.Document>
    ),
};
