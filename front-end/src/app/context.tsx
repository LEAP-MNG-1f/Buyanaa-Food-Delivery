"use client";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

export type TCategoryId = {
  name: string;
  _id: string;
  _v: number;
};

export type TFoodObject = {
  _id?: string;
  _v?: string;
  price: string;
  name: string;
  ingredient: string;
  image: string;
  categoryId?: TCategoryId;
  quantity?: number;
};

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
