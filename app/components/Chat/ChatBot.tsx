import React, { FormEvent } from "react";
import { HiOutlineMicrophone } from "react-icons/hi2";
import ChatResponse from "./ChatResponse";
import ChatMessage from "./ChatMessage";

const ChatBot = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault;
  };
  return (
    <div>
      <div className="chat-messages py-2">
        <ChatResponse />
        <ChatMessage />
        <ChatResponse />
        <ChatMessage />
      </div>
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            className="grow"
            placeholder="Chat"
            x-webkit-speech
          />
          <button
            onClick={() => {
              console.log("switch on microphone");
            }}
          >
            <HiOutlineMicrophone />
          </button>
        </label>
      </form>
    </div>
  );
};

export default ChatBot;
