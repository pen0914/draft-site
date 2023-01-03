import React, { VFC, memo, createContext, ReactNode, useState } from "react";

type Props = {
  children: ReactNode;
};

export const ItemContext = createContext({});
export const ItemProvider: VFC<Props> = memo((props) => {
  const { children } = props;

  type Object = {
    name: string;
    age: number;
  };
  const item: Array<Object> = [
    { name: "1", age: 1 },
    { name: "2", age: 2 },
    { name: "3", age: 3 }
  ];

  const dog: string = "2";

  return (
    <ItemContext.Provider value={{ dog }}>{children}</ItemContext.Provider>
  );
});
