import { Bot } from "grammy";

type SendTelegramMessageInput = {
  botToken: string;
  chatId: string;
  text: string;
  send?: (chatId: string, text: string) => Promise<void>;
};

async function sendTelegramMessage({
  botToken,
  chatId,
  text,
  send,
}: SendTelegramMessageInput): Promise<void> {
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
export type { SendTelegramMessageInput };
