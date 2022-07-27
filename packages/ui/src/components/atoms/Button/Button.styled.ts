import styled from "styled-components";
import { Icon } from "../Icon";
import { TButtonSizes } from "./Button.types";

export const StyledButton = styled.button<{
    color: string;
    size: TButtonSizes;
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
    display: flex;
    align-items: center;
    justify-content: center;
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
            theme.button?.styles?.[color]?.border?.color ||
            theme.button?.styles?.default?.border?.color ||
            "transparent"
        };
        box-shadow: ${
            theme.button?.styles?.[color]?.boxShadow ||
            theme.button?.styles?.default?.boxShadow ||
            `0 0 15px ${theme.colors.grayLight}`
        };
    `};

    ${({ size }) =>
        ({
            small: {
                "min-width": 110,
                "font-size": 13,
                padding: "0 10",
            },
            medium: {
                "min-width": 160,
                "font-size": 15,
                padding: "0 15",
            },
            big: {
                "min-width": 180,
                "font-size": 17,
                padding: "0 20",
            },
        }[size])}

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

    span {
        ${({ size }) =>
            ({
                small: {
                    padding: "10px 0",
                },
                medium: {
                    padding: "15px 0",
                },
                big: {
                    padding: "20px 0",
                },
            }[size])}
    }
`;

export const StyledIcon = styled(Icon)<{
    size: TButtonSizes;
}>`
    margin-right: 12px;

    ${({ size }) =>
        ({
            small: {
                width: 20,
                height: 20,
            },
            medium: {
                width: 28,
                height: 28,
            },
            big: {
                width: 35,
                height: 35,
            },
        }[size])}
`;
