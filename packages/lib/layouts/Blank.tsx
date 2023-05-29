import cx from "classnames";
import { ReactNode } from "react";

export interface IProps {
    children: ReactNode;
    className?: string;
}

export const Blank: React.FC<IProps> = ({ children, className }) => (
    <div className={cx("h-full p-3", className)}>{children}</div>
);
