import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import userRouter from "./routes/userRoute.js";

mongoose.connect(
  "mongodb+srv://Buyanaa:Heavenly8$@cluster0.kxb3o.mongodb.net//food-delivery"
);
const server = express();
const PORT = 8000;
server.use(cors());
server.use("/api", userRouter);

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT} ajillaj ehellee`);
});
