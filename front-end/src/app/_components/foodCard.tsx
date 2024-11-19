"use client";
import * as React from "react";
import { useState } from "react";
import { StarIcon } from "../svg/starIcon";
import { Typography } from "@mui/material";
import { RightArrow } from "../svg/rightArrow";

export type FoodCardType = {
  _id: string;
  image: string;
  sections?: "breakfast" | "soup" | "main" | "dessert";
  name: string;
  discount?: number;
  price: number;
};

type FoodCardListProps = {
  foodCards: FoodCardType[];
};
export default function FoodCard(props: FoodCardListProps) {
  const [showAll, setShowAll] = useState(false);

  // Function to toggle the visibility of all cards
  const handleToggle = () => {
    setShowAll(!showAll);
  };

  // Determine which food cards to display
  const displayedCards = showAll
    ? props.foodCards
    : props.foodCards.slice(0, 4);

  return (
    <div className="flex flex-col gap-20">
      <div className="flex flex-col gap-6">
        <div className="flex justify-between">
          <div className="flex py-4 items-center gap-1">
            <StarIcon />{" "}
            <Typography sx={{ fontWeight: 700, fontSize: 22 }}>
              Breakfast
            </Typography>
          </div>
          {/* View All Button */}
          {props.foodCards.length > 4 && (
            <button
              onClick={handleToggle}
              className="mt-4 text-[var(--green)] text-sm flex gap-2 items-center"
            >
              {showAll ? "View Less" : "Бүгдийг харах"}
              <RightArrow />
            </button>
          )}
        </div>
        <div className="flex gap-10">
          {displayedCards.map((foodCard) => {
            return (
              <div key={foodCard._id} className="w-[282px]">
                <div className="h-[186px]  rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={foodCard.image}
                    alt={foodCard.name}
                    className="w-full h-full object-cover "
                  />
                </div>

                <div className="pt-[14px]">
                  <p>{foodCard.name}</p>
                  <div className="flex gap-4">
                    {foodCard.discount && (
                      <p className="text-[var(--green)]">
                        {foodCard.discount}% OFF
                      </p>
                    )}
                    <p>{foodCard.price}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex justify-between">
          <div className="flex py-4 items-center gap-1">
            <StarIcon />{" "}
            <Typography sx={{ fontWeight: 700, fontSize: 22 }}>Soup</Typography>
          </div>
          {/* View All Button */}
          {props.foodCards.length > 4 && (
            <button
              onClick={handleToggle}
              className="mt-4 text-[var(--green)] text-sm flex gap-2 items-center"
            >
              {showAll ? "View Less" : "Бүгдийг харах"}
              <RightArrow />
            </button>
          )}
        </div>
        <div className="flex gap-10">
          {displayedCards.map((foodCard) => {
            return (
              <div key={foodCard._id} className="w-[282px]">
                <div className="h-[186px]  rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={foodCard.image}
                    alt={foodCard.name}
                    className="w-full h-full object-cover "
                  />
                </div>

                <div className="pt-[14px]">
                  <p>{foodCard.name}</p>
                  <div className="flex gap-4">
                    {foodCard.discount && (
                      <p className="text-[var(--green)]">
                        {foodCard.discount}% OFF
                      </p>
                    )}
                    <p>{foodCard.price}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex justify-between">
          <div className="flex py-4 items-center gap-1">
            <StarIcon />{" "}
            <Typography sx={{ fontWeight: 700, fontSize: 22 }}>Main</Typography>
          </div>
          {/* View All Button */}
          {props.foodCards.length > 4 && (
            <button
              onClick={handleToggle}
              className="mt-4 text-[var(--green)] text-sm flex gap-2 items-center"
            >
              {showAll ? "View Less" : "Бүгдийг харах"}
              <RightArrow />
            </button>
          )}
        </div>
        <div className="flex gap-10">
          {displayedCards.map((foodCard) => {
            return (
              <div key={foodCard._id} className="w-[282px]">
                <div className="h-[186px]  rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={foodCard.image}
                    alt={foodCard.name}
                    className="w-full h-full object-cover "
                  />
                </div>

                <div className="pt-[14px]">
                  <p>{foodCard.name}</p>
                  <div className="flex gap-4">
                    {foodCard.discount && (
                      <p className="text-[var(--green)]">
                        {foodCard.discount}% OFF
                      </p>
                    )}
                    <p>{foodCard.price}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex justify-between">
          <div className="flex py-4 items-center gap-1">
            <StarIcon />{" "}
            <Typography sx={{ fontWeight: 700, fontSize: 22 }}>
              Dessert
            </Typography>
          </div>
          {/* View All Button */}
          {props.foodCards.length > 4 && (
            <button
              onClick={handleToggle}
              className="mt-4 text-[var(--green)] text-sm flex gap-2 items-center"
            >
              {showAll ? "View Less" : "Бүгдийг харах"}
              <RightArrow />
            </button>
          )}
        </div>
        <div className="flex gap-10">
          {displayedCards.map((foodCard) => {
            return (
              <div key={foodCard._id} className="w-[282px]">
                <div className="h-[186px]  rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={foodCard.image}
                    alt={foodCard.name}
                    className="w-full h-full object-cover "
                  />
                </div>

                <div className="pt-[14px]">
                  <p>{foodCard.name}</p>
                  <div className="flex gap-4">
                    {foodCard.discount && (
                      <p className="text-[var(--green)]">
                        {foodCard.discount}% OFF
                      </p>
                    )}
                    <p>{foodCard.price}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
