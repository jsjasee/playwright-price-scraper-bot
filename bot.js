import { Bot } from "grammy";
async function sendTelegramMessage({ botToken, chatId, text, send, }) {
    if (botToken.trim() === "") {
        throw new Error("Telegram bot token is required");
    }
    if (chatId.trim() === "") {
        throw new Error("Telegram chat ID is required");
    }
    if (text.trim() === "") {
        throw new Error("Telegram message text is required");
    }
    if (send) {
        await send(chatId, text);
        return;
    }
    const bot = new Bot(botToken);
    await bot.api.sendMessage(chatId, text);
}
export { sendTelegramMessage };
//# sourceMappingURL=bot.js.map