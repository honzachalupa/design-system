import { getTestId } from "@honzachalupa/utils";
import { ITextProps, StyledText } from "./Text.styled";

export const Text: React.FC<ITextProps> = ({
    children,
    color,
    sizeRem,
    weight,
    alignment,
    className,
    testId,
}) => (
    <StyledText
        color={color}
        sizeRem={sizeRem}
        weight={weight}
        alignment={alignment}
        className={className}
        {...getTestId("Text", testId)}
    >
        {children}
    </StyledText>
);
