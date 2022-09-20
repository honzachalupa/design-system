import { IAbstractObject } from "../../types";

export const isArray = (value: any) =>
    typeof value === "object" && Array.isArray(value);

export const isObject = (value: any) =>
    typeof value === "object" && !Array.isArray(value);

export const sortAlphabetically = (a: string, b: string) => a.localeCompare(b);

export const removeDuplicatesFromArray = (array: any[]) =>
    Array.from(new Set(array));

export const removeDuplicatesFromObject = (
    array: any[],
    propertyKey: string,
) => {
    const newArray: any[] = [];
    const lookupObject: any = {};

    array.forEach((item) => {
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

export const convertJsonToCsv = (
    array: any[],
    processors: {
        [columnHeaderKey: string]: (
            cellValue: any | any[],
        ) => any | any[] | null;
    },
) => {
    const separator = ";";
    const headers = removeDuplicatesFromArray(
        array.map((item) => Object.keys(item)).flat(),
    );

    let csv = headers.join(separator);

    array.forEach((item) => {
        csv += "\n";

        csv += headers
            .map((header) => {
                let value = item[header];

                if (processors[header]) {
                    value = processors[header](value) || "";
                }

                if (typeof value === "object") {
                    if (value.length > 0 || Object.keys(value).length > 0) {
                        value = JSON.stringify(value);
                    } else {
                        value = "";
                    }
                }

                return value;
            })
            .join(separator);
    });

    return csv;
};
