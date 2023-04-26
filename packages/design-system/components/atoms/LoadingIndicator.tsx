import cx from "classnames";

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
                        className="w-full h-full bg-red-500 rounded-full animate-spin absolute"
                        style={{ transformOrigin: 23 }}
                    />
                </div>

                <div className="w-full h-full rotate-[120deg] absolute">
                    <div
                        className="w-full h-full bg-blue-500 rounded-full animate-spin absolute"
                        style={{ transformOrigin: 23 }}
                    />
                </div>

                <div className="w-full h-full rotate-[240deg] absolute">
                    <div
                        className="w-full h-full bg-green-500 rounded-full animate-spin absolute"
                        style={{ transformOrigin: 23 }}
                    />
                </div>

                <div className="w-full h-full theme-page-background rounded-full text-opacity-80 flex items-center justify-center absolute">
                    {progressLabel}
                </div>
            </div>

            {message && isFullscreen && (
                <p className="text-xs md:text-md lg:text-lg accent-foreground mt-2">
                    {message}
                </p>
            )}
        </div>
    );
};
