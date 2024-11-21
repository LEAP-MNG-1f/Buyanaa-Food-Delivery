"use client";
import * as React from "react";

export type MenuFoodCardType = {
  _id: string;
  image: string;
  sections?: "breakfast" | "soup" | "main" | "dessert";
  name: string;
  discount?: number;
  price: number;
};

type MenuFoodCardListProps = {
  menuFoodCards: MenuFoodCardType[];
};
export default function MenuFoodCard(props: MenuFoodCardListProps) {
  return (
    <div className="flex flex-wrap max-w-[1200px] gap-y-[60px] justify-between">
      {props.menuFoodCards.map((menuFoodCard) => {
        return (
          <div key={menuFoodCard._id} className="w-[282px]">
            <div className="h-[186px]  rounded-2xl overflow-hidden shadow-xl">
              <img
                src={menuFoodCard.image}
                alt={menuFoodCard.name}
                className="w-full h-full object-cover "
              />
            </div>

            <div className="pt-[14px]">
              <p className="text-lg font-semibold">{menuFoodCard.name}</p>
              <div className="flex gap-4">
                {menuFoodCard.discount && (
                  <p className="text-[var(--green)]">
                    {menuFoodCard.discount}% OFF
                  </p>
                )}
                <p className="text-lg font-semibold text-[var(--green)]">
                  {menuFoodCard.price}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
