import { ComponentMeta, ComponentStory } from "@storybook/react";
import { TabsView as Component } from "./TabsView";

export default {
    title: "Atoms/TabsView",
    component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
    <Component {...args} />
);

export const Default = Template.bind({});
Default.args = {
    tabs: [
        {
            title: "Tab 1",
            content: (
                <div>
                    <p>Content 1</p>
                    <input type="text" />
                </div>
            ),
        },
        {
            title: "Tab 2",
            content: (
                <div>
                    <p>Content 2</p>
                    <input />
                </div>
            ),
            isDefault: true,
        },
        {
            title: "Tab 3",
            content: (
                <div>
                    <p>Content 3</p>
                    <input />
                </div>
            ),
        },
    ],
};
