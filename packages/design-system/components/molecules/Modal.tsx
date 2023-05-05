import cx from "classnames";
import { ReactNode } from "react";
import { useTranslation } from "../../hooks";

interface Props {
    title?: string;
    children: ReactNode;
    positionY?: "bottom";
    onClose: () => void;
}

export const Modal: React.FC<Props> = ({
    title,
    children,
    positionY,
    onClose,
}) => {
    const t = useTranslation();

    return (
        <div
            className={cx("w-screen p-3 absolute left-0 z-[999999]", {
                "bottom-0": positionY === "bottom",
            })}
        >
            <div className="theme-glass-effect rounded-lg p-3 pt-2 relative">
                <div
                    className="text-blue-600 p-2 absolute top-0 right-0"
                    onClick={onClose}
                >
                    {t("modal", "closeLabel")}
                </div>

                {title && <p>{title}</p>}

                <div>{children}</div>
            </div>
        </div>
    );
};
