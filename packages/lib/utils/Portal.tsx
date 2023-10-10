import { ReactNode } from "react";
import { createPortal } from "react-dom";

export const Portal: React.FC<{
    targetElement?: Element | null;
    children: ReactNode;
}> = ({ targetElement, children }) =>
    createPortal(children, targetElement || document.body);
