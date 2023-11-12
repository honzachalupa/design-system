"use client";

import { useEffect, useMemo, useState } from "react";
import ReactSelect from "react-select";
import { usePreferredColorScheme } from "../../hooks";
import { styles } from "./Select.styles";

type Option = { value: string | number; label: string };

interface SelectProps<T> {
    label: string;
    defaultValue?: T;
    value?: T;
    placeholder?: string;
    options: Option[];
    noOptionsMessage?: string;
    loadingMessage?: string;
    isMulti?: boolean;
    isSearchable?: boolean;
    isRequired?: boolean;
    isDisabled?: boolean;
    onChange: (value: T | null) => void;
}

export const Select = <T,>({
    label,
    defaultValue,
    value: valueProp,
    placeholder,
    options,
    noOptionsMessage,
    loadingMessage,
    isMulti,
    isSearchable,
    isRequired,
    isDisabled,
    onChange,
}: SelectProps<T>) => {
    const colorScheme = usePreferredColorScheme();

    const [value, setValue] = useState<T>();

    const defaultOption = useMemo(
        () => options.find((option) => option.value === defaultValue),
        [defaultValue]
    );

    const selectedOption = useMemo(
        () => options.find((option) => option.value === value),
        [value]
    );

    const handleChange = (value: Option | Option[]) => {
        if (isMulti && Array.isArray(value)) {
            onChange(value.map(({ value }) => value) as T);
        } else if (!Array.isArray(value)) {
            onChange(value?.value as T);
        }
    };

    useEffect(() => {
        setValue(valueProp);
    }, [valueProp]);

    return (
        <div className="my-3">
            {label && (
                <label>
                    {label} {isRequired && "*"}
                </label>
            )}

            <ReactSelect
                defaultValue={defaultOption}
                value={selectedOption}
                options={options}
                placeholder={placeholder || "Select an option"}
                noOptionsMessage={() => noOptionsMessage || "No options"}
                loadingMessage={() => loadingMessage || "Loading..."}
                className="w-full"
                styles={styles(colorScheme === "dark")}
                isMulti={isMulti}
                isSearchable={isSearchable}
                isDisabled={isDisabled}
                // @ts-ignore
                onChange={handleChange}
            />
        </div>
    );
};
