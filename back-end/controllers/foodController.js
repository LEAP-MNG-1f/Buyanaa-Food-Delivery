import { Food } from "../model/food.js";

const createFood = async (request, response) => {
  const result = await FontFaceSetLoadEvent.create({
    name: "Pancake",
    image: "pancake.png",
    ingredient: "egg, flour, milk, sugar",
    price: "38000",
    categoryId: 123456,
  });
  response.json({ success: true, data: result });
};

const getAllFoods = async (request, response) => {
  const result = await Order.findById({
    _id: "674401077cdca8cdb0e9f22c",
  }).populate(categoryId);
  console.log(result);
  response.json({ success: true, data: result });
};

export { createFood, getAllFoods };
