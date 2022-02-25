import { Browser as Logtail } from "@logtail/js";
import { IAbstractObject } from "../../types";
import { cleanObject } from "../data";

interface IProps {
    logtail?: {
        token: string;
    };
    levelsMap: {
        [key in TLogEntryLevels]: string[];
    };
    appVersion: string;
}

export type TLogEntryLevels = "info" | "warn" | "error";

export interface ILogProps {
    code: string;
    error?: Error;
    scope: string;
    message?: string;
    data?: IAbstractObject;
    isSilent?: boolean;
}

export const initializeLogger = ({
    logtail,
    levelsMap,
    appVersion,
}: IProps) => {
    const logger = logtail?.token ? new Logtail(logtail.token) : null;

    if (!logger) {
        console.info("Logger initialized without Logtail connection.");
    }

    const log = ({
        code,
        error,
        scope,
        message,
        data,
        isSilent,
    }: ILogProps) => {
        let level = "error" as TLogEntryLevels;

        Object.entries(levelsMap).forEach(([key, values]) => {
            if (values.includes(code)) {
                level = key as TLogEntryLevels;
            }
        });

        const payload = {
            code,
            scope,
            stack: error?.stack,
            message: message || error?.message || `${scope} - ${code}` || "",
            level,
            version: appVersion,
            data: data && cleanObject(data),
        };

        if (logger) {
            logger[level](payload.message, payload as any);
        }

        if (!isSilent) {
            console[level](payload);
        }
    };

    return {
        log,
    };
};
