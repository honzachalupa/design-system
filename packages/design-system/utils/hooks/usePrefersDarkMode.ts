import { useMedia } from "./useMedia";

export const usePrefersDarkMode = () =>
    useMedia(["(prefers-color-scheme: dark)"], [true], false);
