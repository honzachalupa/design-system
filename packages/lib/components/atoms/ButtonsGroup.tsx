"use client";

import cx from "classnames";
import { ReactNode } from "react";

interface IProps {
    children: ReactNode;
    alignment?: "left" | "center" | "right";
    className?: string;
}

export const ButtonsGroup: React.FC<IProps> = ({
    children,
    alignment,
    className,
}) => (
    <div
        className={cx(
            "flex [&>*:not(:last-child)]:mr-4",
            {
                "justify-center": alignment === "center",
                "justify-end": alignment === "right",
            },
            className
        )}
    >
        {children}
    </div>
);
