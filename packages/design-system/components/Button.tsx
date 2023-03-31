import cx from "classnames";
import { ButtonHTMLAttributes, MouseEventHandler } from "react";

export type ButtonSize = "small" | "medium";

export interface ButtonPropsCore {
    label: string;
    size?: ButtonSize;
    type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
    className?: string;
    isDisabled?: boolean;
}

interface Props extends ButtonPropsCore {
    onClick: MouseEventHandler<HTMLButtonElement>;
}

export const getSharedButtonStyle = ({
    size,
    isDisabled,
    className,
}: Partial<ButtonPropsCore>) =>
    cx(
        "rounded-sm inline-block theme-background theme-foreground",
        {
            "px-3.5 py-1.5 text-sm": size === "small",
            "px-5 py-2 text-md": size === "medium",
            "theme-background-faded theme-foreground-faded cursor-not-allowed":
                isDisabled,
        },
        className
    );

export const Button: React.FC<Props> = ({
    label,
    size = "medium",
    type = "button",
    className,
    isDisabled,
    onClick,
}) => (
    <button
        className={getSharedButtonStyle({
            size,
            className,
            isDisabled,
        })}
        disabled={isDisabled}
        // TODO: Fix style for type="..."
        // type={type}
        onClick={onClick}
    >
        {label}
    </button>
);
