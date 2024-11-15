import { FoodCard } from "./foodCard";

let breakfasts = [
  { img: "./ugluuniihool.png", title: "Өглөөний хоол", price: 16800 },
  { img: "./fruityogurt.png", title: "Өглөөний хоол", price: 16800 },
  { img: "./healthybreakfast.png", title: "Өглөөний хоол", price: 16800 },
  { img: "./icecream.png", title: "Өглөөний хоол", price: 16800 },
];

export const Breakfast = () => {
  return (
    <div>
      {breakfasts.map((breakfast, index) => (
        <FoodCard
          key={index}
          img={breakfast.img}
          title={breakfast.title}
          price={breakfast.price}
        />
      ))}
    </div>
  );
};
