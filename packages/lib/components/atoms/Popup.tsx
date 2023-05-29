"use client";

import { Placement } from "@popperjs/core";
import {
    ReactElement,
    ReactNode,
    cloneElement,
    useEffect,
    useState,
} from "react";
import { usePopper } from "react-popper";
import { useClickOutside, useToggle } from "../../hooks";
import { Portal } from "../../utils/Portal";

interface IProps {
    position?: Placement;
    trigger: ReactNode;
    children: ReactNode;
}

export const Popup: React.FC<IProps> = ({
    position = "bottom-start",
    trigger: triggerContent,
    children,
}) => {
    const { bool: isShown, setTrue: show, setFalse: hide } = useToggle(false);
    const [referenceElement, setReferenceElement] = useState<any>(null);
    const [popperElement, setPopperElement] = useState<any>(null);
    const [isExpandedTimeouted, setIsExpandedTimeouted] = useState<boolean>();

    const { attributes, styles } = usePopper(referenceElement, popperElement, {
        placement: position,
    });

    const handleShow = () => {
        if (!isExpandedTimeouted) {
            show();
        }
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsExpandedTimeouted(isShown);
        }, 200);

        return () => {
            clearInterval(timeout);
        };
    }, [isShown]);

    useClickOutside(popperElement, () => {
        hide();
    });

    const trigger = cloneElement(triggerContent as ReactElement, {
        ref: setReferenceElement,
        onClick: handleShow,
    });

    return (
        <>
            {trigger}

            {isShown ? (
                <Portal>
                    <div
                        ref={setPopperElement}
                        style={{ zIndex: 9, ...styles.popper }}
                        {...attributes.popper}
                    >
                        {children}
                    </div>
                </Portal>
            ) : null}
        </>
    );
};
