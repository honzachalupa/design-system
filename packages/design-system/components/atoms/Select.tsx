"use client";

import { useEffect, useMemo, useState } from "react";
import ReactSelect from "react-select";
import { usePrefersDarkMode } from "../../utils";
import { styles } from "./Select.styles";

interface Props {
    label: string;
    defaultValue?: string;
    value?: string;
    placeholder?: string;
    options: { label: string; value: string }[];
    noOptionsMessage?: string;
    loadingMessage?: string;
    isDisabled?: boolean;
    onChange: (value: string) => void;
}

export const Select: React.FC<Props> = ({
    label,
    defaultValue,
    value: valueProp,
    placeholder,
    options,
    noOptionsMessage,
    loadingMessage,
    isDisabled,
    onChange,
}) => {
    const isDarkModeEnabled = usePrefersDarkMode();

    const [value, setValue] = useState<string>();

    const defaultOption = useMemo(
        () => options.find((option) => option.value === defaultValue),
        [defaultValue]
    );

    const selectedOption = useMemo(
        () => options.find((option) => option.value === value),
        [value]
    );

    useEffect(() => {
        setValue(valueProp);
    }, [valueProp]);

    return (
        <div className="my-3">
            <label>{label}</label>

            <ReactSelect
                defaultValue={defaultOption}
                value={selectedOption}
                options={options}
                placeholder={placeholder || "Select an option"}
                noOptionsMessage={() => noOptionsMessage || "No options"}
                loadingMessage={() => loadingMessage || "Loading..."}
                className="w-full"
                styles={styles(isDarkModeEnabled)}
                isSearchable={false}
                isDisabled={isDisabled}
                // @ts-ignore
                onChange={(option) => option && onChange(option.value)}
            />
        </div>
    );
};
