"use client";

import { Placement } from "@popperjs/core";
import cx from "classnames";
import { ReactNode } from "react";
import { Popup } from "./Popup";

export interface IContextMenuItem {
    label: string;
    href?: string;
    onClick?: () => void;
}

interface IProps {
    title?: string;
    items: (IContextMenuItem | null)[];
    position?: Placement;
    children: ReactNode;
    className?: string;
}

export const ContextMenu: React.FC<IProps> = ({
    title,
    items,
    position,
    children,
    className,
}) => (
    <Popup
        position={position}
        trigger={
            <div title={title} className={cx("cursor-pointer", className)}>
                {children}
            </div>
        }
    >
        <div className="theme-glass-effect rounded-md flex flex-col my-2">
            {(items.filter(Boolean) as IContextMenuItem[]).map(
                ({ label, href, onClick }) => {
                    const className = `px-4 py-2 text-sm border border-transparent border-b-gray-500
                        border-opacity-20 text-left no-underline whitespace-nowrap cursor-pointer
                        sm:text-xl sm:px-6 sm:py-3 last:border-none hover:bg-opacity-25 `;

                    return onClick ? (
                        <button
                            key={label}
                            type="button"
                            onClick={onClick}
                            className={className}
                        >
                            {label}
                        </button>
                    ) : (
                        <a key={label} href={href} className={className}>
                            {label}
                        </a>
                    );
                }
            )}
        </div>
    </Popup>
);
