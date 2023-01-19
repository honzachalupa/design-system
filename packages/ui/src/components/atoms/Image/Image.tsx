import { getTestId } from "@honzachalupa/utils";
import { useEffect, useState } from "react";
import { IComponentProps } from "../../../interfaces/component";
import { Loader } from "../Loader";
import {
    StyledContainer,
    StyledErrorIcon,
    StyledErrorMessage,
    StyledImage,
} from "./Image.styled";

export interface IProps extends IComponentProps {
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
    testId,
    onClick,
    onFetchFailed,
}) => {
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

    const props = {
        className,
        ...getTestId("Image", testId),
    };

    return isLoading ? (
        <StyledContainer {...props}>
            <Loader />
        </StyledContainer>
    ) : isFailed ? (
        <StyledContainer {...props}>
            <StyledErrorIcon name="cross" color="red" />

            <StyledErrorMessage>{fetchFailedText}</StyledErrorMessage>
        </StyledContainer>
    ) : (
        <StyledImage
            src={url}
            alt={fetchFailedText}
            {...props}
            onClick={() => onClick?.(url)}
        />
    );
};
