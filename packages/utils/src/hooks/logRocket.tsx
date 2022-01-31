import LogRocket from "logrocket";
import { useEffect } from "react";

export const useLogRocket = ({
    token,
    userId,
    isEnabled,
}: {
    token: string;
    userId: string | undefined;
    isEnabled: boolean;
}) => {
    useEffect(() => {
        if (isEnabled) {
            LogRocket.init(token);
        }
    }, [isEnabled]);

    useEffect(() => {
        if (userId && isEnabled) {
            LogRocket.identify(userId);
        }
    }, [userId]);

    return null;
};
