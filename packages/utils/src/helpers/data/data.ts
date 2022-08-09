import { IAbstractObject } from "../../types";

export const sortAlphabetically = (a: string, b: string) => a.localeCompare(b);

export const removeDuplicatesFromArray = (
    array: Array<string | number | boolean>,
) => Array.from(new Set(array));

export const removeDuplicatesFromObject = (
    originalArray: any[],
    propertyKey: string,
) => {
    const newArray: any[] = [];
    const lookupObject: any = {};

    originalArray.forEach((item) => {
        lookupObject[item[propertyKey]] = item;
    });

    Object.keys(lookupObject).forEach((key) => {
        newArray.push(lookupObject[key]);
    });

    return newArray;
};

export const cleanObject = (object: IAbstractObject): IAbstractObject =>
    JSON.parse(
        JSON.stringify(
            Object.fromEntries(
                Object.entries(object).filter(
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                    ([_, v]) => v !== null && v !== undefined,
                ),
            ),
        ),
    );

export const groupObjectsBy = (
    array: any[],
    key: string,
): { [key: string]: IAbstractObject } => {
    const initialValue = {};

    return array.reduce((prevValue, value) => {
        const myAttribute = value[key];

        prevValue[myAttribute] = [...(prevValue[myAttribute] || []), value];

        return prevValue;
    }, initialValue);
};

export const fillStringVariables = (
    value: string | number,
    variables: { [key: string]: string | number },
): string => {
    let string = value.toString();

    Object.entries(variables).forEach(([key, value]) => {
        string = string.replaceAll(`{${key}}`, value.toString());
    });

    return string;
};
