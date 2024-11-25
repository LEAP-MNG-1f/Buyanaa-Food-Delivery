"use client";
import * as React from "react";
import { useState } from "react";
import { StarIcon } from "../svg/starIcon";
import { Typography } from "@mui/material";
import { RightArrow } from "../svg/rightArrow";
import FoodCard from "./foodCard";

export type FoodCardType = {
  _id: string;
  image: string;
  sections?: "breakfast" | "soup" | "main" | "dessert";
  name: string;
  discount?: number;
  price: number;
};

export type FoodCardListProps = {
  foodCards: FoodCardType[];
};

export const foodCardData: FoodCardType[] = [
  {
    _id: "1",
    image: "./avocadoToast.png",
    sections: "breakfast",
    name: "Avocado Toast",
    price: 29800,
  },
  {
    _id: "2",
    image: "./breakfastBurrito.png",
    sections: "breakfast",
    name: "Breakfast Burrito",
    price: 29800,
  },
  {
    _id: "3",
    image: "./creamCheeseBagel.png",
    sections: "breakfast",
    name: "Cream cheese bagel",
    price: 29800,
  },
  {
    _id: "4",
    image: "./eggsBenedict.png",
    sections: "breakfast",
    name: "Eggs benedict",
    price: 29800,
  },
];

export const FoodCardComponent = () => {
  return (
    <div className=" h-full flex items-center flex-col gap-[80px]">
      <div className="w-[1200px] flex-wrap">
        <div className="flex flex-col gap-20 pb-[82px]">
          <div className="flex flex-col gap-6">
            <div className="flex justify-between">
              <div className="flex py-4 items-center gap-[6px]">
                <StarIcon />
                <Typography sx={{ fontWeight: 700, fontSize: 22 }}>
                  Breakfast
                </Typography>
              </div>
              <button className="mt-4 text-[var(--green)] text-sm flex gap-2 items-center">
                Бүгдийг харах
                <RightArrow />
              </button>
            </div>
            <div className="flex justify-between !p-0">
              {foodCardData.map((foodCard) => {
                return (
                  <div key={foodCard._id}>
                    <FoodCard foodCard={foodCard} />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex justify-between">
              <div className="flex py-4 items-center gap-[6px]">
                <StarIcon />
                <Typography sx={{ fontWeight: 700, fontSize: 22 }}>
                  Soup
                </Typography>
              </div>
              <button className="mt-4 text-[var(--green)] text-sm flex gap-2 items-center">
                Бүгдийг харах
                <RightArrow />
              </button>
            </div>
            <div className="flex justify-between ">
              {foodCardData.map((foodCard) => {
                return (
                  <div key={foodCard._id}>
                    <FoodCard foodCard={foodCard} />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex justify-between">
              <div className="flex py-4 items-center gap-[6px]">
                <StarIcon />
                <Typography sx={{ fontWeight: 700, fontSize: 22 }}>
                  Main Course
                </Typography>
              </div>
              <button className="mt-4 text-[var(--green)] text-sm flex gap-2 items-center">
                Бүгдийг харах
                <RightArrow />
              </button>
            </div>
            <div className="flex justify-between">
              {foodCardData.map((foodCard) => {
                return (
                  <div key={foodCard._id}>
                    <FoodCard foodCard={foodCard} />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex justify-between">
              <div className="flex py-4 items-center gap-[6px]">
                <StarIcon />
                <Typography sx={{ fontWeight: 700, fontSize: 22 }}>
                  Dessert
                </Typography>
              </div>
              <button className="mt-4 text-[var(--green)] text-sm flex gap-2 items-center">
                Бүгдийг харах
                <RightArrow />
              </button>
            </div>
            <div className="flex justify-between">
              {foodCardData.map((foodCard) => {
                return (
                  <div key={foodCard._id}>
                    <FoodCard foodCard={foodCard} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
