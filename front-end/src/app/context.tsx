"use client";
import { createContext, ReactNode, useContext, useState } from "react";

interface IFoodContext {
  _id?: string;
  _v?: string;
  price: string;
  name: string;
  ingredient: string;
  image: string;
  categoryId?: string;
  quantity: number;
  onAdd: () => void;
}

const defaultFoodContext = {
  _id: "",
  _v: "",
  price: "",
  name: "",
  ingredient: "",
  image: "",
  categoryId: "",
  quantity: 1,
  onAdd: () => {},
};
export const FoodContext = createContext<IFoodContext>(defaultFoodContext);

interface IFoodContextProvider {
  children: ReactNode;
}

export const FoodContextProvider = ({ children }: IFoodContextProvider) => {
  const [quantity, setQuantity] = useState(0);

  const onAdd = () => {
    setQuantity((prev) => prev + 1);
  };

  const values = {
    quantity,
    onAdd,
  };
  return <FoodContext.Provider value={values}>{children}</FoodContext.Provider>;
};

export const useFoodContext = () => useContext(FoodContext);
