import { createDeepSeek } from "@ai-sdk/deepseek";

const deepseek = createDeepSeek({
	apiKey: process.env.DEEPSEEK_API_KEY ?? "",
	baseURL: "https://api.deepseek.com",
});
const model = deepseek.chat("deepseek-chat");
