import {
    Button,
    ButtonLink,
    ButtonsGroup,
    Layout_Primary,
    SwitchButton,
} from "ui";

export default function Web() {
    return (
        <Layout_Primary>
            <h1>Headline 1</h1>
            <h2>Headline 2</h2>
            <h3>Headline 3</h3>
            <h4>Headline 4</h4>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
            </p>

            <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
            </p>

            <a href="#">Text link</a>

            <p>Button medium</p>
            <Button label="Button" onClick={() => {}} />

            <p>Button small</p>
            <Button label="Button" size="small" onClick={() => {}} />

            <p>ButtonLink medium</p>
            <ButtonLink label="Button" href="#" />

            <p>ButtonLink small</p>
            <ButtonLink label="Button" href="#" size="small" />

            <p>ButtonsGroup medium</p>
            <ButtonsGroup>
                <Button label="Button" onClick={() => {}} />

                <Button label="Button" isDisabled onClick={() => {}} />

                <ButtonLink label="Button" href="#" />

                <ButtonLink label="Button" href="#" isDisabled />
            </ButtonsGroup>

            <p>ButtonsGroup small</p>
            <ButtonsGroup>
                <Button label="Button" size="small" onClick={() => {}} />

                <Button
                    label="Button"
                    size="small"
                    isDisabled
                    onClick={() => {}}
                />

                <ButtonLink label="Button" href="#" size="small" />

                <ButtonLink label="Button" href="#" size="small" isDisabled />
            </ButtonsGroup>

            <p>SwitchButton medium</p>
            <SwitchButton
                defaultValue={2}
                options={[
                    {
                        value: 1,
                        label: "Option 1",
                    },
                    {
                        value: 2,
                        label: "Option 2",
                    },
                    {
                        value: 3,
                        label: "Option 3 (disabled)",
                        isDisabled: true,
                    },
                    {
                        value: 4,
                        label: "Option 4",
                    },
                ]}
                className="w-[40vw]"
                onChange={console.log}
            />

            <p>SwitchButton small</p>
            <SwitchButton
                defaultValue={2}
                options={[
                    {
                        value: 1,
                        label: "Option 1",
                    },
                    {
                        value: 2,
                        label: "Option 2",
                    },
                    {
                        value: 3,
                        label: "Option 3 (disabled)",
                        isDisabled: true,
                    },
                    {
                        value: 4,
                        label: "Option 4",
                    },
                ]}
                size="small"
                className="w-[40vw]"
                onChange={console.log}
            />
        </Layout_Primary>
    );
}
