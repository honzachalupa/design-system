import { ComponentMeta, ComponentStory } from "@storybook/react";
import styled from "styled-components";
import { Icon as Component, TIconName } from "./Icon";
import { icons } from "./Icon.imports";

export default {
    title: "Atoms/Icon",
    component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
    <Component {...args} />
);

export const Default = Template.bind({});
Default.args = { name: "share", size: 80 };

const StyledIconsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const StyledIconContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`;

const TemplateAll: ComponentStory<typeof Component> = (args) => (
    <StyledIconsContainer>
        {Object.keys(icons).map((name: string) => (
            <StyledIconContainer key={name}>
                <Component {...args} name={name as TIconName} />

                <p>{name}</p>
            </StyledIconContainer>
        ))}
    </StyledIconsContainer>
);

export const IconsList = TemplateAll.bind({});
IconsList.args = { size: 60 };
