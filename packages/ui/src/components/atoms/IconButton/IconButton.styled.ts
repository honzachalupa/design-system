import styled from "styled-components";
import { TButtonSizes } from "../Button";

export const StyledIconButton = styled.button<{
    color: string;
    size: TButtonSizes;
    isDisabled: boolean;
}>`
    &,
    &:hover {
        border-width: ${({ theme }) => theme.button?.border?.width || 0}px;
        border-color: ${({ theme }) => theme.button?.border?.color};
        border-radius: 50%;
        cursor: pointer;
        transition: 200ms background, color, opacity;

        ${({ color, theme }) => `
        background: ${
            theme.button?.styles?.[color]?.backgroundColor ||
            theme.button?.styles?.default?.backgroundColor ||
            theme.colors.grayLight
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
                    width: 35,
                    height: 35,
                    padding: 8,
                },
                medium: {
                    width: 46,
                    height: 46,
                    padding: 10,
                },
                big: {
                    width: 60,
                    height: 60,
                    padding: 15,
                },
            }[size])}

        ${({ isDisabled }) =>
            isDisabled &&
            `
            cursor: not-allowed;
            pointer-events: none;
            opacity: 0.5;
        `}
    }

    &:hover {
        opacity: 0.8;
    }
`;
