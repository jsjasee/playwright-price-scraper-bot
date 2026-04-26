function parsePriceText(text) {
    const cleaned = text
        .trim()
        .replaceAll("$", "")
        .replaceAll(",", "")
        .replace(/\s/g, "");
    const value = Number(cleaned);
    if (cleaned === "" || Number.isNaN(value)) {
        throw new Error(`Invalid price text: ${text}`);
    }
    return value;
}
export { parsePriceText };
//# sourceMappingURL=convertPriceToNum.js.map