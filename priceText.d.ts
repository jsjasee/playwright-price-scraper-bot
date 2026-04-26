type SendAlertForPriceInput = {
    productUrl: string;
    currentPrice: number;
    thresholdPrice: number;
    botToken: string;
    chatId: string;
    sendMessage?: (text: string) => Promise<void>;
};
declare function sendAlertForPrice({ productUrl, currentPrice, thresholdPrice, botToken, chatId, sendMessage, }: SendAlertForPriceInput): Promise<boolean>;
export { sendAlertForPrice };
//# sourceMappingURL=priceText.d.ts.map