import { getTestId } from "@honzachalupa/utils";
import { useTheme } from "styled-components";
import { IComponentProps } from "../../../interfaces/component";
import {
    StyledContainer,
    StyledIcon,
    StyledIconContainer,
    StyledLabel,
    StyledOverlay,
    TLoaderSizes,
} from "./Loader.styled";

export interface IProps extends IComponentProps {
    message?: string;
    size?: TLoaderSizes;
    isFullscreen?: boolean;
}

const Children: React.FC<IProps & { color: string }> = ({
    message,
    size,
    color,
    className,
    testId,
}) => {
    return (
        <StyledContainer
            size={size}
            className={className}
            {...getTestId("Loader", testId)}
        >
            <StyledIconContainer>
                <StyledIcon
                    name="loading"
                    color={color}
                    animationDurationSeconds={1}
                />

                <StyledIcon
                    name="loading"
                    color={color}
                    animationDurationSeconds={1.5}
                />
            </StyledIconContainer>

            {message && <StyledLabel>{message}</StyledLabel>}
        </StyledContainer>
    );
};

export const Loader: React.FC<IProps> = ({
    message,
    className,
    testId,
    isFullscreen,
}) => {
    const theme = useTheme();

    const color = theme.loader?.color || theme.colors.accentSecondary;

    return isFullscreen ? (
        <StyledOverlay>
            <Children
                message={message}
                color={color}
                className={className}
                testId={testId}
                isFullscreen={isFullscreen}
            />
        </StyledOverlay>
    ) : (
        <Children color={color} className={className} testId={testId} />
    );
};
