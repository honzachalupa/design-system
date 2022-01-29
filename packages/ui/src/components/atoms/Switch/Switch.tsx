import ReactSwitch from "react-switch";
import { StyledContainer, StyledLabel } from "./Switch.styled";

export interface IProps {
    label?: string;
    isChecked: boolean;
    onChange: (isChecked: boolean) => void;
}

export const Switch: React.FC<IProps> = ({ label, isChecked, onChange }) => (
    <StyledContainer>
        {label && <StyledLabel>{label}</StyledLabel>}

        <ReactSwitch
            width={45}
            height={20}
            checked={isChecked}
            onChange={() => onChange(!isChecked)}
        />
    </StyledContainer>
);
