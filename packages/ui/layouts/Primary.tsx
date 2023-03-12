import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

export const Layout_Primary: React.FC<Props> = ({ children }) => (
    <div className="p-3">{children}</div>
);
