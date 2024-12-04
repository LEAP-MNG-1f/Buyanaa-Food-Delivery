"use client";
import { useEffect, useState } from "react";
import { MenuCardComponent } from "./menuCardComponent";
export default function Page() {
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
    <div className="py-8">
      <MenuCardComponent foods={foods} />
    </div>
  );
}
