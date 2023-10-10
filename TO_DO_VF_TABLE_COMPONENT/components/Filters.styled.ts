import styled from "styled-components";

export const StyledValidationErrors = styled.div`
    padding-bottom: 3px;

    p {
        color: ${({ theme }) => theme.palette.vfRed};
        font-family: ${({ theme }) => theme.fonts.VodafoneRgBd};
    }
`;
