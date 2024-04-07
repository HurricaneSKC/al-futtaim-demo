"use client";

import { FormEvent, useEffect, useState } from "react";

import Message from "@/app/entities/Message";
import carList from "@/app/mockdata/cars.json";
import ChatList from "./ChatList";
import MessageInput from "./MessageInput";
import { useDataContext } from "@/app/context/dataContext";
import { carDataAdapter } from "@/app/context/utils";

const ChatBot = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);

  const { serverData, setData, isChatLoading, setChatLoading } =
    useDataContext();

  // console.log("serverData", serverData);

  useEffect(() => {
    setMessages(serverData.messages.slice(1));
  }, [serverData.messages]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setMessages([...messages, { role: "user", content: input }]);
    setData({
      ...serverData,
      messages: [...serverData.messages, { role: "user", content: input }],
      cars: [...carDataAdapter(carList.cars)],
    });
    setChatLoading(true);
    setInput("");
  };

  return (
    <div className="p-4 flex flex-col overflow-hidden flex-1 w-full bg-slate-100">
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
