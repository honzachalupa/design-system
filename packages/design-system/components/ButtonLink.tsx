import cx from "classnames";
import Link from "next/link";
import { ButtonPropsCore, getSharedButtonStyle } from "./Button";

interface Props extends ButtonPropsCore {
    href: string;
}

export const ButtonLink: React.FC<Props> = ({
    label,
    href,
    size = "medium",
    className,
    isDisabled,
}) => (
    <Link
        className={cx(
            "text-inherit no-underline",
            getSharedButtonStyle({ size, className, isDisabled })
        )}
        href={isDisabled ? "" : href}
    >
        {label}
    </Link>
);
