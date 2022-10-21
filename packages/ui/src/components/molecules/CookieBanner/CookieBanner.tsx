import { getTestId, useLocalStorage } from "@honzachalupa/utils";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { IComponentProps } from "../../../interfaces/component";
import { Button } from "../../atoms/Button";
import { Text } from "../../atoms/typography/Text";
import {
    StyledButtonsGroup,
    StyledContainer,
    StyledContent,
} from "./CookieBanner.styled";

export interface IProps extends IComponentProps {
    onSubmit?: (value: boolean) => void;
}

export const CookieBanner: React.FC<IProps> = ({
    className,
    testId,
    onSubmit,
}) => {
    const { t } = useTranslation();

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
            {...getTestId("CookieBanner", testId)}
        >
            <StyledContent>
                <Text sizeRem={1}>{t("cookieBanner.headline")}</Text>

                <Text sizeRem={0.7}>{t("cookieBanner.content")}</Text>
            </StyledContent>

            <StyledButtonsGroup orientation="vertical">
                <Button
                    label={t("cookieBanner.agreeButtonText")}
                    color="blue"
                    size="small"
                    onClick={() => setCookiesAllowed(true)}
                />

                <Button
                    label={t("cookieBanner.disagreeButtonText")}
                    size="small"
                    onClick={() => setCookiesAllowed(false)}
                />
            </StyledButtonsGroup>
        </StyledContainer>
    ) : null;
};
