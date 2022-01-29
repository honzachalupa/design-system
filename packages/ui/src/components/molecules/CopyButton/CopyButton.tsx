import React, { useEffect, useState } from "react";
import { StyledButton } from "./CopyButton.styled";

export interface IProps {
    value: string | number;
    className?: string;
}

export const CopyButton: React.FC<IProps> = ({ value, className }) => {
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
            label="Zkopírováno"
            icon={{
                name: "check",
                color: "white",
            }}
            color="green"
            className={className}
        />
    ) : (
        <StyledButton
            label="Kopírovat"
            icon={{
                name: "copy",
                color: "grayDark",
            }}
            color="grayLight"
            className={className}
            onClick={handleCopy}
        />
    );
};
