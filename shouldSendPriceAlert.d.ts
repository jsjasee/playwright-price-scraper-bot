type ShouldSendPriceAlertInput = {
    currentPrice: number;
    thresholdPrice: number;
};
declare function shouldSendPriceAlert({ currentPrice, thresholdPrice, }: ShouldSendPriceAlertInput): boolean;
export { shouldSendPriceAlert };
export type { ShouldSendPriceAlertInput };
//# sourceMappingURL=shouldSendPriceAlert.d.ts.map