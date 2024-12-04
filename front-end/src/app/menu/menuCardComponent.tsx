"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import { groupBy, uniqueId } from "lodash";
import FoodCard from "../_components/foodCard";
import { TFoodArray } from "../_components/Types";
import { Category } from "@mui/icons-material";

export const MenuCardComponent = ({ foods }: TFoodArray) => {
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const groupedData = groupBy(foods, (food) => food?.categoryId?.name);

  const handleCategoryClick = (categoryName: void) => {
    setSelectedCategory(categoryName);
  };
  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center w-[1200px]">
        <div className="flex justify-between">
          {Object.keys(groupedData).map((categoryName) => (
            <div key={uniqueId()}>
              <Button
                onClick={() => handleCategoryClick(categoryName)}
                variant="outlined"
                className={`px-6 py-2 text-lg font-medium border rounded-lg transition-colors duration-200
                    ${
                      selectedCategory === categoryName
                        ? "bg-[var(--green] text-white border-[var(--green)]"
                        : "text-gray-900 border-gray-300 hover:bg-[var(--green)] hover:text-white hover:border-[var(--green)]"
                    }`}
              >
                {categoryName}
              </Button>
            </div>
          ))}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {selectedCategory &&
              groupedData[selectedCategory]?.map((food) => (
                <div key={food._id}>
                  <FoodCard food={food} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// import React, { useState } from 'react';
// import { groupBy, uniqueId } from 'lodash';

// export const MenuCardComponent = ({ foods }) => {
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const groupedData = groupBy(foods, (food) => food?.categoryId?.name);

//   const handleCategoryClick = (categoryName) => {
//     setSelectedCategory(categoryName);
//   };

//   return (
//     <div className="flex justify-center">
//       <div className="flex flex-col justify-center w-full max-w-6xl space-y-8">
//         {/* Category Buttons */}
//         <div className="flex flex-wrap gap-4">
//           {Object.keys(groupedData).map((categoryName) => (
//             <button
//               key={uniqueId()}
//               onClick={() => handleCategoryClick(categoryName)}
//               className={`px-6 py-2 text-lg font-medium border rounded-lg transition-colors duration-200
//                 ${
//                   selectedCategory === categoryName
//                     ? 'bg-green-600 text-white border-green-600'
//                     : 'text-gray-900 border-gray-300 hover:bg-green-600 hover:text-white hover:border-green-600'
//                 }`}
//             >
//               {categoryName}
//             </button>
//           ))}
//         </div>

//         {/* Food Cards Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {selectedCategory &&
//             groupedData[selectedCategory]?.map((food) => (
//               <div key={food._id}>
//                 <FoodCard food={food} />
//               </div>
//             ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// // FoodCard component for reference (you can keep your existing FoodCard implementation)
// const FoodCard = ({ food }) => {
//   return (
//     <div className="border rounded-lg p-4 shadow-sm">
//       <h3 className="text-lg font-medium">{food.name}</h3>
//       {/* Add other food details here */}
//     </div>
//   );
// };

// export default MenuCardComponent;

// I'll help you modify the MenuCardComponent to show foods filtered by the selected category. Here's how we can implement this:Menu Card Component with Category FilteringClick to open componentI've made several improvements to your code:

// Added state management for the selected category:

// javascriptCopyconst [selectedCategory, setSelectedCategory] = useState(null);

// Created a click handler for category buttons:

// javascriptCopyconst handleCategoryClick = (categoryName) => {
//   setSelectedCategory(categoryName);
// };

// Replaced MUI Button with a custom styled button using Tailwind classes for better consistency and performance.
// Fixed the food cards mapping logic to only show foods from the selected category:

// javascriptCopy{selectedCategory && groupedData[selectedCategory]?.map((food) => (
//   <div key={food._id}>
//     <FoodCard food={food} />
//   </div>
// ))}

// Improved the layout with a responsive grid for food cards.

// Key changes and improvements:

// The foods will only display after a category is selected
// Active category button is highlighted
// Removed dependency on Material-UI
// Added proper responsive layout
// Used only core Tailwind classes for styling
// Added proper TypeScript support
// Fixed the syntax error in your original mapping logic

// To use this component, you would just need to import it into your Page component as before. The Page component can remain largely the same:
// javascriptCopy"use client";
// import { useEffect, useState } from "react";
// import { MenuCardComponent } from "./menuCardComponent";

// export default function Page() {
//   const [foods, setFoods] = useState([]);

//   const fetchData = async () => {
//     try {
//       const response = await fetch("http://localhost:8000/api/foods");
//       const data = await response.json();
//       setFoods(data.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div className="py-8">
//       <MenuCardComponent foods={foods} />
//     </div>
//   );
// }
// Let me know if you'd like to make any adjustments to the styling or functionality!
