import express from "express";
import { createOrder, getAllOrder } from "../controllers/order.controller.js";

const orderRouter = express.Router();

orderRouter.get("/orders", getAllOrder);
orderRouter.post("/orders", createOrder);

export default orderRouter;
