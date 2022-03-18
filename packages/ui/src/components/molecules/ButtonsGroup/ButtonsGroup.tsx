import { getTestId } from "@honzachalupa/utils";
import { IProps, StyledContainer } from "./ButtonsGroup.styled";

export const ButtonsGroup: React.FC<IProps> = ({
    children,
    alignment,
    orientation,
    className,
    testId,
}) => (
    <StyledContainer
        alignment={alignment}
        orientation={orientation}
        className={className}
        {...getTestId(ButtonsGroup.name, testId)}
    >
        {children}
    </StyledContainer>
);
