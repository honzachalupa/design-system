"use client";

import cx from "classnames";
import TextareaAutosize from "react-textarea-autosize";

export type TextAreaSize = "small" | "medium";

interface IProps {
    id?: string;
    label?: string;
    value?: string;
    defaultValue?: string;
    placeholder?: string;
    size?: TextAreaSize;
    tabIndex?: number;
    minRows?: number;
    maxRows?: number;
    className?: string;
    isRequired?: boolean;
    isDisabled?: boolean;
    onChange: (value: string) => void;
}

export const TextArea: React.FC<IProps> = ({
    id,
    label,
    value,
    defaultValue,
    placeholder,
    size = "medium",
    tabIndex,
    minRows,
    maxRows = 5,
    className,
    isRequired,
    isDisabled,
    onChange,
}) => (
    <div className="my-2">
        {label && (
            <label htmlFor={id}>
                {label} {isRequired && "(required)"}
            </label>
        )}

        <TextareaAutosize
            className={cx(
                "w-full my-1 px-3.5 inline-block theme-background-faded theme-foreground focus:outline-none resize-none",
                {
                    "py-1.5 text-sm": size === "small",
                    "py-2 text-md": size === "medium",
                    "theme-background-faded theme-foreground-faded cursor-not-allowed":
                        isDisabled,
                },
                className
            )}
            value={value}
            defaultValue={defaultValue}
            placeholder={placeholder}
            tabIndex={tabIndex}
            minRows={minRows}
            maxRows={maxRows}
            disabled={isDisabled}
            onChange={(e) => onChange(e.target.value)}
        />
    </div>
);
