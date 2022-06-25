import { getTestId } from "@honzachalupa/utils";
import { Fragment, ReactChild, useState } from "react";
import { IComponentProps } from "../../../interfaces/component";
import { StyledContainer } from "./Carousel.styled";

export interface IProps extends IComponentProps {
    transitionTime?: number;
    slides: {
        backgroundColor?: string;
        renderer: () => ReactChild;
    }[];
    isIndicatorsShown?: boolean;
    isInfiniteLoop?: boolean;
    isAutoPlayOn?: boolean;
}

export const Carousel: React.FC<IProps> = ({
    transitionTime = 500,
    slides,
    className,
    testId,
    isIndicatorsShown = false,
    isInfiniteLoop = false,
    isAutoPlayOn = false,
}) => {
    const [index, setIndex] = useState<number>(0);

    return (
        <StyledContainer
            interval={10000}
            transitionTime={transitionTime}
            backgroundColor={
                slides.length > 0 ? slides[index].backgroundColor : undefined
            }
            autoPlay={isAutoPlayOn}
            infiniteLoop={isInfiniteLoop}
            className={className}
            emulateTouch
            stopOnHover
            showStatus={false}
            showIndicators={isIndicatorsShown}
            showThumbs={false}
            onChange={setIndex}
            {...getTestId("Carousel", testId)}
        >
            {slides.map(({ renderer }, i) => (
                <Fragment key={i}>{renderer()}</Fragment>
            ))}
        </StyledContainer>
    );
};
