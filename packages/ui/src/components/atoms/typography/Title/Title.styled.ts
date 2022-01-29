import { createElement } from "react";
import styled from "styled-components";

export type THeaderAlignments = "left" | "center" | "right";

export interface ITitleProps {
    level: 1 | 2 | 3 | 4 | 5 | 6;
    styledAs?: 1 | 2 | 3 | 4 | 5 | 6;
    size?: number;
    alignment?: THeaderAlignments;
    className?: string;
    hasMargin?: boolean;
}

const getFontSize = (
    level: ITitleProps["level"],
    size: ITitleProps["size"],
) => {
    let value = size || "1rem";

    if (!size) {
        if (level === 1) {
            value = "2.5rem";
        } else if (level === 2) {
            value = "2rem";
        } else if (level === 3) {
            value = "1.5rem";
        }
    }

    return value;
};

const getMargin = (level: ITitleProps["level"]) => {
    let margin = {
        top: 0,
        bottom: 0,
    };

    if (level === 1) {
        margin = {
            top: 40,
            bottom: 40,
        };
    } else if (level === 2) {
        margin = {
            top: 20,
            bottom: 20,
        };
    } else if (level === 3) {
        margin = {
            top: 20,
            bottom: 20,
        };
    }

    return margin;
};

const UnstyledTypography: React.FC<{ tagName: string } & ITitleProps> = ({
    tagName,
    styledAs, // Excluded from "props" to avoid JSX error
    hasMargin, // Excluded from "props" to avoid JSX error
    ...restProps
}) => createElement(tagName, restProps);

export const StyledTitle = styled(UnstyledTypography)<ITitleProps>`
    width: 100%;
    color: ${({ theme }) => theme.colors.accentPrimary};
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: ${({ level, styledAs, size }) =>
        getFontSize(styledAs || level, size)};
    font-weight: 700;
    text-align: ${({ alignment }) => alignment || "center"};
    line-height: 110%;
    margin-top: ${({ level, styledAs, hasMargin = true }) =>
        hasMargin && `${getMargin(styledAs || level).top}px`};
    margin-bottom: ${({ level, styledAs, hasMargin = true }) =>
        hasMargin && `${getMargin(styledAs || level).bottom}px`};
`;
