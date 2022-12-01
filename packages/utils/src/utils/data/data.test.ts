import { describe, expect, it } from "@jest/globals";
import { cleanObject, groupObjectsBy } from "./data";

describe("Helpers: Data", () => {
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

    describe("groupObjectsBy", () => {
        it("Case 1", () => {
            expect(
                groupObjectsBy(
                    [
                        {
                            id: 1,
                            category: "category-1",
                        },
                    ],
                    "category",
                ),
            ).toStrictEqual({
                "category-1": [
                    {
                        id: 1,
                        category: "category-1",
                    },
                ],
            });
        });

        it("Case 2", () => {
            expect(
                groupObjectsBy(
                    [
                        {
                            id: 1,
                            category: "category-1",
                        },
                        {
                            id: 2,
                            category: "category-1",
                        },
                        {
                            id: 3,
                            category: "category-2",
                        },
                    ],
                    "category",
                ),
            ).toStrictEqual({
                "category-1": [
                    {
                        id: 1,
                        category: "category-1",
                    },
                    {
                        id: 2,
                        category: "category-1",
                    },
                ],
                "category-2": [
                    {
                        id: 3,
                        category: "category-2",
                    },
                ],
            });
        });
    });

    /* TODO: Fix replaceAll error.
    describe("fillStringVariables", () => {
        it("Case 1", () => {
            expect(
                fillStringVariables("Replace variable: {durationDays}", {
                    durationDays: 666,
                }),
            ).toStrictEqual("Replace variable: 666");
        });

        it("Case 2", () => {
            expect(
                fillStringVariables(
                    "First replace variable: {durationDays}, second replace variable: {anotherVar}",
                    { durationDays: 666, anotherVar: "Replaced string" },
                ),
            ).toStrictEqual(
                "First replace variable: 666, second replace variable: Replaced string",
            );
        });
    }); */
});
