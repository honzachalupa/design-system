import { getTestId, useLocalStorage } from "@honzachalupa/utils";
import { useEffect } from "react";
import { IComponentProps } from "../../../interfaces/component";
import { Button } from "../../atoms/Button";
import { Text } from "../../atoms/typography/Text";
import {
    StyledButtonsGroup,
    StyledContainer,
    StyledContent,
} from "./CookieBanner.styled";

interface IProps extends IComponentProps {
    headline: string;
    content: string;
    agreeButtonText: string;
    disagreeButtonText: string;
    onSubmit?: (value: boolean) => void;
}

export const CookieBanner: React.FC<IProps> = ({
    headline,
    content,
    agreeButtonText,
    disagreeButtonText,
    className,
    testId,
    onSubmit,
}) => {
    const [isCookiesAllowed, setCookiesAllowed] = useLocalStorage(
        "isCookiesAllowed",
        null as unknown as boolean,
    );

    useEffect(() => {
        if (onSubmit) {
            onSubmit(isCookiesAllowed);
        }
    }, [isCookiesAllowed]);

    return isCookiesAllowed === null ? (
        <StyledContainer
            className={className}
            {...getTestId(CookieBanner.name, testId)}
        >
            <StyledContent>
                <Text sizeRem={1}>{headline}</Text>

                <Text sizeRem={0.7}>{content}</Text>
            </StyledContent>

            <StyledButtonsGroup orientation="vertical">
                <Button
                    label={agreeButtonText}
                    color="blue"
                    size="small"
                    onClick={() => setCookiesAllowed(true)}
                />

                <Button
                    label={disagreeButtonText}
                    size="small"
                    onClick={() => setCookiesAllowed(false)}
                />
            </StyledButtonsGroup>
        </StyledContainer>
    ) : null;
};
