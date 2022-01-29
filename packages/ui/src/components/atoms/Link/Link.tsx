import { MouseEvent } from "react";
import {
    EButtonTypes,
    TButtonColors,
    TButtonSizes,
} from "../Button/Button.types";
import { StyledLink } from "./Link.styled";

export interface IProps {
    label: string;
    type?: EButtonTypes | "submit";
    color?: TButtonColors;
    size?: TButtonSizes;
    className?: string;
    isDisabled?: boolean;
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export const Link: React.FC<IProps> = ({
    label,
    type = "button",
    color = "accentSecondary",
    size = "medium",
    className,
    isDisabled = false,
    onClick = () => {},
}) => (
    <StyledLink
        label={label}
        type={type}
        color={color}
        size={size}
        className={className}
        isDisabled={isDisabled}
        onClick={onClick}
    />
);
