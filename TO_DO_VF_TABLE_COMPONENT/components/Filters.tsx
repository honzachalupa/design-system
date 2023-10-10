import {
    Button,
    Checkbox,
    Grid,
    GridItem,
    ICheckboxProps,
    ISelectProps,
    Select,
} from "@backoffice/ui";
import { useEffect, useMemo, useState } from "react";
import { IInputProps, Input } from "../../Form/Input";
import { StyledFiltersContainer } from "../Table.styled";
import { IPersistentState } from "../Table.types";
import { StyledValidationErrors } from "./Filters.styled";

export type IFilter<IRequestData> = {
    [key in keyof IRequestData]?: any;
};

interface ITableFilter<IRequestData> {
    id: keyof IRequestData | "SPACER";
    colspan?: number;
    input?: Omit<IInputProps, "id" | "onChange">;
    select?: Omit<ISelectProps, "id" | "onChange">;
    checkbox?: Omit<ICheckboxProps, "id" | "onChange">;
}

export type ITableFiltersDef<IRequestData> = Array<ITableFilter<IRequestData>>;

export type ITableFilterValidator<IRequestData> = (
    formData: IFilter<IRequestData>,
) => string[];

interface IProps<IRequestData> {
    def: ITableFiltersDef<IRequestData>;
    initialValues: IPersistentState<IRequestData>["filters"] | undefined;
    columnsLimit?: number;
    validator?: ITableFilterValidator<IRequestData>;
    onChange: (formData: IFilter<IRequestData>) => void;
}

export const Filters = <IRequestData,>({
    def,
    initialValues,
    columnsLimit,
    validator,
    onChange,
}: IProps<IRequestData>) => {
    const [formData, setFormData] = useState<IFilter<IRequestData>>({});
    const [initialValuesSnapshot, setInitialValuesSnapshot] = useState<
        IPersistentState<IRequestData>["filters"] | undefined
    >(initialValues);
    const [validatorMessages, setValidatorMessages] = useState<string[]>([]);
    const [isInvalid, setIsInvalid] = useState<boolean>(false);

    const rerenderComparator = useMemo(
        () => Math.random(),
        [initialValuesSnapshot],
    );

    const handleChange = (id: ITableFilter<IRequestData>["id"], value: any) => {
        const resolvedValue =
            typeof value === "object" && value.length === 0 ? undefined : value;

        setFormData((prevState) => ({
            ...prevState,
            [id]: resolvedValue,
        }));

        setIsInvalid(false);
    };

    const handleSubmit = () => {
        if (!isInvalid) {
            onChange(formData);
        }
    };

    const handleReset = () => {
        setFormData({});
        onChange({});
        setInitialValuesSnapshot({});
    };

    useEffect(() => {
        const errors = validator?.(formData) || [];

        setValidatorMessages(errors);
        setIsInvalid(errors.length > 0);
    }, [formData]);

    return (
        <StyledFiltersContainer>
            <Grid key={rerenderComparator} columns={columnsLimit}>
                {def.map(({ id, colspan, input, select, checkbox }) => {
                    if ([input, select, checkbox].filter(Boolean).length > 1) {
                        // eslint-disable-next-line no-console
                        console.error(
                            new Error(
                                "Only one of input, select or checkbox can be defined",
                            ),
                        );

                        return null;
                    }

                    const sharedProps = {
                        id: id as string,
                        value:
                            id !== "SPACER"
                                ? initialValuesSnapshot?.[id]
                                : undefined,
                        onChange: (value: any) => handleChange(id, value),
                    };

                    return (
                        <GridItem key={id as string} colspan={colspan}>
                            {input && <Input {...input} {...sharedProps} />}
                            {select && <Select {...select} {...sharedProps} />}
                            {checkbox && (
                                <Checkbox {...checkbox} {...sharedProps} />
                            )}
                        </GridItem>
                    );
                })}

                <GridItem>
                    <Button
                        label="Filtrovat"
                        isDisabled={isInvalid}
                        onClick={handleSubmit}
                    />
                </GridItem>

                <GridItem>
                    <Button
                        label="Resetovat"
                        color="lightgray"
                        onClick={handleReset}
                    />
                </GridItem>
            </Grid>

            <StyledValidationErrors>
                {validatorMessages?.map((message) => (
                    <p>{message}</p>
                ))}
            </StyledValidationErrors>
        </StyledFiltersContainer>
    );
};
