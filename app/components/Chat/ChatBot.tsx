"use client";

import { FormEvent, useContext, useEffect, useState } from "react";

import Message from "@/app/entities/Message";
import messagesResponse from "@/app/mockdata/messages.json";
import ChatList from "./ChatList";
import MessageInput from "./MessageInput";
import { DataContext } from "@/app/page";

const ChatBot = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isChatLoading, setChatLoading] = useState(false);
  const [isChatDisabled, setChatDisabled] = useState(false);
  const { serverData, setData } = useContext(DataContext);

  console.log(serverData);

  const addIdtoMessages = (
    jsonData: { role: string; content: string }[]
  ): Message[] => {
    return jsonData.map((message, index) => {
      return { id: index, ...message };
    });
  };

  useEffect(() => {
    const messagesArray = addIdtoMessages(serverData.messages.slice(1));
    setMessages(messagesArray);
  }, [serverData.messages]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setMessages([...messages, { role: "user", content: input }]);
    console.log(messages);

    setChatLoading(false);
    setChatDisabled(false);
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
