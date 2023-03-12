import cx from "classnames";

export type ButtonSize = "small" | "medium";

export interface ButtonPropsCore {
    label: string;
    size?: ButtonSize;
    className?: string;
    isDisabled?: boolean;
}

interface Props extends ButtonPropsCore {
    onClick: (e: any) => void;
}

export const getSharedButtonStyle = (size: ButtonSize, isDisabled?: boolean) =>
    cx("rounded-sm inline-block", {
        "px-3.5 py-1.5 text-sm": size === "small",
        "px-5 py-2 text-md": size === "medium",
        "bg-gray-300": !isDisabled,
        "bg-gray-200 text-gray-400 cursor-not-allowed": isDisabled,
    });

export const Button: React.FC<Props> = ({
    label,
    size = "medium",
    className,
    isDisabled,
    onClick,
}) => (
    <button
        type="button"
        className={cx(getSharedButtonStyle(size, isDisabled), className)}
        disabled={isDisabled}
        onClick={onClick}
    >
        {label}
    </button>
);
