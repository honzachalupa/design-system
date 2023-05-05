import { useLocalStorage, useLocation } from "@react-hooks-library/core";
import { useEffect } from "react";
import { useTranslation, useUserAgent } from "../../hooks";
import { PlusSquareIcon, ShareIcon } from "../../icons";
import { Modal } from "../molecules/Modal";

export const PwaInstallationPrompt: React.FC = ({
    isDebug,
}: {
    isDebug?: boolean;
}) => {
    const location = useLocation();
    const userAgent = useUserAgent();
    const t = useTranslation();

    const [wasShown, setWasShown] = useLocalStorage("pwaPromptShown", false);

    const isEnabledForTheDevice =
        isDebug ||
        (userAgent?.browser.name === "Safari" &&
            (userAgent?.device.model === "iPhone" ||
                userAgent?.device.model === "iPad"));

    const handleClose = () => {
        setWasShown(true);
    };

    useEffect(() => {
        if (!isDebug && !wasShown && location?.search?.includes("pwa")) {
            handleClose();
        }
    }, [location]);

    const steps = [
        {
            content: t("pwaPrompt", "item1.content"),
            icon: <ShareIcon className="w-6 fill-blue-600" />,
        },
        {
            content: t("pwaPrompt", "item2.content"),
            icon: <PlusSquareIcon className="w-6 p-[2px]" />,
        },
    ];

    return !wasShown && isEnabledForTheDevice ? (
        <Modal
            title={t("pwaPrompt", "title")}
            positionY="bottom"
            onClose={handleClose}
        >
            <p className="text-sm my-5">{t("pwaPrompt", "content")}</p>

            <ul className="text-xs">
                {steps.map(({ content, icon }, i) => (
                    <li
                        key={content}
                        className="flex items-center mb-3 last:mb-0"
                    >
                        {icon}

                        <p className="ml-2">
                            {i + 1}. {content}
                        </p>
                    </li>
                ))}
            </ul>
        </Modal>
    ) : null;
};
