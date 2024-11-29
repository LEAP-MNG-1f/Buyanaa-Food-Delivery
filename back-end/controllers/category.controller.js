import { Category } from "../model/category.model.js";

const createCategory = async (request, response) => {
  try {
    const result = await Category.create({
      name: "Dessert",
    });
    response.json({ success: true, data: result });
  } catch (error) {
    response.json({ success: false, error: error });
  }
};

const getAllCategories = async (request, response) => {
  try {
    const result = await Category.find();
    response.json({ success: true, data: result });
  } catch (error) {
    response.json({ success: false, error: error });
  }
};

export { createCategory, getAllCategories };
