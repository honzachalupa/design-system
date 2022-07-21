import styled from "styled-components";
import { Icon } from "../Icon";
import { TButtonSizes } from "./Button.types";

export const StyledButton = styled.button<{
    color: string;
    size: TButtonSizes;
    hasIcon: boolean;
    isDisabled: boolean;
}>`
    font-size: ${({ theme }) => theme.button?.font?.size || 16}px;
    font-weight: ${({ theme }) => theme.button?.font?.weight || 600};
    border-width: ${({ theme }) => theme.button?.border?.width || 0}px;
    border-color: ${({ theme }) => theme.button?.border?.color};
    border-style: solid;
    border-radius: ${({ theme }) => theme.button?.border?.radius || 2}px;
    padding: ${({ theme }) => theme.button?.padding || "0 15px"};
    white-space: nowrap;
    cursor: pointer;
    transition: 200ms background-color, color, opacity;

    &:hover {
        opacity: 0.8;
    }

    ${({ color, theme }) => `
        background-color: ${
            theme.button?.styles?.[color]?.backgroundColor ||
            theme.button?.styles?.default?.backgroundColor ||
            theme.colors.grayLight
        };
        color: ${
            theme.button?.styles?.[color]?.color ||
            theme.button?.styles?.default?.color ||
            "black"
        };
        border-color: ${
            theme.button?.styles?.[color]?.borderColor ||
            theme.button?.styles?.default?.borderColor ||
            "transparent"
        };
        box-shadow: ${
            theme.button?.styles?.[color]?.boxShadow ||
            theme.button?.styles?.default?.boxShadow ||
            `0 0 15px ${theme.colors.grayLight}`
        };
    `};

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
