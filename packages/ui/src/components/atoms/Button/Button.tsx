import { getTestId } from "@honzachalupa/utils";
import { MouseEvent } from "react";
import { IComponentProps } from "../../../interfaces/component";
import { IIconProps } from "../Icon";
import { StyledButton, StyledIcon } from "./Button.styled";
import { EButtonTypes, TButtonColors, TButtonSizes } from "./Button.types";

export interface IProps extends IComponentProps {
    label: string;
    type?: EButtonTypes;
    color?: TButtonColors;
    size?: TButtonSizes;
    icon?: Omit<IIconProps, "onClick">;
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
        {...getTestId("Button", testId)}
    >
        {icon ? <StyledIcon {...icon} /> : label}
    </StyledButton>
);
