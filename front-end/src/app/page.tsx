"use client";
import { useState, useEffect, useContext } from "react";

import { BACKEND_ENDPOINT } from "@/constants/constant";
import AnchorTemporaryDrawer from "./_components/drawer";
import { HeroHomePage } from "./_components/heroHomePage";
import { DeliveryCardComponent } from "./_components/deliveryCardComponent";
import { useStateContext } from "./context";
import { FoodCardComponent } from "./_components/foodCardComponent";

export default function Home() {
  const { quantity, onAdd } = useStateContext();
  const [foods, setFoods] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/foods");
      const data = await response.json();
      setFoods(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <HeroHomePage />
      <DeliveryCardComponent />
      <FoodCardComponent foods={foods} />
      <p>{quantity}</p>
      <button onClick={onAdd}>click me</button>

      {/* <CustomizedDialogs /> */}
    </div>
  );
}
