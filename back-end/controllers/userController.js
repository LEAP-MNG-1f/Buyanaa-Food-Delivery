import { User } from "../model/user.js";

const createUser = async (request, response) => {
  const result = await User.create({
    name: "Buyanaa",
    email: "Buyanaa@gmail.com",
    password: "buyanaa1234",
    phoneNumber: 12345678,
  });
  response.json({ success: true, data: result });
};

const getAllUsers = async (request, response) => {
  const result = await User.findById({ _id: "674401077cdca8cdb0e9f22c" });
  console.log(result);
  response.json({ success: true, data: result });
};

export { createUser, getAllUsers };
