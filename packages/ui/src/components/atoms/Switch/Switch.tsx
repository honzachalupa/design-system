import ReactSwitch from "react-switch";
import { StyledContainer, StyledLabel } from "./Switch.styled";

export interface IProps {
    checkedText?: string;
    uncheckedText?: string;
    isChecked: boolean;
    onChange: (isChecked: boolean) => void;
}

export const Switch: React.FC<IProps> = ({
    checkedText,
    uncheckedText,
    isChecked,
    onChange,
}) => (
    <StyledContainer>
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
