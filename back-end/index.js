import express, { request, response } from "express";
import cors from "cors";
import { v2 as cloudinary } from "cloudinary";
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

server.get("/", (request, response) => {
  response.json(["Hello", "Billy", "&", "Dashka"]);
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT} ajillaj ehellee`);
});
