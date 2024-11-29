import { Food } from "../model/food.model.js";

const createFood = async (request, response) => {
  try {
    const result = await Food.create({
      name: "Ice cream",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfQjS652_n-ybUhCTveqZw_Wrk4NCkRmygWg&s",
      ingredient: "milk, sugar, strawberry, chocolate, vanilla",
      price: "38000",
      categoryId: "67492e78876259e0eed19171",
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
