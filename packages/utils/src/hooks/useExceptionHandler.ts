import useEventListener from "./useEventListener";

interface IProps {
    onException: (exception: { message: string; scope: string }) => void;
}

export const useExceptionHandler = ({ onException }: IProps) => {
    useEventListener("error", ({ error }: ErrorEvent) => {
        onException({
            message: error.message,
            scope: error.scope,
        });
    });

    return null;
};
