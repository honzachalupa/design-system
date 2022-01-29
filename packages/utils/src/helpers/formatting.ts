import { ECurrencies, ICurrency, TCurrencyCodes } from "./formatting.types";

export const DATE_FORMAT = "D.M.YYYY";
export const TIME_FORMAT = "H:mm";
export const DATE_TIME_FORMAT = `${DATE_FORMAT} ${TIME_FORMAT}`;

export const formatCurrency = (value: number, currencyCode: TCurrencyCodes) => {
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

export const formatPhoneNumber = (phoneNumber: string) =>
    phoneNumber.replace(/([+\d]{4})(\d{3})(\d{3})(\d{3})/, "$1 $2 $3 $4");
