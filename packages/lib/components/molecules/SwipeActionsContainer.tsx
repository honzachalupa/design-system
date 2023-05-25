import cx from "classnames";
import { ReactNode, TouchEvent, useRef, useState } from "react";
import { useClickOutside } from "../../hooks";

interface IAction {
    label: string;
    icon: ReactNode;
    color: string;
    onClick: () => void;
}

interface IProps {
    actions: {
        [key in "left" | "right"]?: IAction[];
    };
    actionWidth?: number;
    className?: string;
    children: ReactNode;
}

const Action: React.FC<
    IAction & {
        width: number;
    }
> = ({ label, icon, color, onClick, width }) => (
    <button
        key={label}
        className="h-full flex flex-col items-center justify-center overflow-hidden"
        style={{
            width,
            background: color,
        }}
        type="button"
        title={label}
        onClick={onClick}
    >
        <div className="w-[20px] aspect-square">{icon}</div>
    </button>
);

export const SwipeActionsContainer: React.FC<IProps> = ({
    actions,
    actionWidth = 60,
    className,
    children,
}) => {
    const [startX, setStartX] = useState<number>(0);
    const [swipedX, setSwipedX] = useState<number>(0);

    const maxLeftX = (actions.left?.length || 0) * actionWidth;
    const maxRightX = (actions.right?.length || 0) * actionWidth;

    const ref = useRef<HTMLDivElement>(null);

    const reset = () => {
        setStartX(0);
        setSwipedX(0);
    };

    const onTouchStart = ({ touches }: TouchEvent<HTMLDivElement>) => {
        const startX_ = Math.round(touches[0].clientX - startX);

        setStartX(startX_);
    };

    const onTouchMove = ({ touches }: TouchEvent<HTMLDivElement>) => {
        const clientX = Math.round(touches[0].clientX);
        const fixedX = Math.min(
            Math.max(clientX - startX, -maxRightX),
            maxLeftX
        );

        setSwipedX(fixedX);
    };

    const onTouchEnd = () => {
        const snapedX = Math.round(swipedX / actionWidth) * actionWidth;

        setStartX(snapedX);
        setSwipedX(snapedX);
    };

    useClickOutside(ref, () => {
        reset();
    });

    return (
        <div
            ref={ref}
            className={cx("relative overflow-x-hidden", className)}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
        >
            {actions.left && swipedX > 0 && (
                <div className="h-full flex absolute left-0 top-0">
                    {actions.left.map(({ onClick, ...rest }) => (
                        <Action
                            {...rest}
                            key={rest.label}
                            width={actionWidth}
                            onClick={() => {
                                onClick();
                                reset();
                            }}
                        />
                    ))}
                </div>
            )}

            <div
                className="relative z-10"
                style={{
                    left: swipedX,
                }}
            >
                {children}
            </div>

            {actions.right && swipedX < 0 && (
                <div className="h-full flex absolute right-0 top-0">
                    {actions.right.map(({ onClick, ...rest }) => (
                        <Action
                            {...rest}
                            key={rest.label}
                            width={actionWidth}
                            onClick={() => {
                                onClick();
                                reset();
                            }}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};
