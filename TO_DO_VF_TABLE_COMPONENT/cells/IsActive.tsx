import { Icon, theme } from "@backoffice/ui";
import { boolToLabel } from "@backoffice/utils";
import React from "react";
import styled from "styled-components";

interface IProps {
    value: boolean;
}

const StyledContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    p {
        margin-top: 3px;
    }
`;

const StyledCheckboxIcon = styled(Icon)<{ isFaded?: boolean }>`
    width: 40px;
    padding: 8px;
    opacity: ${({ isFaded }) => (isFaded ? 0.5 : 1)};
`;

export const TableCell_IsActive: React.FC<IProps> = ({ value }) => (
    <StyledContainer>
        {value ? (
            <StyledCheckboxIcon
                name="checkboxChecked"
                color={theme.palette.blue}
            />
        ) : (
            <StyledCheckboxIcon
                name="checkboxUnchecked"
                color={theme.palette.blue}
                isFaded
            />
        )}

        <p>{boolToLabel(value)}</p>
    </StyledContainer>
);
