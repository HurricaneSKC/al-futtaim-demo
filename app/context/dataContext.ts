import { Dispatch, SetStateAction, createContext } from "react";
import Message from "../entities/Message";
import Cars from "../entities/Cars";

export interface DataProps {
  messages: Message[];
  cars: Cars[];
}

interface DataContextType {
  serverData: DataProps;
  setData: Dispatch<SetStateAction<DataProps>>;
  isChatLoading: boolean;
  setChatLoading: Dispatch<SetStateAction<boolean>>;
}

export const DataContext = createContext<DataContextType>(
  {} as DataContextType
);