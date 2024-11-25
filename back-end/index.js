import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import userRouter from "./routes/userRoute.js";

mongoose.connect(
  "mongodb+srv://ace12d192:wap3TZLOZeJlgLIq@cluster0.s6jvj.mongodb.net/food-delivery"
);
const server = express();
const PORT = 8000;
server.use(cors());
server.use("/api", userRouter);

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT} ajillaj ehellee`);
});
