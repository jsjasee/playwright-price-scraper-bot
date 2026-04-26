type PriceAlertMessageInput = {
    productName: string;
    currentPrice: number;
    thresholdPrice: number;
    productUrl: string;
};
declare function buildPriceAlertMessage({ productName, currentPrice, thresholdPrice, productUrl, }: PriceAlertMessageInput): string;
export { buildPriceAlertMessage };
export type { PriceAlertMessageInput };
//# sourceMappingURL=priceAlertMessage.d.ts.map