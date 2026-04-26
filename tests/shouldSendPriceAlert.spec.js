import { expect, test } from "@playwright/test";
import { shouldSendPriceAlert } from "../shouldSendPriceAlert.js";
test("returns true when the current price is below the threshold", () => {
    expect(shouldSendPriceAlert({
        currentPrice: 12.95,
        thresholdPrice: 13,
    })).toBe(true);
});
test("returns false when the current price matches the threshold", () => {
    expect(shouldSendPriceAlert({
        currentPrice: 13,
        thresholdPrice: 13,
    })).toBe(false);
});
test("returns false when the current price is above the threshold", () => {
    expect(shouldSendPriceAlert({
        currentPrice: 13.5,
        thresholdPrice: 13,
    })).toBe(false);
});
test("throws when the current price is not a valid number", () => {
    expect(() => shouldSendPriceAlert({
        currentPrice: Number.NaN,
        thresholdPrice: 13,
    })).toThrow("Current price must be a valid number");
});
//# sourceMappingURL=shouldSendPriceAlert.spec.js.map