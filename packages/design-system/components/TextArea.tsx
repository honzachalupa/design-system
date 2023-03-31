import cx from "classnames";
import TextareaAutosize from "react-textarea-autosize";

export type TextAreaSize = "small" | "medium";

interface Props {
    defaultValue?: string;
    placeholder?: string;
    size?: TextAreaSize;
    minRows?: number;
    maxRows?: number;
    className?: string;
    isDisabled?: boolean;
    onChange: (value: string) => void;
}

export const TextArea: React.FC<Props> = ({
    defaultValue,
    placeholder,
    size = "medium",
    minRows,
    maxRows = 5,
    className,
    isDisabled,
    onChange,
}) => (
    <TextareaAutosize
        className={cx(
            "w-full my-1 px-3.5 inline-block bg-transparent theme-foreground theme-border focus:outline-none resize-none",
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
        disabled={isDisabled}
        minRows={minRows}
        maxRows={maxRows}
        onChange={(e) => onChange(e.target.value)}
    />
);
