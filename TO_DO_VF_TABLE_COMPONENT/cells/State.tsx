import React from "react";
import styled from "styled-components";

const StyledStateColumnWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const StyledStateColumn = styled.div<{ color: string }>`
    width: 6px;
    min-width: 6px;
    height: 35px;
    background-color: ${({ color }) => color};
    border-radius: 3px;
    margin-right: 10px;
`;

const StyledLabel = styled.p`
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
`;

interface IStateColumnProps {
    label: string;
    color: string;
}

export const TableCell_State: React.FC<IStateColumnProps> = ({
    label,
    color,
}) => (
    <StyledStateColumnWrapper>
        <StyledStateColumn color={color} />
        <StyledLabel>{label}</StyledLabel>
    </StyledStateColumnWrapper>
);
