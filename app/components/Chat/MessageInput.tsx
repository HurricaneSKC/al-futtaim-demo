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
      <label className="flex items-center gap-2">
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          className="grow input shadow"
          placeholder="Type your question"
          value={input}
          disabled={isDisabled}
        />
        {/* <p>{listening ? "on" : "off"}</p> */}

        <button
          onMouseDown={startListening}
          onTouchStart={startListening}
          onTouchEnd={stopListening}
          onMouseUp={stopListening}
          disabled={isDisabled}
          className="rounded-full w-12 h-12 bg-white flex justify-center items-center shadow"
        >
          <HiOutlineMicrophone />
        </button>
      </label>
    </form>
  );
};

export default MessageInput;
