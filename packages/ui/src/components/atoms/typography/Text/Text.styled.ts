import { ReactNode } from "react";
import styled from "styled-components";
import { IComponentProps } from "../../../../interfaces/component";

export interface ITextProps extends IComponentProps {
    children: ReactNode;
    color?: string;
    sizeRem?: number;
    weight?: number;
    alignment?: "left" | "center" | "right";
}

export const StyledText = styled.p<ITextProps>`
    color: ${({ theme, color }) => color || theme.fontColors.faded};
    font-size: ${({ sizeRem }) => sizeRem || 1}rem;
    font-weight: ${({ weight }) => weight || 400};
    text-align: ${({ alignment }) => alignment || "left"};
    line-height: 160%;
    margin-bottom: 10px;
`;
