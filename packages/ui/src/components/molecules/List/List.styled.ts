import styled from "styled-components";

const actionsContainerWidth = 180;

export const StyledContainer = styled.ul`
    width: 100%;
    border-top: 1px solid ${({ theme }) => theme.colors.grayLight};
    overflow-x: auto;
`;

export const StyledBodyRow = styled.li<{
    highlightColor?: string | undefined;
    opacity?: number | undefined;
}>`
    background-color: ${({ highlightColor }) =>
        highlightColor === "red"
            ? "rgba(255, 0, 0, 0.07)"
            : highlightColor === "green"
            ? "rgba(0, 255, 0, 0.07)"
            : highlightColor === "lightgray"
            ? "rgba(0, 0, 0, 0.03)"
            : "transparent"};
    font-size: 16px;
    list-style: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.grayLight};
    display: flex;
    opacity: ${({ opacity }) => opacity};
`;

export const StyledHeaderRow = styled(StyledBodyRow)`
    width: 100%;
    font-weight: 600;
`;

export const StyledCellsContainer = styled.div<{ hasActions: boolean }>`
    flex-basis: ${({ hasActions }) =>
        `calc(100% - ${hasActions ? actionsContainerWidth : 0}px)`};
    padding: 15px 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const StyledCell = styled.p<{ count: number; isBold?: boolean }>`
    width: ${({ count }) => `${100 / count}%`};
    font-weight: ${({ isBold }) => (isBold ? 600 : undefined)};
    text-overflow: ellipsis;
    overflow: hidden;
    padding-right: 10px;
`;

export const StyledActionsContainer = styled.div`
    flex-basis: ${actionsContainerWidth}px;
    display: flex;
    padding-right: 10px;
`;
