import { PDFViewer } from "@react-pdf/renderer";
import styled from "styled-components";
import { Loader } from "../../atoms/Loader";

export const StyledDocumentViewerContainer = styled.div`
    overflow: hidden;
    pointer-events: none;
    position: relative;
`;

export const StyledLoader = styled(Loader)`
    width: 100%;
    height: 100%;
    position: absolute;
`;

export const StyledDocumentViewer = styled(PDFViewer)<{ isLoaded: boolean }>`
    width: 100%;
    height: 100%;
    aspect-ratio: 1.44/1;
    border: none;
    margin: -5px;
    opacity: ${({ isLoaded }) => (isLoaded ? 1 : 0)};
`;
