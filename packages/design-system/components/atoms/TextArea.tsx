import cx from "classnames";
import TextareaAutosize from "react-textarea-autosize";

export type TextAreaSize = "small" | "medium";

interface Props {
    id?: string;
    label?: string;
    value?: string;
    defaultValue?: string;
    placeholder?: string;
    size?: TextAreaSize;
    minRows?: number;
    maxRows?: number;
    className?: string;
    isRequired?: boolean;
    isDisabled?: boolean;
    onChange: (value: string) => void;
}

export const TextArea: React.FC<Props> = ({
    id,
    label,
    value,
    defaultValue,
    placeholder,
    size = "medium",
    minRows,
    maxRows = 5,
    className,
    isRequired,
    isDisabled,
    onChange,
}) => (
    <div>
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
            disabled={isDisabled}
            minRows={minRows}
            maxRows={maxRows}
            onChange={(e) => onChange(e.target.value)}
        />
    </div>
);
