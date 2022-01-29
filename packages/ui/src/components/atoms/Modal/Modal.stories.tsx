import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useEffect, useRef } from "react";
import { IModalRefProps, Modal as Component } from "./Modal";

export default {
    title: "Atoms/Modal",
    component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => {
    const modalRef = useRef<IModalRefProps>(null);

    useEffect(() => {
        modalRef.current?.show();
    }, [modalRef]);

    return (
        <Component ref={modalRef} {...args}>
            <p>Content...</p>
        </Component>
    );
};

export const Default = Template.bind({});
Default.args = {
    width: 800,
    height: 600,
    closeButtonText: "Close label",
};
