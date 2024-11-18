"use client";
import { useEffect } from "react";

import { BACKEND_ENDPOINT } from "@/constants/constant";
import AnchorTemporaryDrawer from "./_components/drawer";
import { ResponsiveAppBar } from "./_components/header";

import { Breakfast } from "./_components/breakfast";
import { HeroHomePage } from "./_components/heroHomePage";
import { DeliveryCardComponent } from "./_components/deliveryCardComponent";
import FoodCard from "./_components/foodCard";
import { FoodCardComponent } from "./_components/foodCardComponent";
import { Footer } from "./_components/footer";

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
      <ResponsiveAppBar />
      <HeroHomePage />
      <DeliveryCardComponent />
      <FoodCardComponent />
      <Footer />
    </div>
  );
}
