import cx from "classnames";
import { ChangeEvent, HTMLInputTypeAttribute } from "react";

export type InputSize = "small" | "medium";

interface Props<T> {
    defaultValue?: string;
    placeholder?: string;
    size?: InputSize;
    type?: HTMLInputTypeAttribute;
    className?: string;
    isDisabled?: boolean;
    onChange: (value: T) => void;
}

export const Input = <T,>({
    defaultValue,
    placeholder,
    size = "medium",
    type = "text",
    className,
    isDisabled,
    ...rest
}: Props<T>) => {
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const resolvedValue =
            type === "number" ? Number(e.target.value) : e.target.value;

        rest.onChange(resolvedValue as T);
    };

    return (
        <input
            className={cx(
                "w-full rounded-sm my-1 px-3.5 inline-block theme-background-faded theme-foreground focus:outline-none",
                {
                    "py-1.5 text-sm": size === "small",
                    "py-2 text-md": size === "medium",
                    "theme-background-faded theme-foreground-faded cursor-not-allowed":
                        isDisabled,
                },
                className
            )}
            defaultValue={defaultValue}
            placeholder={placeholder}
            type={type}
            disabled={isDisabled}
            onChange={onChange}
        />
    );
};
