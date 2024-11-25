"use client";
import { useEffect } from "react";

import { BACKEND_ENDPOINT } from "@/constants/constant";
import AnchorTemporaryDrawer from "./_components/drawer";
import { HeroHomePage } from "./_components/heroHomePage";
import { DeliveryCardComponent } from "./_components/deliveryCardComponent";

import {
  FoodCardComponent,
  foodCardData,
} from "./_components/foodCardComponent";

export default function Home() {
  const fetchData = async () => {
    try {
      const response = await fetch(BACKEND_ENDPOINT);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {/* <CustomizedDialogs /> */}
      <HeroHomePage />
      <DeliveryCardComponent />
      <FoodCardComponent />
    </div>
  );
}
