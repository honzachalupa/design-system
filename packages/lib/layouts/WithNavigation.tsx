"use client";

import cx from "classnames";
import { ReactNode } from "react";
import { FiUser } from "react-icons/fi";
import { HiOutlineMenu } from "react-icons/hi";
import { ContextMenu, IContextMenuItem } from "../components";

export interface IProps {
    title?: string;
    navigation?: {
        [key in "left" | "right"]?: {
            title?: string;
            component?: ReactNode;
            items: IContextMenuItem[];
        };
    };
    className?: string;
    headerClassName?: string;
    children: ReactNode;
}

export const WithNavigation: React.FC<IProps> = ({
    title,
    navigation,
    className,
    headerClassName,
    children,
}) => (
    <div>
        <header
            className={cx(
                "h-12 theme-page-background bg-opacity-40 backdrop-blur-md py-1 flex items-center justify-center sticky top-0 z-[1]",
                headerClassName
            )}
        >
            {navigation?.left && (
                <ContextMenu
                    title={navigation?.left.title}
                    items={navigation?.left.items}
                    className="absolute left-3 top-3"
                >
                    {navigation?.left.component || (
                        <FiUser className="w-6 h-6 accent-stroke" />
                    )}
                </ContextMenu>
            )}

            {title && (
                <h1 className="max-w-[calc(100%-100px)] accent-foreground text-center text-sm">
                    {title}
                </h1>
            )}

            {navigation?.right && (
                <ContextMenu
                    title={navigation?.right.title}
                    items={navigation?.right.items}
                    className="absolute right-3 top-3"
                >
                    {navigation?.right.component || (
                        <HiOutlineMenu className="w-6 h-6 accent-stroke" />
                    )}
                </ContextMenu>
            )}
        </header>

        <main className={cx("basis-full flex flex-col p-3", className)}>
            {children}
        </main>
    </div>
);
