import { MouseEventHandler } from "react";
import styled from "styled-components";
import { Button } from "../../atoms/Button";
import { Grid } from "../../atoms/Grid";
import { Loader } from "../../atoms/Loader";

export const StyledButtonsGrid = styled(Grid)<{ childrenCount: number }>`
    width: ${({ childrenCount }) => 220 * childrenCount}px;
    margin-left: -20px;
`;

export const StyledContainer = styled.div<{ isMinimalUI?: boolean }>`
    background: rgba(255, 255, 255, 0.8);
    border: ${({ isMinimalUI, theme }) =>
        !isMinimalUI && `1px solid ${theme.border.default}`};
    position: relative;
`;

export const StyledFiltersContainer = styled.div`
    margin-bottom: 10px;
`;

export const StyledTableContainer = styled.div`
    overflow-y: auto;
`;

export const StyledTable = styled.table`
    width: 100%;
    border-collapse: collapse;
`;

export const StyledLoader = styled(Loader)`
    height: calc(100% - 81px);
    background: rgba(255, 255, 255, 0.8);
    position: absolute;
    z-index: 1;
`;

export const StyledHeadRow = styled.tr`
    border-bottom: 4px solid ${({ theme }) => theme.border.tableHead};
`;

export const StyledHeadCell = styled.th<{
    onClick?: MouseEventHandler<HTMLTableHeaderCellElement>;
}>`
    padding: 12px;
    font-family: ${({ theme }) => theme.fonts.VodafoneRgBd};
    text-align: left;
    text-transform: uppercase;
    white-space: nowrap;

    ${({ onClick }) =>
        !!onClick &&
        `
        cursor: pointer;
    `}
`;

export const StyledSortDirectionIcon = styled.span`
    color: ${({ theme }) => theme.palette.blue};
    margin-left: 5px;
`;

export const StyledBodyRow = styled.tr<{ isHighlighted?: boolean }>`
    height: 60px;
    border-bottom: 1px solid ${({ theme }) => theme.border.default};

    &:nth-of-type(even) {
        background: rgba(225, 225, 225, 0.2);
    }

    ${({ isHighlighted }) =>
        isHighlighted &&
        `
        background: rgb(255, 243, 235) !important;
    `}
`;

export const StyledBodyCell = styled.td`
    padding: 10px 15px;

    a {
        color: inherit;
    }
`;

export const StyledFooter = styled.div<{ isMinimalUI?: boolean }>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({ isMinimalUI }) => (isMinimalUI ? "10px" : "20px 40px")};

    & > * {
        flex-basis: calc(100% / 3);
    }
`;

export const StyledPageSizeSelect = styled.select`
    background-color: transparent;
    font-family: ${({ theme }) => theme.fonts.VodafoneRg};
    font-size: 15px;
    border: none;
    cursor: pointer;
    opacity: 0.5;

    &:hover,
    &:focus,
    &:active {
        border: none;
        outline: none;
    }
`;

export const StyledPaginationContainer = styled.div`
    flex-basis: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
`;

export const StyledPaginationButton = styled(Button)`
    width: 40px;
    height: 40px;
    background-color: rgba(0, 0, 0, 0.05);
    color: ${({ theme }) => theme.palette.blue};
    border: none;
    cursor: pointer;
    margin: 0 5px;
    border-radius: 50%;

    &[disabled] {
        visibility: hidden;
    }

    &:hover {
        background-color: ${({ theme }) => theme.palette.blueL};
        color: ${({ theme }) => theme.palette.blueD};
    }
`;

export const StyledPaginationText = styled.span`
    margin: 0 20px;
`;

const getWidthByCharactersCount = (length: number) => {
    const letterWidth = 8;
    const extraSpace = 1;

    return length * letterWidth + extraSpace;
};

const paddingX = 10;

export const StyledPageIndexInput = styled.input<{ length: number }>`
    width: ${({ length }) =>
        getWidthByCharactersCount(length) + paddingX * 2}px;
    background: transparent;
    border: none;
    border-bottom: 1px dashed ${({ theme }) => theme.palette.blue};
    color: inherit;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    padding: 0 ${paddingX}px;
    appearance: textfield;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    &:focus {
        outline: none;
    }
`;

export const StyledPageInfo = styled.div`
    opacity: 0.6;
    text-align: right;

    span {
        margin-right: 20px;

        &:last-of-type {
            margin-right: 0;
        }
    }
`;

export const StyledNoDataText = styled.p`
    padding: 20px;
    text-align: center;
`;
