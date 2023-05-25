import { ReactNode } from "react";
import ReactDOM from "react-dom";

export const Portal: React.FC<{
    targetElement?: Element | null;
    children: ReactNode;
}> = ({ targetElement, children }) =>
    ReactDOM.createPortal(children, targetElement || document.body);
