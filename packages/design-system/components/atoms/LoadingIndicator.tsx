import cx from "classnames";
import { useEffect } from "react";
import { HashLoader } from "react-spinners";

interface Props {
    message?: string;
    isFullscreen?: boolean;
}

export const LoadingIndicator: React.FC<Props> = ({
    message,
    isFullscreen,
}) => {
    useEffect(() => {
        if (message && !isFullscreen) {
            throw new Error(
                "Message is not allowed when isFullscreen is false."
            );
        }
    }, [message, isFullscreen]);

    return (
        <div
            className={cx({
                "w-screen h-screen theme-glass-effect flex flex-col items-center justify-center absolute top-0 left-0 z-20":
                    isFullscreen,
            })}
        >
            <div className="w-[50px] aspect-square">
                <HashLoader color="#e11d48" />
            </div>

            {message && isFullscreen && (
                <p className="text-md lg:text-lg text-center mt-4 px-[10vw]">
                    {message}
                </p>
            )}
        </div>
    );
};

/* import cx from "classnames";

interface Props {
    message?: string;
    progress?: {
        value: number;
        max: number;
    };
    isPercentage?: boolean;
    isFullscreen?: boolean;
}

export const LoadingIndicator: React.FC<Props> = ({
    message,
    progress,
    isPercentage,
    isFullscreen,
}) => {
    const progressLabel =
        progress && isPercentage
            ? `${Math.round((progress.value / progress.max) * 100)}%`
            : progress
            ? `${progress.value}/${progress.max}`
            : null;

    return (
        <div
            className={cx({
                "w-screen h-screen theme-page-background flex flex-col items-center justify-center absolute top-0 left-0 z-20":
                    isFullscreen,
            })}
        >
            <div className="w-[50px] aspect-square m-2 relative">
                <div className="w-full h-full absolute">
                    <div
                        className="w-full h-full bg-rose-500 rounded-full animate-spin absolute"
                        style={{ transformOrigin: 22 }}
                    />
                </div>

                <div className="w-full h-full rotate-[120deg] absolute">
                    <div
                        className="w-full h-full bg-blue-500 rounded-full animate-spin absolute"
                        style={{ transformOrigin: 22 }}
                    />
                </div>

                <div className="w-full h-full rotate-[240deg] absolute">
                    <div
                        className="w-full h-full bg-green-500 rounded-full animate-spin absolute"
                        style={{ transformOrigin: 22 }}
                    />
                </div>

                <div className="w-[calc(100%+2px)] h-[calc(100%+2px)] theme-page-background rounded-full text-opacity-80 flex items-center justify-center absolute -top-[1px] -left-[1px]">
                    {progressLabel}
                </div>
            </div>

            {message && isFullscreen && (
                <p className="text-md lg:text-lg text-center mt-2 px-[10vw]">
                    {message}
                </p>
            )}
        </div>
    );
}; */
