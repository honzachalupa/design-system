import { getTestId } from "@honzachalupa/utils";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { IComponentProps } from "../../../interfaces/component";
import { StyledButton } from "./CopyButton.styled";

export interface IProps extends IComponentProps {
    value: string | number;
    className?: string;
}

export const CopyButton: React.FC<IProps> = ({ value, className, testId }) => {
    const { t } = useTranslation();

    const [isSuccess, setIsSuccess] = useState<boolean>();

    const handleCopy = () => {
        navigator.clipboard.writeText(value.toString()).then(() => {
            setIsSuccess(true);
        });
    };

    useEffect(() => {
        if (isSuccess) {
            setTimeout(() => {
                setIsSuccess(false);
            }, 2000);
        }
    }, [isSuccess]);

    return isSuccess ? (
        <StyledButton
            label={t("copyButton.copied")}
            icon={{
                name: "check",
                color: "white",
            }}
            color="green"
            className={className}
            {...getTestId("CopyButton", testId)}
        />
    ) : (
        <StyledButton
            label={t("copyButton.copy")}
            icon={{
                name: "copy",
                color: "grayDark",
            }}
            color="grayLight"
            className={className}
            onClick={handleCopy}
            {...getTestId("CopyButton", testId)}
        />
    );
};
