import { describe, expect, it } from "@jest/globals";
import { getBrowserLanguage } from "./translation";

describe("Helpers: Translation", () => {
    describe("getBrowserLanguage", () => {
        it("Case 1", () => {
            expect(getBrowserLanguage()).toStrictEqual("en-US");
        });
    });
});
