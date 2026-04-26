type RunPriceAlertFlowInput = {
    currentPrice: number;
    thresholdPrice: number;
    productUrl: string;
    sendMessage: (text: string) => Promise<void>;
};
declare function runPriceAlertFlow({ currentPrice, thresholdPrice, productUrl, sendMessage, }: RunPriceAlertFlowInput): Promise<boolean>;
export { runPriceAlertFlow };
export type { RunPriceAlertFlowInput };
//# sourceMappingURL=runPriceAlertFlow.d.ts.map