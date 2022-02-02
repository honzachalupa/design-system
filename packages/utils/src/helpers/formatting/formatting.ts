import { ECurrencies, ICurrency, TCurrencyCodes } from "../../types";

export const DATE_FORMAT = "D.M.YYYY";
export const TIME_FORMAT = "H:mm";

export const DATE_TIME_FORMAT = `${DATE_FORMAT} ${TIME_FORMAT}`;

export const formatCurrency = (
    value: number,
    currencyCode: TCurrencyCodes,
): string => {
    let valueFormatted = value.toString();
    let prefix = "";
    let postfix = "";

    const currency: ICurrency = ECurrencies.find(
        ({ id }) => id === currencyCode,
    )!;

    if (currencyCode === "CZK") {
        // Add spaces as thousand separator
        valueFormatted = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

        postfix = currency.symbol;
    } else {
        prefix = currency.symbol;
    }

    return `${prefix}${valueFormatted} ${postfix}`.trim();
};

export const formatPhoneNumber = (phoneNumber: string): string =>
    phoneNumber.replace(/([+\d]{4})(\d{3})(\d{3})(\d{3})/, "$1 $2 $3 $4");

export const boolToLabel = (
    value: boolean | string,
    trueText = "Yes",
    falseText = "No",
): string => (value.toString() === "true" ? trueText : falseText);

export const addUnitLabel = (
    value: number,
    units:
        | "years"
        | "days"
        | "persons-adults"
        | "persons-children"
        | "percents"
        | "pieces",
) => {
    let unit;

    switch (units) {
        case "years":
            if (value === 1) {
                unit = " rok";
            } else if (value < 5) {
                unit = " roky";
            } else {
                unit = " let";
            }
            break;
        case "days":
            if (value === 1) {
                unit = " den";
            } else if (value < 5) {
                unit = " dny";
            } else {
                unit = " dní";
            }
            break;
        case "persons-adults":
            if (value === 1) {
                unit = " dospělý";
            } else if (value <= 4) {
                unit = " dospělí";
            } else {
                unit = " dospělých";
            }
            break;
        case "persons-children":
            if (value === 1) {
                unit = " dítě";
            } else if (value < 5) {
                unit = " děti";
            } else {
                unit = " dětí";
            }
            break;
        case "percents":
            unit = "%";
            break;
        case "pieces":
            unit = " ks";
            break;
        default:
    }

    if (!unit) {
        throw new Error();
    }

    return `${value}${unit}`;
};
