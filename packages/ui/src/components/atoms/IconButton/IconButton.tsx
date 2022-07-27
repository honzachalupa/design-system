import { getTestId } from "@honzachalupa/utils";
import { MouseEvent } from "react";
import { IComponentProps } from "../../../interfaces/component";
import { EButtonTypes, TButtonSizes } from "../Button";
import { Icon, IIconProps } from "../Icon";
import { StyledIconButton } from "./IconButton.styled";

export interface IProps extends IComponentProps {
    label?: string;
    type?: EButtonTypes;
    color?: string;
    size?: TButtonSizes;
    icon: Omit<IIconProps, "onClick">;
    isDisabled?: boolean;
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export const IconButton: React.FC<IProps> = ({
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
    <StyledIconButton
        title={label}
        type={type}
        color={color}
        size={size}
        className={className}
        isDisabled={isDisabled}
        onClick={onClick}
        {...getTestId("IconButton", testId)}
    >
        <Icon {...icon} />
    </StyledIconButton>
);
