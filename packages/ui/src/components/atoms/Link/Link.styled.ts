import { lighten } from "polished";
import styled from "styled-components";
import { Button } from "../Button";
import { TButtonColors } from "../Button/Button.types";

const getColors = (color: string) => `
    background-color: transparent;
    color: ${color};

    &:hover {
        background-color: transparent;
        color: ${lighten(0.05, color)};
    }
`;

export const StyledLink = styled(Button)<{
    color: TButtonColors;
}>`
    min-width: 0;
    max-width: 100%;
    background-color: transparent;
    color: ${({ color }) => color};
    text-decoration: underline;
    box-shadow: none;
    margin: 0;
    padding: 5px;
    user-select: text;
    white-space: normal;
    word-wrap: break-word;

    ${({ color, theme }) =>
        color === "accentPrimary"
            ? getColors(theme.colors.accentPrimary)
            : color === "accentSecondary"
            ? getColors(theme.colors.accentSecondary)
            : color === "blue"
            ? getColors(theme.colors.blueDark)
            : color === "green"
            ? getColors(theme.colors.green)
            : color === "red"
            ? getColors(theme.colors.red)
            : getColors("gray")}
`;
