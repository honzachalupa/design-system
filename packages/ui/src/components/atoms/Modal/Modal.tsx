import {
    forwardRef,
    ReactNode,
    RefAttributes,
    useEffect,
    useImperativeHandle,
    useState,
} from "react";
import { useTheme } from "styled-components";
import {
    StyledContainer,
    StyledContent,
    StyledIcon,
    StyledOverlay,
} from "./Modal.styled";

export interface IModalRefProps {
    isOpened: boolean;
    set: (value: boolean) => void;
    show: () => void;
    hide: () => void;
    toggle: () => void;
}

export interface IProps {
    width?: number;
    height?: number;
    closeButtonText: string;
    children: ReactNode;
    setIsScrollDisabled?: (value: boolean) => void;
    onClose?: () => void;
}

export const Modal: React.FC<IProps & RefAttributes<IModalRefProps>> =
    forwardRef(
        (
            {
                width,
                height,
                closeButtonText,
                children,
                setIsScrollDisabled,
                onClose,
            },
            ref,
        ) => {
            const theme = useTheme();

            const [isOpened, setIsOpened] = useState<boolean>(false);

            const handleClose = () => {
                if (onClose) {
                    onClose();
                }

                setIsOpened(false);
            };

            useEffect(() => {
                if (isOpened) {
                    setIsScrollDisabled?.(true);
                } else {
                    setIsScrollDisabled?.(false);
                }
            }, [isOpened]);

            useImperativeHandle(
                ref,
                (): IModalRefProps => ({
                    isOpened,
                    set: setIsOpened,
                    show: () => setIsOpened(true),
                    hide: () => setIsOpened(false),
                    toggle: () => setIsOpened((prevState) => !prevState),
                }),
            );

            return isOpened ? (
                <StyledContainer>
                    <StyledOverlay onClick={handleClose} />

                    <StyledContent width={width} height={height}>
                        <StyledIcon
                            label={closeButtonText}
                            name="cross"
                            color={theme.colors.blueDark}
                            onClick={handleClose}
                        />

                        {children}
                    </StyledContent>
                </StyledContainer>
            ) : null;
        },
    );
