import React from "react";

const SuggestedUserPrompt = () => {
  return (
    <button
      className="btn"
      onClick={() => {
        console.log("hello");
      }}
    >
      Prompt message
    </button>
  );
};

export default SuggestedUserPrompt;
