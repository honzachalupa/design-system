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
    background: ${({ theme }) =>
        transparentize(
            theme.modal?.overlay?.opacity || 0.2,
            theme.modal?.overlay?.background || theme.colors.grayDark,
        )};
    backdrop-filter: blur(${({ theme }) => theme.modal?.overlay?.blur || 3}px);
    position: absolute;

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        position: none;
    }
`;

export const StyledContent = styled.div<{ width?: number; height?: number }>`
    width: ${({ width }) => width || 800}px;
    height: ${({ height }) => (height ? `${height}px` : "auto")};
    max-height: 80vh;
    background: ${({ theme }) => theme.modal?.background || theme.background};
    border-width: ${({ theme }) => theme.modal?.border?.width || 0}px;
    border-color: ${({ theme }) => theme.modal?.border?.color};
    border-radius: ${({ theme }) => theme.modal?.border?.radius || 2}px;
    padding: ${({ theme }) => theme.modal?.padding || 20}px;
    overflow-y: scroll;
    position: relative;
    z-index: 99;

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        width: 100vw;
        height: 100vh;
        max-height: 100vh;
    }

    * {
        color: ${({ theme }) => theme.modal?.color || theme.fontColors.black};
    }
`;

export const StyledIcon = styled(Icon)`
    width: ${({ theme }) => theme.modal?.closeIcon?.size || 35}px;
    height: ${({ theme }) => theme.modal?.closeIcon?.size || 35}px;
    cursor: pointer;
    position: absolute;
    right: 10px;
    top: 10px;
    z-index: 9;
`;
