"use client";

import { useChat } from "@ai-sdk/react";
import { TextStreamChatTransport } from "ai";
import { useState } from "react";
import BackgroundImage from "./components/BackgroundImage";

export default function Page() {
	const { sendMessage, status } = useChat({
		transport: new TextStreamChatTransport({
			api: "/api/chat",
		}),
	});
	const [input, setInput] = useState("");

	return (
		<div className={"w-full h-[100vh] flex relative"}>
			<BackgroundImage
				imageUrl={`/api/proxy?url=${encodeURIComponent("https://api-1256168079.cos.ap-chengdu.myqcloud.com/images/awaken/1238.png")}`}
			/>

			<form
				onSubmit={(e) => {
					e.preventDefault();
					if (input.trim()) {
						sendMessage({ text: input });
						setInput("");
					}
				}}
			>
				<input
					value={input}
					onChange={(e) => setInput(e.target.value)}
					disabled={status !== "ready"}
					placeholder="Say something..."
				/>
				<button type="submit" disabled={status !== "ready"}>
					Submit
				</button>
			</form>
		</div>
	);
}
