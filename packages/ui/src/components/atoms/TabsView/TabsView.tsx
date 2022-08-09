import { getTestId } from "@honzachalupa/utils";
import { ReactNode, useEffect, useMemo, useState } from "react";
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
    persistencyKey?: string | number;
    onChange?: (index: number) => void;
}

const TabsView: React.FC<IProps & { PERSISTENCY_KEY: string }> = ({
    labels,
    children,
    defaultIndex = 0,
    persistencyKey,
    className,
    testId,
    onChange,
    PERSISTENCY_KEY,
}) => {
    const tabs = useMemo(() => children.filter(Boolean), [children]);

    const [index, setIndex] = useState<number>(
        Math.min(defaultIndex, tabs.length - 1),
    );

    useEffect(() => {
        onChange?.(index);

        if (persistencyKey) {
            localStorage.setItem(PERSISTENCY_KEY, index.toString());
        }
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
                {tabs.map((tab, i) => (
                    <StyledContent key={i} isVisible={index === i}>
                        {tab}
                    </StyledContent>
                ))}
            </StyledContentContainer>
        </StyledContainer>
    );
};

export const TabsView_Wrapper: React.FC<IProps> = (props) => {
    const [defaultIndex, setDefaultIndex] = useState<number>(-1);

    const PERSISTENCY_KEY = `TabsView_${props.persistencyKey}`;

    useEffect(() => {
        if (props.persistencyKey) {
            const index = Number(
                localStorage.getItem(PERSISTENCY_KEY) ||
                    props.defaultIndex ||
                    0,
            );

            setDefaultIndex(index);
        } else {
            setDefaultIndex(props.defaultIndex || 0);
        }
    }, []);

    return defaultIndex >= 0 ? (
        <TabsView
            {...props}
            defaultIndex={defaultIndex}
            PERSISTENCY_KEY={PERSISTENCY_KEY}
        />
    ) : null;
};
