import { ReactNode } from "react";
import styled from "styled-components";
import { IComponentProps } from "../../../interfaces/component";

export interface IProps extends IComponentProps {
    children: ReactNode;
    alignment?: "left" | "right";
    orientation?: "vertical";
}

export const StyledContainer = styled.div<IProps>`
    width: 100%;
    display: flex;
    flex-direction: ${({ orientation }) =>
        orientation === "vertical" ? "column" : "row"};
    justify-content: ${({ alignment }) =>
        alignment === "left"
            ? "flex-start"
            : alignment === "right"
            ? "flex-end"
            : "center"};

    & > * {
        margin: ${({ orientation }) =>
            orientation === "vertical" ? "5px 0" : "0 5px"};
    }
`;
