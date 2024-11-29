import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import userRouter from "./routes/user.route.js";
import foodRouter from "./routes/food.route.js";
import categoryRouter from "./routes/category.route.js";
import orderRouter from "./routes/order.route.js";

mongoose.connect(
  "mongodb+srv://Buyanaa:Heavenly8$@cluster0.kxb3o.mongodb.net/food-delivery"
);
const server = express();
const PORT = 8000;
server.use(cors());
server.use("/api", userRouter);
server.use("/api", foodRouter);
server.use("/api", categoryRouter);
server.use("/api", orderRouter);

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT} ajillaj ehellee`);
});
