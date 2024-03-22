import React, {
  FormEvent,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";

import ChatList from "./ChatList";
import MessageInput from "./MessageInput";
import Heading from "../Heading/Heading";

const ChatBot = () => {
  const [input, setInput] = useState("");
  const [chat, updateChat] = useState<string[]>([]);
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: "system",
      content:
        "You're tasked with generating responses for customers based on past prompts and data. Stick to this info and generate one data-related question.\n\nRemember, ***don't list specific cars***; the goal is to seek more exact customer preferences.\nThe output should casual, brief and humanly",
    },
    {
      id: 2,
      role: "user",
      content: "Which cars have a V6 engine and cost less than 130000?",
    },
  ]);
  // message object [{id:1, role: "chatResponse", message:"some message"}]
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(input);
    const id = Date.now();
    setMessages([...messages, { id: id, role: "user", content: input }]);
    setInput("");
    // send input to chat-messages array
    // display in chat-messages component
    // send question to the AI for a response
    // return message -> chat response
  };

  return (
    <div className="p-4 flex flex-col">
      <ChatList messages={messages} />
      <MessageInput
        handleSubmit={handleSubmit}
        setInput={setInput}
        input={input}
      />
    </div>
  );
};

export default ChatBot;
