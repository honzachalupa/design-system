import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle<{ isScrollDisabled?: boolean }>`
    * {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: ${({ theme }) => theme.fonts.primary};
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        color: ${({ theme }) => theme.fontColors.faded};
    }

    html {
        font-size: 18px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        html {
            font-size: 10px;
        }
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        html {
            font-size: 14px;
        }
    }

    body {
        width: 100vw;
        height: 100vh;
        background: ${({ theme }) => theme.background};
        overflow-x: hidden;

        button {
          color: inherit;
          cursor: pointer;
          user-select: none;

          &:hover,
          &:focus,
          &:active {
              border: none;
              outline: none;
          }
        }

        input,
        textarea,
        select {
            &:hover,
            &:focus,
            &:active {
                border: none;
                outline: none;
            }

            &:-webkit-autofill {
                box-shadow: 0 0 0 1000px white inset;

                &:hover,
                &:focus {
                    box-shadow: 0 0 0 1000px white inset;
                }
            }
        }

        a {
            color: ${({ theme }) => theme.colors.accentSecondary};
            text-decoration: none;
        }

        #app {
            height: 100%;

            ${({ isScrollDisabled }) =>
                isScrollDisabled &&
                `
                overflow: hidden;
            `}
        }
    }
`;
