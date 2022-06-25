import { getTestId } from "@honzachalupa/utils";
import { createElement } from "react";
import { IComponentProps } from "../../../interfaces/component";
import { icons } from "./Icon.imports";
import { StyledContainer } from "./Icon.styled";

export type TIconName = keyof typeof icons;

export interface IIconProps extends IComponentProps {
    name: TIconName;
    color?: string;
    size?: number;
    label?: string;
    onClick?: () => void;
}

export const Icon: React.FC<IIconProps> = ({
    name,
    color = "black",
    size,
    label,
    className,
    testId,
    onClick = () => {},
}) => (
    <StyledContainer
        color={color}
        size={size}
        title={label}
        className={className}
        onClick={onClick}
        {...getTestId("Icon", testId)}
    >
        {createElement(icons[name])}
    </StyledContainer>
);
