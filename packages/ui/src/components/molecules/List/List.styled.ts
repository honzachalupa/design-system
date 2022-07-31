import styled from "styled-components";

const actionsContainerWidth = 180;

export const StyledContainer = styled.ul`
    width: 100%;
    overflow-x: auto;
`;

const fixDefaultValue = (value: number | undefined, defaultValue: number) =>
    value === undefined ? defaultValue : value;

export const StyledHeaderRow = styled.li`
    width: 100%;
    border-bottom-style: solid;
    border-bottom-width: ${({ theme }) =>
        fixDefaultValue(theme.list?.header?.borderBottom?.width, 1)}px;
    border-bottom-color: ${({ theme }) =>
        theme.list?.header?.borderBottom?.color || theme.colors.grayLight};
    list-style: none;
    display: flex;

    * {
        color: ${({ theme }) => theme.list?.header?.font?.color};
        font-size: ${({ theme }) => theme.list?.header?.font?.size || 16}px;
        font-weight: ${({ theme }) => theme.list?.header?.font?.weight || 600};
        text-align: ${({ theme }) => theme.list?.header?.font?.align};
    }
`;

export const StyledBodyRow = styled.li<{
    highlightColor?: string | undefined;
    opacity?: number | undefined;
}>`
    background: ${({ highlightColor }) =>
        highlightColor === "red"
            ? "rgba(255, 0, 0, 0.07)"
            : highlightColor === "green"
            ? "rgba(0, 255, 0, 0.07)"
            : highlightColor === "lightgray"
            ? "rgba(0, 0, 0, 0.03)"
            : "transparent"};
    border-bottom-style: solid;
    border-bottom-width: ${({ theme }) =>
        fixDefaultValue(theme.list?.body?.borderBottom?.width, 1)}px;
    border-bottom-color: ${({ theme }) =>
        theme.list?.body?.borderBottom?.color || theme.colors.grayLight};
    list-style: none;
    display: flex;
    opacity: ${({ opacity }) => opacity};
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

const StyledCell = styled.div<{ count: number }>`
    width: ${({ count }) => `${100 / count}%`};
    text-overflow: ellipsis;
    overflow: hidden;
    padding-right: 10px;
`;

export const StyledHeaderCell = styled(StyledCell)`
    width: ${({ count }) => `${100 / count}%`};
    color: ${({ theme }) => theme.list?.header?.font?.color};
    font-size: ${({ theme }) => theme.list?.header?.font?.size || 16}px;
    font-weight: ${({ theme }) => theme.list?.header?.font?.weight};
    text-align: ${({ theme }) => theme.list?.header?.font?.align};
    text-overflow: ellipsis;
    overflow: hidden;
    padding-right: 10px;
`;

export const StyledBodyCell = styled(StyledCell)`
    width: ${({ count }) => `${100 / count}%`};
    color: ${({ theme }) => theme.list?.body?.font?.color};
    font-size: ${({ theme }) => theme.list?.body?.font?.size || 16}px;
    font-weight: ${({ theme }) => theme.list?.body?.font?.weight};
    text-align: ${({ theme }) => theme.list?.body?.font?.align};
    text-overflow: ellipsis;
    overflow: hidden;
    padding-right: 10px;
`;

export const StyledActionsContainer = styled.div`
    flex-basis: ${actionsContainerWidth}px;
    display: flex;
    padding-right: 10px;
`;
