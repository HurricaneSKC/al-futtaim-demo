"use client";

import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

import Message from "../entities/Message";
import Cars, { CustomCar } from "../entities/Cars";
import instance from "../client";
import { carDataAdapter } from "./utils";
import cars from "../mockdata/cars.json";

export interface DataProps {
  messages: Message[];
  cars: CustomCar[];
}

interface DataContextType {
  serverData: DataProps;
  setData: Dispatch<SetStateAction<DataProps>>;
  isChatLoading: boolean;
  setChatLoading: Dispatch<SetStateAction<boolean>>;
  showChatOverlay: boolean;
  setShowChatOverlay: Dispatch<SetStateAction<boolean>>;
}

export const DataContext = createContext<DataContextType>(
  {} as DataContextType
);

const initialiseData = {
  messages: [
    {
      role: "system",
      content: "",
    },
  ],
  cars: carDataAdapter([...cars.cars]),
};

function DataProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<DataProps>(initialiseData);
  const [serverData, setServerData] = useState<DataProps>(initialiseData);
  const [isChatLoading, setChatLoading] = useState(false);
  const [showChatOverlay, setShowChatOverlay] = useState(false);
  const hasPageBeenRendered = useRef(false);
  useEffect(() => {
    const controller = new AbortController();
    if (hasPageBeenRendered.current) {
      instance
        .post<DataProps>("/cars", data, { signal: controller.signal })
        .then((res) => {
          setServerData({ ...res.data, cars: carDataAdapter(res.data.cars) });
          setChatLoading(false);
        })
        .catch((error) => {
          console.error(error);
        });
    }
    hasPageBeenRendered.current = true;
    return () => controller.abort();
  }, [data]);

  const contextValue = {
    serverData,
    setData,
    isChatLoading,
    setChatLoading,
    showChatOverlay,
    setShowChatOverlay,
  };
  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
}

function useDataContext() {
  const context = useContext(DataContext);
  if (typeof context === "undefined") {
    throw new Error("useDataContext must be used within a DataContextProvider");
  }
  return context;
}

export { useDataContext, DataProvider };
