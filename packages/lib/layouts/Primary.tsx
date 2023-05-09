import cx from "classnames";
import { ReactNode } from "react";

interface IProps {
    children: ReactNode;
    className?: string;
}

export const Layout_Primary: React.FC<IProps> = ({ children, className }) => (
    <div className={cx("p-3", className)}>{children}</div>
);
