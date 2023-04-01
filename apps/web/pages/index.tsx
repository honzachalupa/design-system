import {
    ButtonLink,
    ButtonsGroup,
    Layout_Primary,
} from "@honzachalupa/design-system";

export default function Index() {
    return (
        <Layout_Primary>
            <h1>@honzachalupa/design-system</h1>

            <ButtonsGroup>
                <ButtonLink
                    label="GitHub"
                    href="https://github.com/honzachalupa/design-system"
                />

                <ButtonLink
                    label="NPM"
                    href="https://www.npmjs.com/package/@honzachalupa/design-system"
                />

                <ButtonLink
                    label="Storybook"
                    href="https://www.chromatic.com/library?appId=61f6de08e97ef3003afa0396"
                />
            </ButtonsGroup>
        </Layout_Primary>
    );
}
