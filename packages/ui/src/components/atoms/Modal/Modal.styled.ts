import { transparentize } from "polished";
import styled from "styled-components";
import { Icon } from "../Icon";

export const StyledContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 98;

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        width: 100vw;
        height: 100vh;
        overflow: hidden;
    }
`;

export const StyledOverlay = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${({ theme }) =>
        transparentize(0.2, theme.colors.grayDark)};
    backdrop-filter: blur(3px);
    position: absolute;

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        position: none;
    }
`;

export const StyledContent = styled.div<{ width?: number; height?: number }>`
    width: ${({ width }) => width || 800}px;
    height: ${({ height }) => (height ? `${height}px` : "auto")};
    max-height: 80vh;
    background-color: ${({ theme }) => theme.colors.white};
    padding: 20px;
    overflow-y: scroll;
    position: relative;
    z-index: 99;

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        width: 100vw;
        height: 100vh;
        max-height: 100vh;
    }
`;

export const StyledIcon = styled(Icon)`
    width: 35px;
    height: 35px;
    cursor: pointer;
    position: absolute;
    right: 10px;
    top: 10px;
    z-index: 9;
`;
