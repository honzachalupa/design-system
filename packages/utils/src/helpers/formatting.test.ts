import { describe, expect, it } from "@jest/globals";
import { formatCurrency, formatPhoneNumber } from "./formatting";

describe("Helpers: Formatting", () => {
    describe("formatCurrency", () => {
        it("Case 1", () => {
            expect(formatCurrency(100, "CZK")).toStrictEqual("100 Kč");
        });

        it("Case 2", () => {
            expect(formatCurrency(1000, "CZK")).toStrictEqual("1 000 Kč");
        });

        it("Case 3", () => {
            expect(formatCurrency(100, "EUR")).toStrictEqual("€100");
        });

        it("Case 4", () => {
            expect(formatCurrency(1000, "EUR")).toStrictEqual("€1000");
        });
    });

    describe("formatPhoneNumber", () => {
        it("Case 1", () => {
            expect(formatPhoneNumber("+420606789910")).toStrictEqual(
                "+420 606 789 910",
            );
        });

        it("Case 2", () => {
            expect(formatPhoneNumber("+420 606 789 910")).toStrictEqual(
                "+420 606 789 910",
            );
        });
    });
});
