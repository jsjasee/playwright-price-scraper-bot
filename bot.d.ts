type SendTelegramMessageInput = {
    botToken: string;
    chatId: string;
    text: string;
    send?: (chatId: string, text: string) => Promise<void>;
};
declare function sendTelegramMessage({ botToken, chatId, text, send, }: SendTelegramMessageInput): Promise<void>;
export { sendTelegramMessage };
export type { SendTelegramMessageInput };
//# sourceMappingURL=bot.d.ts.map