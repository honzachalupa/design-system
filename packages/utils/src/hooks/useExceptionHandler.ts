import useEventListener from "./useEventListener";

export const useExceptionHandler = (
    onException: (exception: ErrorEvent["error"]) => void,
) => {
    useEventListener("error", ({ error }: ErrorEvent) => {
        onException(error);
    });

    return null;
};
