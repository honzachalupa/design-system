import { Fragment, ReactChild, useState } from "react";
import { StyledContainer } from "./Carousel.styled";

export interface IProps {
    transitionTime?: number;
    slides: {
        backgroundColor?: string;
        renderer: () => ReactChild;
    }[];
    className?: string;
    isIndicatorsShown?: boolean;
    isInfiniteLoop?: boolean;
    isAutoPlayOn?: boolean;
}

export const Carousel: React.FC<IProps> = ({
    transitionTime = 500,
    slides,
    className,
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
        >
            {slides.map(({ renderer }, i) => (
                <Fragment key={i}>{renderer()}</Fragment>
            ))}
        </StyledContainer>
    );
};
