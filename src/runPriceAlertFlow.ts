import { buildPriceAlertMessage } from "./priceAlertMessage.js";
import { shouldSendPriceAlert } from "./shouldSendPriceAlert.js";

type RunPriceAlertFlowInput = {
  currentPrice: number;
  thresholdPrice: number;
  productUrl: string;
  sendMessage: (text: string) => Promise<void>;
};

async function runPriceAlertFlow({
  currentPrice,
  thresholdPrice,
  productUrl,
  sendMessage,
}: RunPriceAlertFlowInput): Promise<boolean> {
  if (
    !shouldSendPriceAlert({
      currentPrice,
      thresholdPrice,
    })
  ) {
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
export type { RunPriceAlertFlowInput };
