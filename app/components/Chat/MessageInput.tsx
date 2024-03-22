import React, { FormEvent } from "react";
import { HiOutlineMicrophone } from "react-icons/hi2";

interface Props {
  input: string;
  handleSubmit: (e: FormEvent) => void;
  setInput: (e: string) => void;
}

const MessageInput = ({ handleSubmit, setInput, input }: Props) => {
  return (
    <form action="" onSubmit={(e) => handleSubmit(e)} className="flex-none">
      <label className="input input-bordered flex items-center gap-2">
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          className="grow"
          placeholder="Chat"
          value={input}
          disabled={false}
        />
        <HiOutlineMicrophone />
      </label>
    </form>
  );
};

export default MessageInput;
