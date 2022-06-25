import { ComponentMeta, ComponentStory } from "@storybook/react";
import { TabsView as Component } from "./TabsView";

export default {
    title: "Atoms/TabsView",
    component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
    <Component {...args}>
        <div>
            <p>Content 1</p>
            <input />
        </div>

        <div>
            <p>Content 2</p>
            <input />
        </div>

        <div>
            <p>Content 3</p>
            <input />
        </div>
    </Component>
);

export const Default = Template.bind({});
Default.args = {
    labels: ["Tab 1", "Tab 2", "Tab 3"],
};
