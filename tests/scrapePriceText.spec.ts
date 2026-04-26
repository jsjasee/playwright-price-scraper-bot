import { expect, test } from "@playwright/test";

import { scrapePriceText } from "../scrapePriceText.js"; // typescript files will be compiled to js files

test("returns the raw price text from the matching element", async ({
  page,
}) => {
  await page.goto(
    "https://www.fairprice.com.sg/product/fairprice-jasmine-fragrant-rice-5kg-13086205",
  );
  const priceTextElement = page.getByText("$").first();
  const offerLable = page.getByText("Offer").first();

  await expect(priceTextElement).toBeVisible();

  const priceText = await priceTextElement.innerText();

  console.log(priceText);
});
