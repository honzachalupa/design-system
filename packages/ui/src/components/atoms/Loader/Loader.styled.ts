import styled from "styled-components";
import { Icon } from "../Icon";

export const StyledOverlay = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(5px);
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
`;

export const StyledContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px;
`;

export const StyledIconContainer = styled.div`
    width: 80px;
    height: 80px;
    position: relative;
`;

export const StyledIcon = styled(Icon)<{ animationDurationSeconds: number }>`
    width: 100%;
    height: 100%;
    position: absolute;
    animation: ${({ animationDurationSeconds }) =>
        `rotate ${animationDurationSeconds}s linear infinite`};

    @keyframes rotate {
        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
`;

export const StyledLabel = styled.p`
    font-size: 1.2rem;
    font-weight: 600;
    margin-left: 20px;
`;
