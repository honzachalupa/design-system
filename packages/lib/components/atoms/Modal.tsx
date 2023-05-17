import {
    ReactNode,
    forwardRef,
    useEffect,
    useImperativeHandle,
    useRef,
    useState,
} from "react";

interface IProps {
    children: ReactNode;
    onClose?: () => void;
}

export interface IModalRefProps {
    showModal: () => void;
    close: () => void;
}

export const Modal: React.FC<IProps> = forwardRef(
    ({ children, onClose }, forwardedRef) => {
        const ref = useRef<HTMLDialogElement>(null);

        const [isOpened, setIsOpened] = useState<boolean>();

        useEffect(() => {
            if (isOpened) {
                ref.current?.showModal();

                document.body.classList.add("modal-open");
            } else {
                ref.current?.close();

                document.body.classList.remove("modal-open");
            }
        }, [isOpened]);

        useImperativeHandle(
            forwardedRef,
            (): IModalRefProps => ({
                showModal: () => setIsOpened(true),
                close: () => setIsOpened(false),
            })
        );

        return (
            <dialog
                ref={ref}
                className="theme-page-background rounded-md z-[9]"
            >
                {children}
            </dialog>
        );
    }
);

Modal.displayName = "Modal";
