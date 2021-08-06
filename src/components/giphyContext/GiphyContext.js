import React, { useState } from "react";
import { createContext } from "react";

export const GifContext = createContext();

const GiphyContext = ({ children }) => {
  const [arr, setArr] = useState([
    {
      post: "This is my first Post",
      date: "1/7/2020",
      gif: "",
    },
    {
      post: "This is my Second Post after the first post",
      date: "3/7/2020",
      gif: "",
    },
    {
      post: "This is another post on my account",
      date: "5/7/2020",
      gif: "",
    },
  ]);
  return (
    <GifContext.Provider value={[arr, setArr]}>{children}</GifContext.Provider>
  );
};

export default GiphyContext;
