import { createGlobalStyle } from "styled-components";
import { DefaultTheme } from "./DefaultTheme";

export const GlobalStyle = createGlobalStyle<{ isScrollDisabled: boolean }>`
    * {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: ${DefaultTheme.fonts.primary};
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        color: ${DefaultTheme.fontColors.faded};
    }

    html {
        font-size: 18px;
    }

    @media (max-width: ${DefaultTheme.breakpoints.sm}) {
        html {
            font-size: 10px;
        }
    }

    @media (max-width: ${DefaultTheme.breakpoints.md}) {
        html {
            font-size: 14px;
        }
    }

    body {
        width: 100vw;
        height: 100vh;
        background-color: ${DefaultTheme.background};
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
            color: ${DefaultTheme.colors.accentSecondary};
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
