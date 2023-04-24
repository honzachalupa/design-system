interface Props {
    progress?: {
        value: number;
        max: number;
    };
    isPercentage?: boolean;
}

export const LoadingIndicator: React.FC<Props> = ({
    progress,
    isPercentage,
}) => {
    const progressLabel =
        progress && isPercentage
            ? `${Math.round((progress.value / progress.max) * 100)}%`
            : progress
            ? `${progress.value}/${progress.max}`
            : null;

    return (
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
    );
};
