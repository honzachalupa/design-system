import { StylesConfig } from "react-select";

export const styles = (isDarkModeEnabled: boolean): StylesConfig => ({
    control: (styles) => ({
        ...styles,
        background: isDarkModeEnabled
            ? "rgba(0 0 0 / 0.5)"
            : "rgba(255 255 255 / 0.5)",
        border: "none",
        borderRadius: "0.125rem",
        boxShadow: "none",
    }),
    singleValue: (styles) => ({
        ...styles,
        color: isDarkModeEnabled
            ? "rgba(255 255 255 / 0.5)"
            : "rgba(0 0 0 / 0.5)",
    }),
    indicatorSeparator: (styles) => ({
        ...styles,
        display: "none",
    }),
    dropdownIndicator: (styles, { isDisabled }) => ({
        ...styles,
        "*": {
            fill: isDisabled ? "transparent" : "#e11d48",
        },
    }),
    menu: (styles) => ({
        ...styles,
        background: "rgba(0, 0, 0, 0.2)",
        backdropFilter: "blur(10px)",
        borderRadius: 0,
        borderBottomLeftRadius: "0.375rem",
        borderBottomRightRadius: "0.375rem",
        boxShadow: "none",
        marginTop: 1,
    }),
    menuList: (styles) => ({
        ...styles,
        background: "transparent",
        padding: 0,
    }),
    option: (styles, { isSelected }) => ({
        ...styles,
        background: "transparent",
        borderTopWidth: 1,
        borderTopColor: "rgb(107 114 128 / 0.2)",
        fontSize: "0.875rem",
        color: isSelected ? "#e11d48" : isDarkModeEnabled ? "white" : "black",
    }),
});
