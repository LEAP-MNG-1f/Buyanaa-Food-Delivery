"use client";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { TFoodObject } from "./_components/Types";

interface IFoodContext {
  cartFoods: TFoodObject[];
  setCartFoods: Dispatch<SetStateAction<TFoodObject[]>>;
  quantity: number;
  onAdd: () => void;
}

const defaultFoodContext: IFoodContext = {
  cartFoods: [],
  setCartFoods: () => {},
  quantity: 1,
  onAdd: () => {},
};

export const FoodContext = createContext<IFoodContext>(defaultFoodContext);

interface IFoodContextProvider {
  children: ReactNode;
}

export const FoodContextProvider = ({ children }: IFoodContextProvider) => {
  const [cartFoods, setCartFoods] = useState<TFoodObject[]>([]);
  const [quantity, setQuantity] = useState(0);
  const onAdd = () => {
    setQuantity((prev) => prev + 1);
  };

  const values: IFoodContext = {
    cartFoods,
    setCartFoods,
    quantity,
    onAdd,
  };

  return <FoodContext.Provider value={values}>{children}</FoodContext.Provider>;
};

export const useFoodContext = () => {
  const context = useContext(FoodContext);
  if (context === undefined) {
    throw new Error("useFoodContext must be used within a FoodContextProvider");
  }
  return context;
};
