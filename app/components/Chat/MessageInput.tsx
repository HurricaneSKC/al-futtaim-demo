import { log } from "console";
import React, { FormEvent } from "react";
import { HiOutlineMicrophone } from "react-icons/hi2";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

interface Props {
  input: string;
  handleSubmit: (e: FormEvent) => void;
  setInput: (e: string) => void;
  isDisabled: boolean;
}

const MessageInput = ({ handleSubmit, setInput, input, isDisabled }: Props) => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const startListening = () => {
    console.log("listening");
    SpeechRecognition.startListening();
  };

  const stopListening = () => {
    SpeechRecognition.stopListening;
    console.log(transcript);
    setInput(transcript);
  };

  return (
    <form
      action=""
      onSubmit={(e) => handleSubmit(e)}
      className="flex-none mt-auto"
    >
      <label className="input input-bordered flex items-center gap-2">
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          className="grow"
          placeholder="Chat"
          value={input}
          disabled={isDisabled}
        />
        <p>{listening ? "on" : "off"}</p>
        <button
          onMouseDown={startListening}
          onTouchStart={startListening}
          onTouchEnd={stopListening}
          onMouseUp={stopListening}
        >
          <HiOutlineMicrophone />
        </button>
      </label>
    </form>
  );
};

export default MessageInput;
