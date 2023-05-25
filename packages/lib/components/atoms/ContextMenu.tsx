import { Placement } from "@popperjs/core";
import { ReactNode } from "react";
import { Popup } from "./Popup";

interface Item {
    label: string;
    href?: string;
    onClick?: () => void;
}

interface IProps {
    items: (Item | null)[];
    position?: Placement;
    children: ReactNode;
    className?: string;
}

export const ContextMenu: React.FC<IProps> = ({
    items,
    position,
    children,
    className,
}) => {
    const itemStyles = `
        px-4
        py-2
        text-sm
        border
        border-transparent
        border-b-gray-500
        border-opacity-20
        text-left
        no-underline
        whitespace-nowrap
        cursor-pointer
        sm:text-xl
        sm:px-6 sm:py-3
        last:border-none
        hover:bg-opacity-25
    `;

    return (
        <Popup
            position={position}
            trigger={<div className={className}>{children}</div>}
        >
            <div className="theme-glass-effect rounded-md flex flex-col my-2">
                {(items.filter(Boolean) as Item[]).map(
                    ({ label, href, onClick }) =>
                        onClick ? (
                            <div
                                key={label}
                                onClick={onClick}
                                className={itemStyles}
                            >
                                {label}
                            </div>
                        ) : (
                            <a key={label} href={href} className={itemStyles}>
                                {label}
                            </a>
                        )
                )}
            </div>
        </Popup>
    );
};
