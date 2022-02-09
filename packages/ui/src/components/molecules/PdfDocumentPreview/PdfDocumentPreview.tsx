import { ReactElement, useEffect, useState } from "react";
import { useTheme } from "styled-components";
import {
    StyledDocumentViewer,
    StyledDocumentViewerContainer,
    StyledLoader,
} from "./PdfDocumentPreview.styled";

export interface IProps {
    document: ReactElement;
}

export const PdfDocumentPreview: React.FC<IProps> = ({ document }) => {
    const theme = useTheme();

    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true);
        }, 2000);
    }, []);

    return (
        <StyledDocumentViewerContainer>
            {!isLoaded && <StyledLoader color={theme.colors.grayLight} />}

            <StyledDocumentViewer loaded={isLoaded} showToolbar={false}>
                {document}
            </StyledDocumentViewer>
        </StyledDocumentViewerContainer>
    );
};
