export const groupObjectsBy = (array: any[], key: string) => {
    const initialValue = {};

    return array.reduce((prevValue, value) => {
        const myAttribute = value[key];

        prevValue[myAttribute] = [...(prevValue[myAttribute] || []), value];

        return prevValue;
    }, initialValue);
};

export const fillStringVariables = (
    string: string | number,
    variables: { [key: string]: string | number },
) => {
    Object.entries(variables).forEach(([key, value]) => {
        string = string.toString().replaceAll(`{${key}}`, value.toString());
    });

    return string;
};
