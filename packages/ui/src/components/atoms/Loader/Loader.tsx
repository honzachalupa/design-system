import { getTestId } from "@honzachalupa/utils";
import { useTheme } from "styled-components";
import { IComponentProps } from "../../../interfaces/component";
import {
    StyledContainer,
    StyledIcon,
    StyledIconContainer,
    StyledLabel,
    StyledOverlay,
} from "./Loader.styled";

export interface IProps extends IComponentProps {
    message?: string;
    color?: string;
    isFullscreen?: boolean;
}

const LoadingIndicator: React.FC<IProps> = ({
    message,
    color,
    className,
    testId,
}) => {
    const theme = useTheme();

    return (
        <StyledContainer
            className={className}
            {...getTestId(Loader.name, testId)}
        >
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
    testId,
    isFullscreen,
}) =>
    isFullscreen ? (
        <StyledOverlay>
            <LoadingIndicator
                message={message}
                color={color}
                className={className}
                testId={testId}
                isFullscreen={isFullscreen}
            />
        </StyledOverlay>
    ) : (
        <LoadingIndicator />
    );
