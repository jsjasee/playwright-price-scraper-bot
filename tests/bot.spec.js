import { expect, test } from "@playwright/test";
import { sendTelegramMessage } from "../bot.js";
test("sends a message through the Telegram Bot API", async () => {
    const calls = [];
    await sendTelegramMessage({
        botToken: "token",
        chatId: "123456",
        text: "hello",
        send: async (chatId, text) => {
            calls.push({ chatId, text });
        },
    });
    expect(calls).toEqual([{ chatId: "123456", text: "hello" }]);
});
test("throws when the bot token is empty", async () => {
    await expect(() => sendTelegramMessage({
        botToken: "   ",
        chatId: "123456",
        text: "hello",
    })).rejects.toThrow("Telegram bot token is required");
});
test("throws when the chat ID is empty", async () => {
    await expect(() => sendTelegramMessage({
        botToken: "token",
        chatId: "   ",
        text: "hello",
    })).rejects.toThrow("Telegram chat ID is required");
});
test("throws when the text is empty", async () => {
    await expect(() => sendTelegramMessage({
        botToken: "token",
        chatId: "123456",
        text: "   ",
    })).rejects.toThrow("Telegram message text is required");
});
test("propagates sender failures", async () => {
    await expect(() => sendTelegramMessage({
        botToken: "token",
        chatId: "123456",
        text: "hello",
        send: async () => {
            throw new Error("Telegram failed");
        },
    })).rejects.toThrow("Telegram failed");
});
//# sourceMappingURL=bot.spec.js.map