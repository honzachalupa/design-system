import { useEffect, useState } from "react";
import UAParser from "ua-parser-js";

type IUseUserAgentReturn = Omit<UAParser.IResult, "ua">;

export const useUserAgent = (uastring = window.navigator.userAgent) => {
    let [data, setData] = useState<IUseUserAgentReturn | null>(null);

    useEffect(() => {
        let didRun = true;

        try {
            const uaParser = new UAParser.UAParser();

            uaParser.setUA(uastring);

            const payload = {
                os: uaParser.getOS(),
                browser: uaParser.getBrowser(),
                cpu: uaParser.getCPU(),
                device: uaParser.getDevice(),
                engine: uaParser.getEngine(),
            };

            if (didRun) {
                setData(payload);
            }
        } catch (err) {
            if (didRun) {
                setData(null);
            }
        }

        return () => {
            didRun = false;
        };
    }, [uastring]);

    return data;
};
