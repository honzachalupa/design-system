import { Icon } from "@backoffice/ui";
import styled from "styled-components";

export const StyledActionsContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const StyledAction = styled.div<{
    backgroundColor?: string;
}>``;

export const StyledActionIcon = styled(Icon)<{ backgroundColor?: string }>`
    width: 40px;
    height: 40px;
    background-color: ${({ backgroundColor, theme }) =>
        backgroundColor || theme.palette.blue};
    border-radius: 100%;
    padding: 8px;
    margin-left: 5px;
    cursor: pointer;
`;
