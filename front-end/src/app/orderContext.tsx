"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
  createContext,
} from "react";

export type TOrderObject = {
  _id: string;
  userId: string;
  orderNumber: number;
  foodIds: any[];
  totalPrice: number;
  process: string;
  district: string;
  Khoroo: string;
  Apartment: string;
  createdDate: string;
};

interface IOrderContext {
  order: TOrderObject;
  setOrder: Dispatch<SetStateAction<TOrderObject>>;
}

const defaultOrderContext: IOrderContext = {
  order: {
    _id: "",
    userId: "",
    orderNumber: 0,
    foodIds: [],
    totalPrice: 0,
    process: "",
    district: "",
    Khoroo: "",
    Apartment: "",
    createdDate: "",
  },
  setOrder: () => {},
};

export const OrderContext = createContext<IOrderContext>(defaultOrderContext);

interface IOrderContextProvider {
  children: ReactNode;
}

export const OrderContextProvider = ({ children }: IOrderContextProvider) => {
  const [order, setOrder] = useState<TOrderObject>(defaultOrderContext.order);
  // const [quantity, setQuantity] = useState(0);
  // const onAdd = () => {
  //   setQuantity((prev) => prev + 1);
  // };

  const values: IOrderContext = {
    order,
    setOrder,
    //   quantity,
    //   onAdd,
  };

  return (
    <OrderContext.Provider value={values}>{children}</OrderContext.Provider>
  );
};

export const useOrderContext = () => {
  const context = useContext(OrderContext);
  if (context === undefined) {
    throw new Error(
      "useOrderContext must be used within a OrderContextProvider"
    );
  }
  return context;
};
