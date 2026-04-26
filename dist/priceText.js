import { chromium } from "playwright";
import { configDotenv } from "dotenv";
import { sendTelegramMessage } from "./bot.js";
import { parsePriceText } from "./convertPriceToNum.js";
import { runPriceAlertFlow } from "./runPriceAlertFlow.js";
configDotenv();
async function sendAlertForPrice({ productUrl, currentPrice, thresholdPrice, botToken, chatId, sendMessage, }) {
    return runPriceAlertFlow({
        currentPrice,
        thresholdPrice,
        productUrl,
        sendMessage: sendMessage ??
            ((text) => sendTelegramMessage({ botToken, chatId, text })),
    });
}
async function main() {
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();
    const productUrl = process.env.FAIRPRICE_PRODUCT_URL;
    try {
        await page.goto(productUrl, { waitUntil: "domcontentloaded" });
        const priceTextElement = page.getByText("$").first();
        await priceTextElement.waitFor({ state: "visible" });
        const priceText = await priceTextElement.innerText();
        if (priceText.trim() === "") {
            throw new Error("Price text is empty");
        }
        const price = parsePriceText(priceText);
        const sent = await sendAlertForPrice({
            productUrl,
            currentPrice: price,
            thresholdPrice: Number(process.env.PRICE_THRESHOLD),
            botToken: process.env.TELEGRAM_BOT_TOKEN,
            chatId: process.env.TELEGRAM_CHAT_ID,
        });
        console.log({ price, sent });
    }
    finally {
        await browser.close();
    }
}
main().catch((error) => {
    console.error(error);
    process.exit(1);
});
export { sendAlertForPrice };
//# sourceMappingURL=priceText.js.map