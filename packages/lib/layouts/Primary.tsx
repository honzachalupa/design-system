import cx from "classnames";
import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    className?: string;
}

export const Layout_Primary: React.FC<Props> = ({ children, className }) => (
    <div className={cx("p-3", className)}>{children}</div>
);
