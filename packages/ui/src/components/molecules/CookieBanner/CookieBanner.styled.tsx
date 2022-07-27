import styled from "styled-components";
import { ButtonsGroup } from "../ButtonsGroup";

export const StyledContainer = styled.div`
    width: 100%;
    background: #eff5f7;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1;
`;

export const StyledContent = styled.div`
    flex-basis: 70%;
`;

export const StyledButtonsGroup = styled(ButtonsGroup)`
    flex-basis: 200px;
`;
