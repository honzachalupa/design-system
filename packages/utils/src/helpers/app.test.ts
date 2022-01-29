import { describe, expect, it } from "@jest/globals";
import { createRef } from "react";
import { cleanObject, scrollToRef } from "./app";

describe("Helpers: App", () => {
    describe("cleanObject", () => {
        it("Case 1", () => {
            expect(cleanObject({ a: "abc", b: 1 })).toStrictEqual({
                a: "abc",
                b: 1,
            });
        });

        it("Case 2", () => {
            expect(
                cleanObject({ a: undefined, b: null, c: "abc" }),
            ).toStrictEqual({
                c: "abc",
            });
        });

        it("Case 3", () => {
            expect(cleanObject({ a: undefined, b: null })).toStrictEqual({});
        });
    });

    describe("scrollToRef", () => {
        it("Case 1", () => {
            expect(scrollToRef(createRef())).toStrictEqual(undefined);
        });
    });
});
