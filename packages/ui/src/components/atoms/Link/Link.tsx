import { getTestId } from "@honzachalupa/utils";
import { MouseEvent } from "react";
import { IComponentProps } from "../../../interfaces/component";
import { EButtonTypes, TButtonSizes } from "../Button/Button.types";
import { StyledLink } from "./Link.styled";

export interface IProps extends IComponentProps {
    label: string;
    type?: EButtonTypes | "submit";
    color?: string;
    size?: TButtonSizes;
    isDisabled?: boolean;
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export const Link: React.FC<IProps> = ({
    label,
    type = "button",
    color = "accentSecondary",
    size = "medium",
    className,
    testId,
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
        {...getTestId("Link", testId)}
    />
);
