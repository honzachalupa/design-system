"use client";

import cx from "classnames";
import Link from "next/link";
import { IButtonPropsCore, getSharedButtonStyle } from "./Button";

export interface IButtonLinkProps extends IButtonPropsCore {
    href: string;
    target?: "_blank";
}

export const ButtonLink: React.FC<IButtonLinkProps> = ({
    label,
    href,
    size = "medium",
    variant = "solid",
    target,
    className,
    isDisabled,
}) => (
    <Link
        className={cx(
            "text-inherit no-underline",
            getSharedButtonStyle({
                size,
                variant,
                className,
                isDisabled,
                isExternal: target === "_blank",
            })
        )}
        href={isDisabled ? "" : href}
    >
        {label}
    </Link>
);
