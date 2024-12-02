import { Food } from "../model/food.model.js";

const createFood = async (request, response) => {
  try {
    const result = await Food.create({
      name: "Ravioli soup",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh9zMPBF-xuU7WY0NGnCjG8a87fisDy43txg&s",
      ingredient:
        "tomato, beef, onion, egg, flour, basil, ricotta cheese, parmesan cheese",
      price: "58000",
      categoryId: "674d11f3f62823c988745939",
    });
    response.json({ success: true, data: result });
  } catch (error) {
    response.json({ success: false, error: error });
  }
};

const getAllFoods = async (request, response) => {
  try {
    const result = await Food.find().populate("categoryId");
    console.log(result);
    response.json({ success: true, data: result });
  } catch (error) {
    response.json({ success: false, error: error });
  }
};

export { createFood, getAllFoods };
