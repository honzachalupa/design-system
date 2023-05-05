import cx from "classnames";
import { ChangeEvent, HTMLInputTypeAttribute } from "react";

export type InputSize = "small" | "medium";

interface Props<T> {
    id?: string;
    label?: string;
    value?: T;
    defaultValue?: T;
    placeholder?: string;
    description?: string;
    size?: InputSize;
    type?: HTMLInputTypeAttribute;
    className?: string;
    containerClassName?: string;
    isRequired?: boolean;
    isDisabled?: boolean;
    onChange?: (value: T) => void;
}

export const Input = <T,>({
    id,
    label,
    value,
    defaultValue,
    placeholder,
    description,
    size = "medium",
    type = "text",
    className,
    containerClassName,
    isRequired,
    isDisabled,
    ...rest
}: Props<T>) => {
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const resolvedValue =
            type === "number" ? Number(e.target.value) : e.target.value;

        rest.onChange?.(resolvedValue as T);
    };

    return (
        <div className={cx("my-2", containerClassName)}>
            {label && (
                <label htmlFor={id}>
                    {label} {isRequired && "*"}
                </label>
            )}

            {description && (
                <p className="text-xs text-opacity-50 my-1">{description}</p>
            )}

            <input
                id={id}
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
                value={value?.toString()}
                defaultValue={defaultValue?.toString()}
                placeholder={placeholder}
                type={type}
                required={isRequired}
                disabled={isDisabled}
                onChange={onChange}
            />
        </div>
    );
};
