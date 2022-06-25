import { getTestId } from "@honzachalupa/utils";
import ReactSwitch from "react-switch";
import { IComponentProps } from "../../../interfaces/component";
import { StyledContainer, StyledLabel } from "./Switch.styled";

export interface IProps extends IComponentProps {
    checkedText?: string;
    uncheckedText?: string;
    isChecked: boolean;
    onChange: (isChecked: boolean) => void;
}

export const Switch: React.FC<IProps> = ({
    checkedText,
    uncheckedText,
    isChecked,
    className,
    testId,
    onChange,
}) => (
    <StyledContainer className={className} {...getTestId("Switch", testId)}>
        {isChecked && checkedText && <StyledLabel>{checkedText}</StyledLabel>}
        {!isChecked && uncheckedText && (
            <StyledLabel>{uncheckedText}</StyledLabel>
        )}

        <ReactSwitch
            width={45}
            height={20}
            checked={isChecked}
            onChange={() => onChange(!isChecked)}
        />
    </StyledContainer>
);
