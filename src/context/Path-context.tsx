import React, { createContext, ReactNode, useEffect, useState } from "react";
import data from "../data"

export const PathContext = createContext<{
  isPath: string;
  setPath: React.Dispatch<React.SetStateAction<string>>;
  appleLink: string;
  playLink: string;

}>({ isPath: "", setPath: () => {}, appleLink: "", playLink: "" });

export const PathProvider = ({ children }: { children: ReactNode }) => {
  const [isPath, setPath] = useState<string>("");
  const [appleLink, setAppleLink] = useState('');
  const [playLink, setPlayLink] = useState('');

  useEffect(()=>{
  data.Buttons.map((button)=>{
  setAppleLink((button.appLinks?.[0] as { link: string })?.link)
  setPlayLink((button.appLinks?.[1] as { link: string })?.link)
  })
}, [])
  
  return (
    <PathContext.Provider value={{ isPath, setPath, appleLink, playLink }}>
      {children}
    </PathContext.Provider>
  );
};
