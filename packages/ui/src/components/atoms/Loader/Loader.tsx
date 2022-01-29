import { useTheme } from "styled-components";
import {
    StyledContainer,
    StyledIcon,
    StyledIconContainer,
    StyledLabel,
    StyledOverlay,
} from "./Loader.styled";

export interface IProps {
    message?: string;
    color?: string;
    className?: string;
    isFullscreen?: boolean;
}

const LoadingIndicator: React.FC<IProps> = ({ message, color, className }) => {
    const theme = useTheme();

    return (
        <StyledContainer className={className}>
            <StyledIconContainer>
                <StyledIcon
                    name="loading"
                    color={color || theme.colors.accentSecondary}
                    animationDurationSeconds={1}
                />

                <StyledIcon
                    name="loading"
                    color={color || theme.colors.accentSecondary}
                    animationDurationSeconds={1.5}
                />
            </StyledIconContainer>

            {message && <StyledLabel>{message}</StyledLabel>}
        </StyledContainer>
    );
};

export const Loader: React.FC<IProps> = ({
    message,
    color,
    className,
    isFullscreen,
}) =>
    isFullscreen ? (
        <StyledOverlay>
            <LoadingIndicator
                message={message}
                color={color}
                className={className}
                isFullscreen={isFullscreen}
            />
        </StyledOverlay>
    ) : (
        <LoadingIndicator />
    );
