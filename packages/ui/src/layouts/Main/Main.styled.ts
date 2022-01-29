import styled from "styled-components";

export type TLayoutWidth = "narrow" | "medium" | "wide";

export const StyledContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export const StyledMargin = styled.div<{ width?: TLayoutWidth }>`
    width: 100%;
    max-width: ${({ width }) =>
        width === "narrow" ? 700 : width === "medium" ? 900 : 1200}px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding: 0 20px;
`;
