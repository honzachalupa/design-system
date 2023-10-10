import { HTMLProps, useEffect, useRef } from "react";

interface IProps extends HTMLProps<HTMLInputElement> {
    indeterminate?: boolean;
}

export const SelectionBox: React.FC<IProps> = ({ indeterminate, ...rest }) => {
    const ref = useRef<HTMLInputElement>(null!);

    useEffect(() => {
        if (typeof indeterminate === "boolean") {
            ref.current.indeterminate = !rest.checked && indeterminate;
        }
    }, [ref, indeterminate]);

    return <input type="checkbox" ref={ref} {...rest} />;
};
