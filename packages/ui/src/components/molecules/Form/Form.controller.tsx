import {
    CSSProperties,
    forwardRef,
    ReactNode,
    useEffect,
    useImperativeHandle,
    useMemo,
    useState,
} from "react";
import { useForm } from "react-hook-form";
import { IButtonProps } from "../../atoms/Button";
import { View } from "./Form.view";

export interface IValidationRules {
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    pattern?: RegExp;
    validate?: (value: string | number) => string | undefined;
}

export interface IFormInput {
    id: string;
    label?: string;
    placeholder?: string;
    value?: string | number | boolean;
    children?: ReactNode;
    controlType: "input" | "textarea" | "select" | "custom";
    inputType?: "text" | "number" | "email" | "password" | "tel" | "date";
    options?: { id: string; label: string }[];
    rules?: IValidationRules;
    error?: string;
    isReadOnly?: boolean;
    containerStyle?: CSSProperties;
    inputStyle?: CSSProperties;
}

export interface IFormData {
    [key: string]: IFormInput["value"] | Array<IFormInput["value"]>;
}

export interface IFormRefProps {
    validate: () => void;
}

export interface IProps {
    inputs: (IFormInput | null)[];
    validationTexts: {
        isRequired: string;
        maxLength: string;
        minLength: string;
        pattern: string;
    };
    className?: string;
    buttonsRenderer?: (onSubmit: any) => IButtonProps[];
    onChange?: (formData: any) => void;
    onSubmit?: (formData: any) => void;
}

export const Form = forwardRef(
    (
        {
            inputs: inputsProp,
            validationTexts,
            className,
            buttonsRenderer,
            onChange,
            onSubmit = () => {},
        }: IProps,
        ref,
    ) => {
        const {
            control,
            trigger: validate,
            setValue,
            setError,
            handleSubmit,
        } = useForm();

        const [formData, setFormData] = useState<IFormData>();

        const inputs = useMemo(
            () => inputsProp.filter(Boolean) as IFormInput[],
            [inputsProp],
        );

        const validationMessages = useMemo<{
            [key: string]: (value: string) => any;
        }>(
            () => ({
                required: () => validationTexts.isRequired,
                minLength: (value: string) =>
                    validationTexts.maxLength.replace("{value}", value),
                maxLength: (value: string) =>
                    validationTexts.minLength.replace("{value}", value),
                pattern: () => validationTexts.pattern,
            }),
            [],
        );

        const getErrorMessage = (
            errorType: string,
            rules: IValidationRules,
            value: string | number,
        ) => {
            if (errorType === "validate") {
                return rules.validate!(value);
            }

            // @ts-ignore
            return validationMessages[errorType](rules[errorType]);
        };

        const handleInputChange = (
            id: IFormInput["id"],
            value: IFormInput["value"] | Array<IFormInput["value"]>,
            callback: (
                value: IFormInput["value"] | Array<IFormInput["value"]>,
            ) => void,
        ) => {
            setFormData((prevState) => ({
                ...prevState,
                [id as string]: value,
            }));

            callback(value);
        };

        useEffect(() => {
            if (onChange && formData) {
                onChange(formData);
            }
        }, [formData]);

        useEffect(() => {
            const defaultValues: {
                [key: string]: IFormInput["value"] | undefined;
            } = {};

            inputs.forEach((input) => {
                if (
                    input &&
                    input.id &&
                    formData &&
                    formData[input.id] === undefined
                ) {
                    setValue(input.id, input.value);
                }

                if (input.controlType !== "custom") {
                    defaultValues[input.id] = input.value;
                }
            });

            if (Object.values(defaultValues).filter(Boolean).length > 0) {
                setFormData(defaultValues);
            }
        }, [inputs]);

        useEffect(() => {
            inputs.forEach((input) => {
                setError(input.id, {
                    type: "manual",
                    message: input.error,
                });
            });
        }, [inputs]);

        useImperativeHandle(
            ref,
            (): IFormRefProps => ({
                validate,
            }),
        );

        return (
            <View
                formData={formData}
                inputs={inputs}
                control={control}
                buttonsRenderer={buttonsRenderer}
                className={className}
                getErrorMessage={getErrorMessage}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
                onSubmit={onSubmit}
            />
        );
    },
);
