import { getTestId } from "@honzachalupa/utils";
import { ReactNode, useEffect, useState } from "react";
import { IComponentProps } from "../../../interfaces/component";
import {
    StyledContainer,
    StyledContent,
    StyledContentContainer,
    StyledHeaderButton,
} from "./TabsView.styled";

export interface IProps extends IComponentProps {
    labels: string[];
    children: ReactNode[];
    defaultIndex?: number;
    onChange?: (index: number) => void;
}

export const TabsView: React.FC<IProps> = ({
    labels,
    children,
    defaultIndex = 0,
    className,
    testId,
    onChange,
}) => {
    const [index, setIndex] = useState<number>(defaultIndex);

    useEffect(() => {
        onChange?.(index);
    }, [index]);

    return (
        <StyledContainer
            className={className}
            {...getTestId("TabsView", testId)}
        >
            <header>
                {labels.map((label, i) => (
                    <StyledHeaderButton
                        key={i}
                        isSelected={index === i}
                        onClick={() => setIndex(i)}
                    >
                        {label}
                    </StyledHeaderButton>
                ))}
            </header>

            <StyledContentContainer>
                {children.map((children, i) => (
                    <StyledContent key={i} isVisible={index === i}>
                        {children}
                    </StyledContent>
                ))}
            </StyledContentContainer>
        </StyledContainer>
    );
};
