"use client";

import { MessageContent, Message } from "@/components/ai-elements/message";
import {
	Conversation,
	ConversationScrollButton,
	ConversationContent,
} from "@/components/ai-elements/conversation";
import { Response } from "@/components/ai-elements/response";

import { useChat } from "@ai-sdk/react";

const ResponseDemo = () => {
	const { messages } = useChat();

	return (
		<div className="max-w-4xl mx-auto p-6 relative size-full rounded-lg border h-[600px]">
			<div className="flex flex-col h-full">
				<Conversation>
					<ConversationContent>
						{messages.map((message) => (
							<Message from={message.role} key={message.id}>
								<MessageContent>
									{message.parts.map((part, i) => {
										switch (part.type) {
											case "text": // we don't use any reasoning or tool calls in this example
												return (
													<Response key={`${message.id}-${i}`}>
														{part.text}
													</Response>
												);
											default:
												return null;
										}
									})}
								</MessageContent>
							</Message>
						))}
					</ConversationContent>
					<ConversationScrollButton />
				</Conversation>
			</div>
		</div>
	);
};

export default ResponseDemo;
