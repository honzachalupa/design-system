import LogRocket from "logrocket";
import { useEffect } from "react";

export const useLogRocket = (
    logRocketId: string,
    userId: string | undefined,
    isCookiesAllowed: boolean,
) => {
    useEffect(() => {
        if (isCookiesAllowed) {
            LogRocket.init(logRocketId);
        }
    }, [isCookiesAllowed]);

    useEffect(() => {
        if (userId && isCookiesAllowed) {
            LogRocket.identify(userId);
        }
    }, [userId]);

    return null;
};
