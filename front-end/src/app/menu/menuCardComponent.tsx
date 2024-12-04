"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import { groupBy, uniqueId } from "lodash";
import FoodCard from "../_components/foodCard";
import { TFoodArray } from "../_components/Types";

export const MenuCardComponent = ({ foods }: TFoodArray) => {
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const groupedData = groupBy(foods, (food) => food?.categoryId?.name);

  const handleCategoryClick = (categoryName: void) => {
    setSelectedCategory(categoryName);
  };
  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center w-[1200px]">
        <div className="flex justify-between gap-[26px] py-8">
          {Object.keys(groupedData).map((categoryName) => (
            <div className="flex-1" key={uniqueId()}>
              <button
                onClick={() => handleCategoryClick(categoryName)}
                className={`w-full px-6 py-2 text-lg font-medium border border-[#D6D8DB] rounded-lg transition-colors duration-200
                    ${
                      selectedCategory === categoryName
                        ? "bg-green-500 text-white border-green-500"
                        : "text-gray-900 border-[#D6D8DB] hover:bg-green-500 hover:text-white hover:border-green-500"
                    }`}
              >
                {categoryName}
              </button>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-[54px] gap-[60px]">
          {selectedCategory &&
            groupedData[selectedCategory]?.map((food) => (
              <div key={food._id}>
                <FoodCard food={food} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
