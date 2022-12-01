import useEventListener from "./useEventListener";

export const useExceptionHandler = (
    onException: (exception: { message: string; stack: string }) => void,
) => {
    useEventListener("error", ({ error }: ErrorEvent) => {
        onException({
            message: error.message,
            stack: error.stack,
        });
    });

    return null;
};
