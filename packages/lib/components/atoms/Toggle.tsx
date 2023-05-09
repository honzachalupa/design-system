"use client";

import cx from "classnames";
import { useEffect, useState } from "react";

interface IProps {
    label: string;
    defaultValue?: boolean;
    onChange: (value: boolean) => void;
}

export const Toggle: React.FC<IProps> = ({ label, defaultValue, onChange }) => {
    const [value, setValue] = useState<boolean>(false);

    const handleToggle = () => {
        setValue((prevState) => !prevState);
    };

    useEffect(() => {
        if (defaultValue) {
            setValue(defaultValue);
        }
    }, []);

    useEffect(() => {
        onChange(value);
    }, [value]);

    return (
        <div className="flex justify-between mt-3 mb-5">
            <label>{label}</label>

            <div
                className="w-12 h-6 theme-background rounded-full"
                onClick={handleToggle}
            >
                <div
                    className={cx(
                        "h-full aspect-square rounded-full transition-all",
                        {
                            "ml-6 accent-background": value,
                            "theme-background-inverted bg-opacity-40": !value,
                        }
                    )}
                />
            </div>
        </div>
    );
};
