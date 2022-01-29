import styled from "styled-components";
import { Icon } from "../Icon";

export const StyledContainer = styled.div`
    border: 1px solid ${({ theme }) => theme.colors.grayLight};
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const StyledErrorIcon = styled(Icon)`
    width: 25px;
    position: relative;
    top: 1px;
`;

export const StyledErrorMessage = styled.p`
    font-size: 14px;
`;
