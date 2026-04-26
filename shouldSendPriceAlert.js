function shouldSendPriceAlert({ currentPrice, thresholdPrice, }) {
    if (!Number.isFinite(currentPrice)) {
        // isFinite is a stricter test than isNaN because it also rejects -infinity and infinity values on top of NaN
        throw new Error("Current price must be a valid number");
    }
    if (!Number.isFinite(thresholdPrice)) {
        throw new Error("Threshold price must be a valid number");
    }
    return currentPrice < thresholdPrice;
}
export { shouldSendPriceAlert };
//# sourceMappingURL=shouldSendPriceAlert.js.map