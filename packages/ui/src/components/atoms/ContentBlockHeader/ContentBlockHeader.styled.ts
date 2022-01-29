import styled from "styled-components";
import { Text } from "../typography/Text";
import { ITitleProps, Title } from "../typography/Title";

export const StyledContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const StyledSubTitle = styled(Title)<{
    alignment?: string | undefined;
}>`
    color: ${({ theme }) => theme.colors.accentSecondary};
    font-size: 1.2rem;
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 10px;

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        font-size: 1rem;
    }
`;

export const StyledTitle = styled(Title)<ITitleProps>`
    width: 60%;
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-size: ${({ styledAs }) => (styledAs === 1 ? "3rem" : undefined)};
    font-style: ${({ theme }) =>
        // Fixes Playfair Display font in Safari when used "wedding" theme.
        theme.fonts.secondary.includes("Playfair Display") && "italic"};
    margin-bottom: 10px;

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        width: 100%;
        font-size: ${({ styledAs }) => (styledAs === 1 ? "2rem" : undefined)};
    }
`;

export const StyledDescription = styled(Text)`
    width: 60%;
    white-space: pre-wrap;

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        width: 100%;
    }
`;
