import styled from "styled-components";

export const StyledLink = styled.span<{ isDisabled: boolean }>`
    color: ${({ theme }) => theme.colors.accentPrimary};
    text-decoration: underline;
    cursor: pointer;
    user-select: none;

    &:hover {
        opacity: 0.8;
    }

    ${({ isDisabled }) =>
        isDisabled &&
        `
        cursor: not-allowed;
        pointer-events: none;
        opacity: 0.5;
    `}
`;
