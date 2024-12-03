"use client";
import { createContext, ReactNode, useContext, useState } from "react";

interface IStateContext {
  quantity: number;
  onAdd: () => void;
}

const defaultStateContext = {
  quantity: 1,
  onAdd: () => {},
};
export const StateContext = createContext<IStateContext>(defaultStateContext);

interface IStateContextProvider {
  children: ReactNode;
}

export const StateContextProvider = ({ children }: IStateContextProvider) => {
  const [quantity, setQuantity] = useState(0);

  const onAdd = () => {
    setQuantity((prev) => prev + 1);
  };

  const values = {
    quantity,
    onAdd,
  };
  return (
    <StateContext.Provider value={values}>{children}</StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
