import styled from "styled-components";

export const StyledContainer = styled.div<{ size?: number; color?: string }>`
    width: ${({ size }) => size && `${size}px`};
    height: ${({ size }) => size && `${size}px`};
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        fill: ${({ color }) => color};
        width: 100%;
        height: 100%;

        path {
            color: ${({ color }) => color};
        }
    }
`;
