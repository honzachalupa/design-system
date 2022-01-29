import React from "react";
import {
    StyledContainer,
    StyledDescription,
    StyledSubTitle,
    StyledTitle,
} from "./ContentBlockHeader.styled";

export interface IProps {
    subheadline?: string;
    headline: string;
    description?: string;
    alignment?: "left" | "center" | "right";
}

export const ContentBlockHeader: React.FC<IProps> = ({
    subheadline,
    headline,
    description,
    alignment = "center",
}) => (
    <StyledContainer>
        {subheadline && (
            <StyledSubTitle level={3} alignment={alignment} hasMargin={false}>
                {subheadline}
            </StyledSubTitle>
        )}

        <StyledTitle
            level={2}
            styledAs={1}
            alignment={alignment}
            hasMargin={false}
        >
            {headline}
        </StyledTitle>

        {description && (
            <StyledDescription alignment={alignment}>
                {description}
            </StyledDescription>
        )}
    </StyledContainer>
);
