import { expect, test } from "@playwright/test";
import { buildPriceAlertMessage } from "../priceAlertMessage.js";
test("builds a Telegram alert message with product details", () => {
    expect(buildPriceAlertMessage({
        productName: "FairPrice Jasmine Fragrant Rice 5kg",
        currentPrice: 12.95,
        thresholdPrice: 13,
        productUrl: "https://www.fairprice.com.sg/product/fairprice-jasmine-fragrant-rice-5kg-13086205",
    })).toBe([
        "Price alert: FairPrice Jasmine Fragrant Rice 5kg",
        "Current price: $12.95",
        "Threshold price: $13.00",
        "Product URL: https://www.fairprice.com.sg/product/fairprice-jasmine-fragrant-rice-5kg-13086205",
    ].join("\n"));
});
test("formats whole-number prices with two decimal places", () => {
    expect(buildPriceAlertMessage({
        productName: "Milk",
        currentPrice: 4,
        thresholdPrice: 5,
        productUrl: "https://example.com/milk",
    })).toContain("Current price: $4.00");
});
test("throws when product name is empty", () => {
    expect(() => buildPriceAlertMessage({
        productName: "   ",
        currentPrice: 4,
        thresholdPrice: 5,
        productUrl: "https://example.com/milk",
    })).toThrow("Product name is required");
});
test("throws when product URL is empty", () => {
    expect(() => buildPriceAlertMessage({
        productName: "Milk",
        currentPrice: 4,
        thresholdPrice: 5,
        productUrl: "   ",
    })).toThrow("Product URL is required");
});
//# sourceMappingURL=priceAlertMessage.spec.js.map