import { getTestId } from "@honzachalupa/utils";
import { MouseEvent } from "react";
import { IIconProps } from "../Icon";
import { StyledButton, StyledIcon } from "./Button.styled";
import { EButtonTypes, TButtonColors, TButtonSizes } from "./Button.types";

export interface IProps {
    label: string;
    type?: EButtonTypes;
    color?: TButtonColors;
    size?: TButtonSizes;
    icon?: Omit<IIconProps, "onClick">;
    testId?: string;
    className?: string;
    isDisabled?: boolean;
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export const Button: React.FC<IProps> = ({
    label,
    type = "button",
    color = "transparent",
    size = "medium",
    icon,
    testId,
    className,
    isDisabled = false,
    onClick = () => {},
}) => (
    <StyledButton
        title={label}
        type={type}
        color={color}
        size={size}
        hasIcon={!!icon}
        className={className}
        isDisabled={isDisabled}
        onClick={onClick}
        {...getTestId(testId || Button.name)}
    >
        {icon ? <StyledIcon {...icon} /> : label}
    </StyledButton>
);
