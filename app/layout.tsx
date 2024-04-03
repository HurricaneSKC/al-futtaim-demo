"use client";
import axios from "axios";
import "./globals.css";
import { useEffect, useRef, useState } from "react";
import { DataContext, DataProps } from "./context/dataContext";

const instance = axios.create({
  baseURL: "http://localhost:8000/api",
});

const initialiseData = {
  messages: [
    {
      role: "system",
      content: "",
    },
  ],
  cars: [],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [data, setData] = useState<DataProps>(initialiseData);
  const [serverData, setServerData] = useState<DataProps>(initialiseData);
  const [isChatLoading, setChatLoading] = useState(false);
  const hasPageBeenRendered = useRef(false);

  useEffect(() => {
    const controller = new AbortController();
    console.log("data", data);
    if (hasPageBeenRendered.current) {
      instance
        .post("/cars", data, { signal: controller.signal })
        .then((res) => {
          console.log(res.data);
          setServerData(res.data);
          setChatLoading(false);
        })
        .catch((error) => {
          console.error(error);
        });
    }
    hasPageBeenRendered.current = true;
    return () => controller.abort();
  }, [data]);

  return (
    <html lang="en">
      <body className="flex justify-center">
        <div className="artboard artboard-demo phone-3">
          <DataContext.Provider
            value={{ serverData, setData, isChatLoading, setChatLoading }}
          >
            {children}
          </DataContext.Provider>
        </div>
      </body>
    </html>
  );
}
