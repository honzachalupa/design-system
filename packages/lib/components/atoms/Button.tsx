"use client";

import cx from "classnames";
import { ButtonHTMLAttributes, MouseEventHandler } from "react";

export type ButtonSize = "small" | "medium";

export interface IButtonPropsCore {
    label: string;
    size?: ButtonSize;
    type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
    variant?: "solid" | "outline";
    className?: string;
    isDisabled?: boolean;
}

export interface IButtonProps extends IButtonPropsCore {
    isExternal?: boolean;
    onClick: MouseEventHandler<HTMLButtonElement>;
}

export const getSharedButtonStyle = ({
    size,
    variant,
    isDisabled,
    isExternal,
    className,
}: Partial<IButtonPropsCore & { isExternal?: boolean }>) =>
    cx(
        "theme-foreground rounded-sm inline-block",
        {
            "theme-background": variant === "solid",
            "theme-border": variant === "outline",
            "px-3.5 py-1.5 text-sm": size === "small",
            "px-5 py-2 text-md": size === "medium",
            "theme-background-faded theme-foreground-faded cursor-not-allowed":
                isDisabled,
            "relative after:content-['◥'] after:text-[10px] after:accent-foreground after:absolute after:top-[-2px] after:right-0 after:opacity-50":
                isExternal,
        },
        className
    );

export const Button: React.FC<IButtonProps> = ({
    label,
    size = "medium",
    // type = "button",
    variant = "solid",
    className,
    isDisabled,
    isExternal,
    onClick,
}) => (
    <button
        className={getSharedButtonStyle({
            size,
            variant,
            className,
            isDisabled,
            isExternal,
        })}
        disabled={isDisabled}
        // TODO: Fix style for type="..."
        // type={type}
        onClick={onClick}
    >
        {label}
    </button>
);
