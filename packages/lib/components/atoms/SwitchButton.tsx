"use client";

import cx from "classnames";
import { useEffect, useRef, useState } from "react";
import { Button, ButtonSize } from "./Button";

interface IProps<T> {
    defaultValue?: T;
    value?: T;
    options: {
        value: T;
        label: string;
        isDisabled?: boolean;
    }[];
    size?: ButtonSize;
    className?: string;
    onChange: (value: T) => void;
}

export function SwitchButton<T>({
    defaultValue,
    value,
    options,
    size,
    className,
    onChange,
}: IProps<T>) {
    const containerRef = useRef<any>(null); // TODO: Add type.

    const [selectedValue, setSelectedValue] = useState<T | undefined>();
    const [backgroundStyle, setBackgroundStyle] = useState<{
        width: number;
        left: number;
    }>();
    const [resizeTrigger, setResizeTrigger] = useState<number>();

    const setDefaultBackgroundStyle = (value: T) => {
        const selectedIndex = options.findIndex(
            (option) => option.value === value
        );

        const element = containerRef.current?.children[selectedIndex];

        setBackgroundStyle({
            width: element?.offsetWidth,
            left: element?.offsetLeft,
        });
    };

    const handleButtonClick = (
        e: React.MouseEvent<HTMLButtonElement>,
        value: T,
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
        setSelectedValue(value);
        setDefaultBackgroundStyle(value as any);
    }, [value]);

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
        <div
            className={cx(
                "theme-background bg-opacity-50 rounded-sm relative",
                className
            )}
        >
            {backgroundStyle && (
                <div
                    className="h-full theme-background theme-foreground rounded-sm absolute -z-10 transition-all duration-500"
                    style={{
                        width: backgroundStyle.width,
                        left: backgroundStyle.left,
                    }}
                />
            )}

            <div ref={containerRef} className="w-full flex">
                {options.map(({ value, label, isDisabled }) => (
                    <Button
                        key={value as string}
                        label={label}
                        size={size}
                        className="basis-full relative bg-transparent disabled:bg-transparent"
                        isDisabled={isDisabled}
                        onClick={(e) => handleButtonClick(e, value, isDisabled)}
                    />
                ))}
            </div>
        </div>
    );
}
