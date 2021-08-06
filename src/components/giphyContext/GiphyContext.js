import React, { useState } from "react";
import { createContext } from "react";

export const GifContext = createContext();

const GiphyContext = ({ children }) => {
  const [arr, setArr] = useState([
    {
      post: "This is my first Post",
      date: "August 1, 2021",
    },
    {
      post: "This is my Second Post after the first post",
      date: "August 3, 2021",
    },
    {
      post: "This is another post on my account",
      date: "August 5, 2021",
    },
  ]);
  return (
    <GifContext.Provider value={[arr, setArr]}>{children}</GifContext.Provider>
  );
};

export default GiphyContext;
