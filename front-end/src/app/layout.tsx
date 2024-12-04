"use client";
import "./globals.css";
import { Header } from "./_components/header";
import { Footer } from "./_components/footer";
import { FoodContextProvider, useFoodContext } from "./context";
import { useEffect, useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <FoodContextProvider>
          <Header />
          <div className="flex flex-col"> {children}</div>
        </FoodContextProvider>

        <Footer />
      </body>
    </html>
  );
}
