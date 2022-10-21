import { getTestId } from "@honzachalupa/utils";
import { ReactElement, useEffect, useState } from "react";
import { IComponentProps } from "../../../interfaces/component";
import {
    StyledDocumentViewer,
    StyledDocumentViewerContainer,
    StyledLoader,
} from "./PdfDocumentPreview.styled";

export interface IProps extends IComponentProps {
    document: ReactElement;
}

export const PdfDocumentPreview: React.FC<IProps> = ({
    document,
    className,
    testId,
}) => {
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true);
        }, 2000);
    }, []);

    return (
        <StyledDocumentViewerContainer
            className={className}
            {...getTestId("PdfDocumentPreview", testId)}
        >
            {!isLoaded && <StyledLoader />}

            <StyledDocumentViewer loaded={isLoaded} showToolbar={false}>
                {document}
            </StyledDocumentViewer>
        </StyledDocumentViewerContainer>
    );
};
