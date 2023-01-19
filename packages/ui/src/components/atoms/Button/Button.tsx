import { getTestId } from "@honzachalupa/utils";
import { MouseEvent } from "react";
import { IComponentProps } from "../../../interfaces/component";
import { IIconProps } from "../Icon";
import { StyledButton, StyledIcon } from "./Button.styled";
import { EButtonTypes, TButtonSizes } from "./Button.types";

export interface IProps extends IComponentProps {
    label: string;
    type?: EButtonTypes;
    color?: string;
    size?: TButtonSizes;
    icon?: Omit<IIconProps, "onClick">;
    isDisabled?: boolean;
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export const Button: React.FC<IProps> = ({
    label,
    type = "button",
    color = "default",
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
        className={className}
        isDisabled={isDisabled}
        disabled={isDisabled}
        onClick={onClick}
        {...getTestId("Button", testId)}
    >
        {/* @ts-ignore */}
        {icon && <StyledIcon size={size} {...icon} />}

        <span>{label}</span>
    </StyledButton>
);
