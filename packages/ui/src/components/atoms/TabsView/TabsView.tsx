import { getTestId } from "@honzachalupa/utils";
import { CSSProperties, ReactNode, useEffect, useState } from "react";
import { IComponentProps } from "../../../interfaces/component";
import {
    StyledContainer,
    StyledContent,
    StyledContentContainer,
    StyledHeaderButton,
} from "./TabsView.styled";

export interface IProps extends IComponentProps {
    tabs: {
        title: string;
        content: ReactNode;
        isDefault?: boolean;
    }[];
    tabHeaderStyle?: CSSProperties;
    tabHeaderButtonStyle?: CSSProperties;
}

export const TabsView: React.FC<IProps> = ({
    tabs,
    className,
    tabHeaderStyle,
    tabHeaderButtonStyle,
    testId,
}) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    useEffect(() => {
        tabs.forEach(({ isDefault }, i) => {
            if (isDefault) {
                setCurrentIndex(i);
            }
        });
    }, []);

    return (
        <StyledContainer
            className={className}
            {...getTestId(TabsView.name, testId)}
        >
            <header style={tabHeaderStyle}>
                {tabs.map(({ title }, i) => (
                    <StyledHeaderButton
                        key={i}
                        style={tabHeaderButtonStyle}
                        isSelected={currentIndex === i}
                        onClick={() => setCurrentIndex(i)}
                    >
                        {title}
                    </StyledHeaderButton>
                ))}
            </header>

            <StyledContentContainer>
                {tabs.map(({ content }, i) => (
                    <StyledContent isVisible={currentIndex === i}>
                        {content}
                    </StyledContent>
                ))}
            </StyledContentContainer>
        </StyledContainer>
    );
};
