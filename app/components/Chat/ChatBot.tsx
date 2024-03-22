import React, { FormEvent, useRef, useState } from "react";

import ChatList from "./ChatList";
import MessageInput from "./MessageInput";
import Heading from "../Heading/Heading";

const ChatBot = () => {
  const [input, setInput] = useState("");
  const [chat, updateChat] = useState<string[]>([]);
  const messages = [
    {
      id: 1,
      role: "user",
      content: "Which cars have a V6 engine and cost less than 130000?",
    },
    {
      id: 2,
      role: "system",
      content:
        "You're tasked with generating responses for customers based on past prompts and data. Stick to this info and generate one data-related question.\n\nRemember, ***don't list specific cars***; the goal is to seek more exact customer preferences.\nThe output should casual, brief and humanly",
    },
  ];
  // message object [{id:1, role: "chatResponse", message:"some message"}]
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(input);
    setInput("");
    // send input to chat-messages array
    // display in chat-messages component
    // send question to the AI for a response
    // return message -> chat response
  };
  return (
    <div className="p-4">
      <ChatList messages={messages} />
      <MessageInput handleSubmit={handleSubmit} setInput={setInput} />
    </div>
  );
};

export default ChatBot;
