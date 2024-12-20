"use client";
import * as React from "react";
import { useState } from "react";
import { StarIcon } from "../svg/starIcon";
import { Link, Typography } from "@mui/material";
import { RightArrow } from "../svg/rightArrow";
import FoodCard from "./foodCard";
import { TFoodArray } from "./Types";
import { groupBy, uniqueId } from "lodash";

export const FoodCardComponent = ({ foods }: TFoodArray) => {
  const groupedData = groupBy(foods, (food) => food?.categoryId?.name);
  console.log(groupedData);
  return (
    <div className=" h-full flex items-center flex-col gap-[80px]">
      <div className="w-[1200px] flex-wrap">
        {Object.keys(groupedData).map((categoryName) => (
          <div className="flex flex-col gap-6 pb-20" key={uniqueId()}>
            <div className="flex justify-between">
              <div className="flex py-4 items-center gap-[6px]">
                <StarIcon />
                <Typography sx={{ fontWeight: 700, fontSize: 22 }}>
                  {categoryName}
                </Typography>
              </div>
              <Link href={"/menu"}>
                <button className="mt-4 text-[var(--green)] text-sm flex gap-2 items-center">
                  Бүгдийг харах
                  <RightArrow />
                </button>
              </Link>
            </div>
            <div className="flex justify-between">
              {groupedData[categoryName]?.slice(0, 4).map((food) => {
                return (
                  <div key={food._id}>
                    <FoodCard food={food} />
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
