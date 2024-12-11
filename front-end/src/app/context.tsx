"use client";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
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
  quantity: number;
};

type IFoodContext = {
  cartFoods: TFoodObject[];
  setCartFoods: Dispatch<SetStateAction<TFoodObject[]>>;
  quantity: number;
  onAdd: () => void;
  totalPrice: number;
};

const defaultFoodContext: IFoodContext = {
  cartFoods: [],
  setCartFoods: () => {},
  quantity: 1,
  onAdd: () => {},
  totalPrice: 0,
};

export const FoodContext = createContext<IFoodContext>(defaultFoodContext);

interface IFoodContextProvider {
  children: ReactNode;
}

export const FoodContextProvider = ({ children }: IFoodContextProvider) => {
  const [cartFoods, setCartFoods] = useState<TFoodObject[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [quantity, setQuantity] = useState(1);
  const onAdd = () => {
    setQuantity((prev) => prev + 1);
  };

  useEffect(() => {
    const calculatedPrice = cartFoods.reduce(
      (prevValue, currentValue) =>
        prevValue + Number(currentValue?.price) * currentValue?.quantity,
      0
    );

    setTotalPrice(calculatedPrice);
  }, [cartFoods]);

  const values: IFoodContext = {
    cartFoods,
    setCartFoods,
    quantity,
    onAdd,
    totalPrice,
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
