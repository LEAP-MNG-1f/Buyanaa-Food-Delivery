"use client";
import { useEffect } from "react";

import { BACKEND_ENDPOINT } from "@/constants/constant";

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
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="font-extrabold text-3xl">Buyanaa's</h1>
        <p>Food delivery project</p>
      </main>
    </div>
  );
}
