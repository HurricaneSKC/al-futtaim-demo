import Message from "@/app/entities/Message";
import { useContext, useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";
import LoadingMessage from "./LoadingMessage";
import InitialChatBotMessage from "./InitialChatBotMessage";
import { DataContext, DataProps } from "@/app/context/dataContext";
import Image from "next/image";
import ChatBotMessageTemplate from "./ChatBotMessageTemplate";

interface Props {
  messages: Message[];
  isLoading: Boolean;
}

const ChatList = ({ messages, isLoading }: Props) => {
  const messagesEndRef = useRef<null | HTMLDivElement>(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const { serverData } = useContext(DataContext);
  const carImages = (serverData: DataProps) => {
    console.log(serverData.cars.length);

    if (serverData.cars.length >= 4 || serverData.cars.length < 0) return null;
    return (
      <ChatBotMessageTemplate>
        <p className="m-1">
          {serverData.cars.length === 1
            ? "Here is your best option that we have available"
            : `Here are ${serverData.cars.length} of the options we have available`}
        </p>
        <div className="grid grid-cols-2 items-center justify-items-center min-h-[200px] bg-white rounded-2xl shadow">
          {serverData.cars.length === 1 ? (
            <Image
              src={serverData.cars[0].image}
              width={300}
              height={300}
              alt={serverData.cars[0].Car_Name}
              className="col-span-2"
            />
          ) : (
            serverData.cars.map((car, index) => (
              <Image
                key={index}
                src={car.image}
                width={150}
                height={150}
                alt={car.Car_Name}
                className={index === 0 ? "row-span-2" : ""}
              />
            ))
          )}
        </div>
      </ChatBotMessageTemplate>
    );
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="chat-messages py-2 flex-1 overflow-y-auto">
      <InitialChatBotMessage content="Hi, how can I help you today?" />
      {messages.map(({ role, content }, index) => (
        <ChatMessage key={index} role={role} content={content} />
      ))}
      {isLoading && <LoadingMessage />}
      {!isLoading && serverData.cars.length <= 3 && carImages(serverData)}
      <div ref={messagesEndRef}></div>
    </div>
  );
};

export default ChatList;
