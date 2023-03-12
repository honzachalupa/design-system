import cx from "classnames";
import { useEffect, useRef, useState } from "react";
import { Button, ButtonSize } from "./Button";

interface Props<Value> {
    defaultValue?: Value;
    options: {
        value: Value;
        label: string;
        isDisabled?: boolean;
    }[];
    size?: ButtonSize;
    className?: string;
    onChange: (value: Value) => void;
}

export function SwitchButton<Value>({
    defaultValue,
    options,
    size,
    className,
    onChange,
}: Props<Value>) {
    const containerRef = useRef<HTMLDivElement>(null);

    const [selectedValue, setSelectedValue] = useState<Value | undefined>();
    const [backgroundStyle, setBackgroundStyle] = useState<{
        width: number;
        left: number;
    }>();
    const [resizeTrigger, setResizeTrigger] = useState<number>();

    const setDefaultBackgroundStyle = (defaultValue: Value) => {
        const selectedIndex = options.findIndex(
            ({ value }) => value === defaultValue
        );

        const element = containerRef.current?.children[selectedIndex];

        setBackgroundStyle({
            // @ts-ignore
            width: element.offsetWidth,
            // @ts-ignore
            left: element.offsetLeft,
        });
    };

    const handleButtonClick = (
        e: MouseEvent,
        value: Value,
        isDisabled?: boolean
    ) => {
        if (!isDisabled) {
            setSelectedValue(value);

            setBackgroundStyle({
                // @ts-ignore
                width: e.target.offsetWidth,
                // @ts-ignore
                left: e.target.offsetLeft,
            });
        }
    };

    const onResize = () => {
        setResizeTrigger(Math.random());
    };

    useEffect(() => {
        if (defaultValue) {
            setSelectedValue(defaultValue);
            setDefaultBackgroundStyle(defaultValue);
        }

        window.addEventListener("resize", onResize);

        return () => {
            window.removeEventListener("resize", onResize);
        };
    }, []);

    useEffect(() => {
        if (selectedValue) {
            onChange(selectedValue);
        }
    }, [selectedValue]);

    useEffect(() => {
        if (selectedValue) {
            setDefaultBackgroundStyle(selectedValue);
        }
    }, [resizeTrigger]);

    return (
        <div className={cx("relative bg-gray-200 rounded-sm", className)}>
            {backgroundStyle && (
                <div
                    className="bg-gray-300 h-full rounded-sm absolute top-0 z-10 transition-all duration-500"
                    style={{
                        width: backgroundStyle.width,
                        left: backgroundStyle.left,
                    }}
                />
            )}

            <div ref={containerRef} className="w-ful flex">
                {options.map(({ value, label, isDisabled }) => (
                    <Button
                        key={value as string}
                        label={label}
                        size={size}
                        className="basis-full z-20 bg-transparent disabled:bg-transparent"
                        isDisabled={isDisabled}
                        onClick={(e) => handleButtonClick(e, value, isDisabled)}
                    />

                    /* <button
                        key={value as string}
                        type="button"
                        className="basis-full px-5 py-3 overflow-hidden z-20 disabled:text-opacity-10 disabled:cursor-not-allowed"
                        disabled={isDisabled}
                        onClick={(e) => handleButtonClick(e, value, isDisabled)}
                    >
                        {label}
                    </button> */
                ))}
            </div>
        </div>
    );
}
