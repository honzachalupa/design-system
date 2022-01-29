import { ITextProps, StyledText } from "./Text.styled";

export const Text: React.FC<ITextProps> = ({
    children,
    color,
    sizeRem,
    weight,
    alignment,
    className,
}) => (
    <StyledText
        color={color}
        sizeRem={sizeRem}
        weight={weight}
        alignment={alignment}
        className={className}
    >
        {children}
    </StyledText>
);
