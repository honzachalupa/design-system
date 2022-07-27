import styled from "styled-components";

export const StyledContainer = styled.div`
    width: 100%;
    background: ${({ theme }) => theme.colors.grayLight};
    border-radius: 11px;
    overflow: hidden;
    display: flex;
`;

export const StyledBar = styled.div<{ percents: number }>`
    width: ${({ percents }) => percents}%;
    height: 22px;
    background: ${({ theme }) => theme.colors.blueDark};
    transition: 250ms width;
`;
