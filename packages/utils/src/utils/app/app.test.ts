import { describe, expect, it } from "@jest/globals";
import { getTestId } from "./app";

describe("Helpers: App", () => {
    describe("getTestId", () => {
        it("Case 1", () => {
            expect(getTestId("Button")).toStrictEqual({
                "data-test-id": "Button",
            });
        });

        it("Case 2", () => {
            expect(getTestId("Button", "submit")).toStrictEqual({
                "data-test-id": "Button_submit",
            });
        });
    });
});
