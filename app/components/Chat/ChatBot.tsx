"use client";

import { FormEvent, useContext, useEffect, useState } from "react";

import Message from "@/app/entities/Message";
import carList from "@/app/mockdata/cars.json";
import ChatList from "./ChatList";
import MessageInput from "./MessageInput";
import { DataContext } from "@/app/context/dataContext";

const ChatBot = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);

  const { serverData, setData, isChatLoading, setChatLoading } =
    useContext(DataContext);

  console.log("serverData", serverData);

  useEffect(() => {
    setMessages(serverData.messages.slice(1));
  }, [serverData.messages]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setMessages([...messages, { role: "user", content: input }]);
    setData({
      ...serverData,
      messages: [...serverData.messages, { role: "user", content: input }],
    });
    setChatLoading(true);
    setInput("");
  };

  return (
    <div className="p-4 flex flex-col overflow-hidden flex-1 w-full">
      <ChatList messages={messages} isLoading={isChatLoading} />
      <MessageInput
        handleSubmit={handleSubmit}
        setInput={setInput}
        input={input}
        isDisabled={isChatLoading}
      />
    </div>
  );
};

export default ChatBot;
