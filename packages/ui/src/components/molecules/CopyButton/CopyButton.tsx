import { getTestId } from "@honzachalupa/utils";
import React, { useEffect, useState } from "react";
import { IComponentProps } from "../../../interfaces/component";
import { StyledButton } from "./CopyButton.styled";

export interface IProps extends IComponentProps {
    value: string | number;
    className?: string;
    copyText: string;
    copiedText: string;
}

export const CopyButton: React.FC<IProps> = ({
    value,
    copyText,
    copiedText,
    className,
    testId,
}) => {
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
            label={copiedText}
            icon={{
                name: "check",
                color: "white",
            }}
            color="green"
            className={className}
            {...getTestId(CopyButton.name, testId)}
        />
    ) : (
        <StyledButton
            label={copyText}
            icon={{
                name: "copy",
                color: "grayDark",
            }}
            color="grayLight"
            className={className}
            onClick={handleCopy}
            {...getTestId(CopyButton.name, testId)}
        />
    );
};
