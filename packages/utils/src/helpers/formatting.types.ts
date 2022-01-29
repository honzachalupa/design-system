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
