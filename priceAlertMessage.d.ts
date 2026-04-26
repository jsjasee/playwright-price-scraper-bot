type PriceAlertMessageInput = {
    currentPrice: number;
    thresholdPrice: number;
    productUrl: string;
};
declare function buildPriceAlertMessage({ currentPrice, thresholdPrice, productUrl, }: PriceAlertMessageInput): string;
export { buildPriceAlertMessage };
export type { PriceAlertMessageInput };
//# sourceMappingURL=priceAlertMessage.d.ts.map