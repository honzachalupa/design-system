import { describe, expect, it } from "@jest/globals";
import { getBrowserLanguage, getDeviceInfo } from "./browser";

describe("getBrowserLanguage", () => {
    it("Case 1", () => {
        expect(getBrowserLanguage()).toStrictEqual("en-US");
    });
});

describe("Helpers: Browser", () => {
    it("getDeviceInfo", () => {
        const deviceInfo = getDeviceInfo();

        expect(deviceInfo).toHaveProperty("ua");

        expect(deviceInfo).toHaveProperty("browser");
        expect(deviceInfo.browser).toHaveProperty("name");
        expect(deviceInfo.browser).toHaveProperty("version");
        expect(deviceInfo.browser).toHaveProperty("major");

        expect(deviceInfo).toHaveProperty("engine");
        expect(deviceInfo.engine).toHaveProperty("name");
        expect(deviceInfo.engine).toHaveProperty("version");

        expect(deviceInfo).toHaveProperty("os");
        expect(deviceInfo.os).toHaveProperty("name");
        expect(deviceInfo.os).toHaveProperty("version");

        expect(deviceInfo).toHaveProperty("device");
        expect(deviceInfo.device).toHaveProperty("vendor");
        expect(deviceInfo.device).toHaveProperty("model");
        expect(deviceInfo.device).toHaveProperty("type");

        expect(deviceInfo).toHaveProperty("cpu");
        expect(deviceInfo.cpu).toHaveProperty("architecture");
    });
});
