import express, { request, response } from "express";
import cors from "cors";
import { v2 as cloudinary } from "cloudinary";
import connectDb from "./connectDB.js";
import { ObjectId } from "mongodb";

const server = express();
const PORT = 8000;
server.use(cors());

// Require the cloudinary library
// const cloudinary = require("cloudinary").v2;

server.post("/image-upload", async (request, response) => {
  try {
    cloudinary.config({
      cloud_name: "dwcpctn0h",
      api_key: "417134195133838",
      api_secret: "1blgPGUmuZCoEC5txB62srplC6w",
    });
    const uploadResult = await cloudinary.uploader.upload("./assets/cake.png");
    console.log(uploadResult);
  } catch (error) {
    console.log("cloudinary error", error);
  }
});

server.get("/", async (request, response) => {
  const db = await connectDb();
  let collection = db.collection("comments");
  let results = await collection.find().limit(10).toArray();

  response.json({
    success: true,
    data: results,
  });
});
server.post("/create-user", async (req, response) => {
  const db = await connectDb();

  const collection = db.collection("product");
  const result = await collection.insertOne({
    name: "book",
    owner: "Buyanaas",
    price: "2000",
  });

  response.json({
    succes: true,
    data: result,
  });
});

server.put("/update-user", async (req, response) => {
  const db = await connectDb();

  const collection = db.collection("product");
  const result = await collection.updateOne(
    {
      _id: new ObjectId("67400388cf21593239ed3475"),
    },
    {
      $set: { price: "8800", date: new Date() },
    }
  );

  response.json({
    succes: true,
    data: result,
  });
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT} ajillaj ehellee`);
});
