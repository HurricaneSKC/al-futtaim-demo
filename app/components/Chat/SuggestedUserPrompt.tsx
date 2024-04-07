import { DataContext } from "@/app/context/dataContext";
import React, { useContext } from "react";
import carList from "@/app/mockdata/cars.json";

interface Props {
  promptMessage: string;
  onClick?: () => void;
}

const SuggestedUserPrompt = ({ promptMessage }: Props) => {
  const { serverData, setData, setChatLoading } = useContext(DataContext);

  const onClick = () => {
    setData({
      ...serverData,
      messages: [
        ...serverData.messages,
        { role: "user", content: promptMessage },
      ],
    });
    setChatLoading(true);
  };

  return (
    <button className="btn my-1" onClick={onClick}>
      {promptMessage}
    </button>
  );
};

export default SuggestedUserPrompt;
