import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Fragment } from "react";
import { Button } from "../../atoms/Button";
import { CookieBanner as Component } from "./CookieBanner";

export default {
    title: "Molecules/CookieBanner",
    component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
    <Fragment>
        <Component {...args} />

        <Button
            label="Reset local storage value"
            onClick={() => {
                localStorage.removeItem("isCookiesAllowed");
                window.location.reload();
            }}
        />
    </Fragment>
);

export const Default = Template.bind({});
Default.args = {
    headline: "Headline",
    content: "Content",
    agreeButtonText: "Agree",
    disagreeButtonText: "Disagree",
};
