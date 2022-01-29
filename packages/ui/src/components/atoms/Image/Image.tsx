import { useEffect, useState } from "react";
import { useTheme } from "styled-components";
import { Loader } from "../Loader";
import {
    StyledContainer,
    StyledErrorIcon,
    StyledErrorMessage,
} from "./Image.styled";

export interface IProps {
    storagePath: string;
    fetchFailedText: string;
    className?: string;
    fetchStorageImage: (path: string) => Promise<string>;
    onClick?: (imageUrl: string) => void;
    onFetchFailed?: (errorMessage: string) => void;
}

export const Image: React.FC<IProps> = ({
    storagePath,
    fetchFailedText,
    className,
    fetchStorageImage,
    onClick,
    onFetchFailed,
}) => {
    const theme = useTheme();

    const [url, setUrl] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isFailed, setIsFailed] = useState<boolean>(false);

    useEffect(() => {
        if (storagePath) {
            fetchStorageImage(storagePath)
                .then((url) => {
                    setUrl(url);
                })
                .catch((error) => {
                    setIsFailed(true);
                    onFetchFailed?.(error);
                })
                .finally(() => {
                    setIsLoading(false);
                });
        } else {
            setIsFailed(true);
            setIsLoading(false);
        }
    }, []);

    return isLoading ? (
        <StyledContainer className={className}>
            <Loader color={theme.colors.grayLight} />
        </StyledContainer>
    ) : isFailed ? (
        <StyledContainer className={className}>
            <StyledErrorIcon name="cross" color="red" />

            <StyledErrorMessage>{fetchFailedText}</StyledErrorMessage>
        </StyledContainer>
    ) : (
        <img
            src={url}
            alt={fetchFailedText}
            className={className}
            onClick={() => onClick?.(url)}
        />
    );
};
