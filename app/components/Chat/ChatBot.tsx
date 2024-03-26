"use client";

import { FormEvent, useEffect, useState } from "react";

import Message from "@/app/entities/Message";
import messagesResponse from "@/app/mockdata/messages.json";
import ChatList from "./ChatList";
import MessageInput from "./MessageInput";

const ChatBot = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isChatLoading, setChatLoading] = useState(false);
  const [isChatDisabled, setChatDisabled] = useState(false);

  const addIdtoMessages = (
    jsonData: { role: string; content: string }[]
  ): Message[] => {
    return jsonData.map((message, index) => {
      return { id: index, ...message };
    });
  };

  useEffect(() => {
    const messagesArray = addIdtoMessages(messagesResponse);
    setMessages(messagesArray);
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const id = Date.now();
    setMessages([...messages, { id: id, role: "user", content: input }]);
    setChatLoading(true);
    setChatDisabled(true);
    setInput("");
    // send input to chat-messages array
    // display in chat-messages component
    // send question to the AI for a response
    // return message -> chat response
  };

  return (
    <div className="p-4 flex flex-col overflow-hidden flex-1">
      <ChatList messages={messages} isLoading={isChatLoading} />
      <MessageInput
        handleSubmit={handleSubmit}
        setInput={setInput}
        input={input}
        isDisabled={isChatDisabled}
      />
    </div>
  );
};

export default ChatBot;
