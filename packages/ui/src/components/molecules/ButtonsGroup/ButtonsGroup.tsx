import { IProps, StyledContainer } from "./ButtonsGroup.styled";

export const ButtonsGroup: React.FC<IProps> = ({
    children,
    alignment,
    orientation,
    className,
}) => (
    <StyledContainer
        alignment={alignment}
        orientation={orientation}
        className={className}
    >
        {children}
    </StyledContainer>
);
