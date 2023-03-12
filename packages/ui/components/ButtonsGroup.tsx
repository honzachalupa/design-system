import cx from "classnames";
import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    className?: string;
}

export const ButtonsGroup: React.FC<Props> = ({ children, className }) => (
    <div className={cx("[&>*:not(:last-child)]:mr-2", className)}>
        {children}
    </div>
);
