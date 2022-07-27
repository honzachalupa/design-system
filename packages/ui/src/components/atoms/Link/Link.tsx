import { getTestId } from "@honzachalupa/utils";
import { MouseEvent, useEffect, useMemo } from "react";
import { IComponentProps } from "../../../interfaces/component";
import { StyledLink } from "./Link.styled";

export interface IProps extends IComponentProps {
    label: string;
    href?: string;
    target?: "_blank";
    isDisabled?: boolean;
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export const Link: React.FC<IProps> = ({
    label,
    className,
    testId,
    href,
    target,
    isDisabled = false,
    ...props
}) => {
    useEffect(() => {
        if (
            (!href && !props.onClick) ||
            (href && props.onClick) ||
            (onClick && target)
        ) {
            throw Error("Link need one of these props: href, onClick");
        }
    }, [href, props.onClick]);

    const onClick = useMemo(() => {
        if (href) {
            if (target === "_blank") {
                return () => window.open(href);
            } else {
                return () => {
                    window.location.href = href;
                };
            }
        } else {
            return props.onClick;
        }
    }, [href, target, props.onClick]);

    return (
        <StyledLink
            className={className}
            isDisabled={isDisabled}
            onClick={onClick}
            {...getTestId("Link", testId)}
        >
            {label}
        </StyledLink>
    );
};
