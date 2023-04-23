"use client";

import { useMemo } from "react";
import ReactSelect from "react-select";
import { usePrefersDarkMode } from "../../utils";

interface Props {
    label: string;
    defaultValue?: string;
    placeholder?: string;
    options: { label: string; value: string }[];
    noOptionsMessage?: string;
    loadingMessage?: string;
    onChange: (value: string) => void;
}

export const Select: React.FC<Props> = ({
    label,
    defaultValue,
    placeholder,
    options,
    noOptionsMessage,
    loadingMessage,
    onChange,
}) => {
    const darkMode = usePrefersDarkMode();

    const defaultOption = useMemo(
        () => options.find((option) => option.value === defaultValue),
        [defaultValue]
    );

    return (
        <div className="my-3">
            <label>{label}</label>

            <ReactSelect
                defaultValue={defaultOption}
                options={options}
                placeholder={placeholder || "Select an option"}
                noOptionsMessage={() => noOptionsMessage || "No options"}
                loadingMessage={() => loadingMessage || "Loading..."}
                className="w-full"
                styles={{
                    control: (styles) => ({
                        ...styles,
                        background: darkMode ? "black" : "white",
                        border: "none",
                        borderRadius: 0,
                        boxShadow: "none",
                    }),
                    singleValue: (styles) => ({
                        ...styles,
                        color: darkMode ? "white" : "black",
                    }),
                    indicatorSeparator: (styles) => ({
                        ...styles,
                        display: "none",
                    }),
                    dropdownIndicator: (styles) => ({
                        ...styles,
                        "*": {
                            fill: "#e11d48",
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
                        color: isSelected
                            ? "#e11d48"
                            : darkMode
                            ? "white"
                            : "black",
                    }),
                }}
                isSearchable={false}
                onChange={(option) => option && onChange(option.value)}
            />
        </div>
    );
};
