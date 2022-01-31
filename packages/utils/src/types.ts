export type IAbstractObject = { [key: string]: any };

export const ELanguages = [
    {
        id: "cs",
        label: "Česky",
    },
    {
        id: "sk",
        label: "Slovensky",
    },
    {
        id: "en",
        label: "English",
    },
];

export const EPatterns = {
    PHONE_NUMBER: /^[2-9][0-9]{2}\s?[0-9]{3}\s?[0-9]{3}$/,
    MOBILE_PHONE_NUMBER: /^[67][0-9]{2}\s?[0-9]{3}\s?[0-9]{3}$/,
    PHONE_NUMBER_PREFIX: /^\+(420|421)$/,
    PHONE_NUMBER_WITH_PREFIX:
        /^\+(420|421)\s?[67][0-9]{2}\s?[0-9]{3}\s?[0-9]{3}$/,
    EMAIL_ADDRESS:
        /^([0-9a-z]([-.\w]*[0-9a-z])*@([0-9a-z][-\w]*[0-9a-z]\.)+[a-z]{2,9})$/i,
    EMAIL_ADDRESS_OR_EMPTY:
        /(^$|^([0-9a-z]([-.\w]*[0-9a-z])*@([0-9a-z][-\w]*[0-9a-z]\.)+[a-z]{2,9})$)/i,
};

export type TCurrencyCodes = "CZK" | "EUR" | "USD";

export interface ICurrency {
    id: TCurrencyCodes;
    name: string;
    symbol: string;
}

export const ECurrencies: ICurrency[] = [
    {
        id: "CZK",
        name: "Koruna česká",
        symbol: "Kč",
    },
    {
        id: "EUR",
        name: "Euro",
        symbol: "€",
    },
    {
        id: "USD",
        name: "US dolar",
        symbol: "$",
    },
];
