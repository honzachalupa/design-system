import styled from "styled-components";

export const StyledContainer = styled.section``;

export const StyledHeaderButton = styled.button<{ isSelected: boolean }>`
    &,
    &:hover,
    &:focus {
        min-width: 180px;
        background-color: #ededf0;
        border: 1px solid rgba(0, 0, 0, 0.15);
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 20px;
        text-align: center;
        padding: 10px 5px 8px 5px;
        margin-left: 15px;
        position: relative;
        top: 1px;
        z-index: 1;
        transition: all 250ms;

        ${({ isSelected }) =>
            isSelected &&
            `
                background-color: white;
                border-bottom: 1px solid transparent;
            `}
    }
`;

export const StyledContentContainer = styled.article`
    border-top: 1px solid rgba(0, 0, 0, 0.15);
`;

export const StyledContent = styled.div<{ isVisible: boolean }>`
    padding-top: 12px;
    display: ${({ isVisible }) => !isVisible && "none"};
`;
