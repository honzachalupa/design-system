import { lighten } from "polished";
import styled from "styled-components";
import { Icon } from "../Icon";
import { TButtonColors, TButtonSizes } from "./Button.types";

const getColors = (backgroundColor: string, color: string) => `
    background-color: ${backgroundColor};
    color: ${color};

    &:hover {
        background-color: ${lighten(0.05, backgroundColor)};
    }
`;

export const StyledButton = styled.button<{
    color: TButtonColors;
    size: TButtonSizes;
    hasIcon: boolean;
    isDisabled: boolean;
}>`
    border: none;
    font-weight: 600;
    white-space: nowrap;
    box-shadow: 0 0 15px ${({ theme }) => theme.colors.grayLight};
    cursor: pointer;
    transition: 200ms background-color, color, opacity;

    &:hover {
        background-color: ${({ theme }) => theme.colors.grayLight};
    }

    ${({ color, theme }) =>
        color === "accentPrimary"
            ? getColors(theme.colors.accentPrimary, theme.fontColors.white)
            : color === "accentSecondary"
            ? getColors(theme.colors.accentSecondary, theme.fontColors.white)
            : color === "blue"
            ? getColors(theme.colors.blueDark, theme.fontColors.white)
            : color === "green"
            ? getColors(theme.colors.green, theme.fontColors.white)
            : color === "red"
            ? getColors(theme.colors.red, theme.fontColors.white)
            : color === "transparentInverted"
            ? getColors("transparent", theme.fontColors.white)
            : getColors("lightgray", theme.fontColors.faded)}

    ${({ size }) =>
        size === "small"
            ? `
            min-width: 110px;
            font-size: 13px;
            padding: 10px;
        `
            : size === "big"
            ? `
            min-width: 180px;
            font-size: 17px;
            padding: 20px;
        `
            : `
            min-width: 160px;
            font-size: 15px;
            padding: 15px;
        `}

    ${({ hasIcon }) =>
        hasIcon &&
        `
            width: 40px;
            min-width: 40px;
            height: 40px;
            border-radius: 50%;
            padding: 10px;
        `}

    &:hover,
    &:focus,
    &:active {
        border: none;
        outline: none;
    }

    ${({ isDisabled }) =>
        isDisabled &&
        `
            cursor: not-allowed;
            pointer-events: none;
            opacity: 0.5;
        `}
`;

export const StyledIcon = styled(Icon)`
    width: 100%;
    height: 100%;
`;
