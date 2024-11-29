import express from "express";
import {
  createCategory,
  getAllCategories,
} from "../controllers/category.controller.js";

const categoryRouter = express.Router();

categoryRouter.get("/categories", getAllCategories);
categoryRouter.post("/categories", createCategory);

export default categoryRouter;
