function buildPriceAlertMessage({ currentPrice, thresholdPrice, productUrl, }) {
    if (productUrl.trim() === "") {
        throw new Error("Product URL is required");
    }
    return [
        `Current price: $${currentPrice.toFixed(2)}`, // the current price is already in 2 dp, but just in case make it 2 dp
        `Threshold price: $${thresholdPrice.toFixed(2)}`,
        `Product URL: ${productUrl}`,
    ].join("\n");
}
export { buildPriceAlertMessage };
//# sourceMappingURL=priceAlertMessage.js.map