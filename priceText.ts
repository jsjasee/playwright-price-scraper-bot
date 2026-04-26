import { chromium } from "playwright";
import { configDotenv } from "dotenv";
import { parsePriceText } from "./convertPriceToNum.js";

// const PRODUCT_URL =
//   "https://www.fairprice.com.sg/product/fairprice-jasmine-fragrant-rice-5kg-13086205";

async function main(): Promise<void> {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  try {
    await page.goto(process.env.FAIRPRICE_PRODUCT_URL!, {
      waitUntil: "domcontentloaded",
    });

    const priceTextElement = page.getByText("$").first();
    await priceTextElement.waitFor({ state: "visible" });

    const priceText = await priceTextElement.innerText();

    if (priceText.trim() === "") {
      throw new Error("Price text is empty");
    }

    console.log(priceText);

    // Convert the priceText to a number.
    const price = parsePriceText(priceText);

    console.log(price);
  } finally {
    await browser.close();
  }
}

main().catch((error: unknown) => {
  console.error(error);
  process.exit(1);
});
