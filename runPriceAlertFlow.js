import { buildPriceAlertMessage } from "./priceAlertMessage.js";
import { shouldSendPriceAlert } from "./shouldSendPriceAlert.js";
async function runPriceAlertFlow({ currentPrice, thresholdPrice, productUrl, sendMessage, }) {
    if (!shouldSendPriceAlert({
        currentPrice,
        thresholdPrice,
    })) {
        return false;
    }
    const message = buildPriceAlertMessage({
        currentPrice,
        thresholdPrice,
        productUrl,
    });
    await sendMessage(message);
    return true;
}
export { runPriceAlertFlow };
//# sourceMappingURL=runPriceAlertFlow.js.map