import useEventListener from "./useEventListener";

interface IProps {
    onException: (exception: { message: string; stack: string }) => void;
}

export const useExceptionHandler = ({ onException }: IProps) => {
    useEventListener("error", ({ error }: ErrorEvent) => {
        onException({
            message: error.message,
            stack: error.stack,
        });
    });

    return null;
};
