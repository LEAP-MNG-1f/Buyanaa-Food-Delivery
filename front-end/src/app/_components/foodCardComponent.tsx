import FoodCard, { FoodCardType } from "./foodCard";

export const FoodCardComponent = () => {
  const foodCardData: FoodCardType[] = [
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
    {
      _id: "5",
      image: "./hamAndCheeseOmelette.png",
      sections: "breakfast",
      name: "Ham and cheese omelette",
      price: 29800,
    },
    {
      _id: "6",
      image: "./healthyBreakfast.png",
      sections: "breakfast",
      name: "Healthy breakfast",
      price: 29800,
    },
    {
      _id: "7",
      image: "./oatmeal.png",
      sections: "breakfast",
      name: "Oatmeal",
      price: 29800,
    },
    {
      _id: "8",
      image: "./pancake.png",
      sections: "breakfast",
      name: "Pancake",
      price: 29800,
    },
    {
      _id: "9",
      image: "./smoothieBowl.png",
      sections: "breakfast",
      name: "Smoothie bowl",
      price: 29800,
    },
  ];

  return (
    <div className=" h-[500px] flex items-center justify-center">
      <div className="w-[1200px]">
        <FoodCard foodCards={foodCardData} />
      </div>
    </div>
  );
};
