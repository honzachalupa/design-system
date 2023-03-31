import { ReactNode } from "react";

interface Props {
    mode?: "light" | "dark";
    children: ReactNode;
}

export const ThemeProvider: React.FC<Props> = ({ mode, children }) => {
    /* const toggleDarkTheme = (shouldAdd: boolean) => {
        document.body.classList.toggle("dark", shouldAdd);
    };

    const onThemeChange = (mediaQuery: MediaQueryListEvent) => {
        console.log(666);

        return toggleDarkTheme(mediaQuery.matches);
    };

    useEffect(() => {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

        prefersDark.addListener(onThemeChange);

        if (mode) {
            toggleDarkTheme(mode === "dark");
        } else {
            toggleDarkTheme(prefersDark.matches);
        }

        return () => {
            prefersDark.removeListener(onThemeChange);
        };
    }, [mode]); */

    return <>{children}</>;
};
