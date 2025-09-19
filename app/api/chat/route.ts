import { createDeepSeek } from "@ai-sdk/deepseek";
import type { UIMessage } from "ai";
import { streamText, convertToModelMessages, } from "ai";

const deepseek = createDeepSeek({
	apiKey: process.env.DEEPSEEK_API_KEY ?? "",
	baseURL: "https://api.deepseek.com",
});
const model = deepseek.chat("deepseek-chat");
// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
	const { messages }: { messages: UIMessage[] } = await req.json();

	const result = streamText({
		model,
		messages: convertToModelMessages(messages),
	});

	return result.toTextStreamResponse();
}
