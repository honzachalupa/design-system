import { describe, expect, it } from "@jest/globals";
import {
    addUnitLabel,
    boolToLabel,
    formatCurrency,
    formatPhoneNumber,
} from "./formatting";

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

        it("Case 5", () => {
            expect(formatCurrency(100, "USD")).toStrictEqual("$100");
        });

        it("Case 6", () => {
            expect(formatCurrency(1000, "USD")).toStrictEqual("$1000");
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

    describe("boolToLabel", () => {
        it("Case 1", () => {
            expect(boolToLabel(true)).toStrictEqual("Yes");
        });

        it("Case 2", () => {
            expect(boolToLabel("true")).toStrictEqual("Yes");
        });

        it("Case 3", () => {
            expect(boolToLabel(false)).toStrictEqual("No");
        });

        it("Case 4", () => {
            expect(boolToLabel("false")).toStrictEqual("No");
        });

        it("Case 5", () => {
            expect(boolToLabel("")).toStrictEqual("No");
        });
    });

    describe("addUnitLabel", () => {
        it("Case 1 - 1 rok", () => {
            expect(addUnitLabel(1, "years")).toStrictEqual("1 rok");
        });

        it("Case 2", () => {
            expect(addUnitLabel(4, "years")).toStrictEqual("4 roky");
        });

        it("Case 3", () => {
            expect(addUnitLabel(5, "years")).toStrictEqual("5 let");
        });

        it("Case 4", () => {
            expect(addUnitLabel(1, "days")).toStrictEqual("1 den");
        });

        it("Case 5", () => {
            expect(addUnitLabel(4, "days")).toStrictEqual("4 dny");
        });

        it("Case 6", () => {
            expect(addUnitLabel(5, "days")).toStrictEqual("5 dní");
        });

        it("Case 7", () => {
            expect(addUnitLabel(90, "percents")).toStrictEqual("90%");
        });

        it("Case 8", () => {
            expect(addUnitLabel(3, "pieces")).toStrictEqual("3 ks");
        });
    });
});
