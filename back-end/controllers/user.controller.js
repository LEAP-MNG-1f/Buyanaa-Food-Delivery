import { User } from "../model/user.model.js";

const createUser = async (request, response) => {
  try {
    const result = await User.create({
      name: "Buyanaa",
      email: "Buyanaa@gmail.com",
      password: "buyanaa1234",
      phoneNumber: 12345678,
    });
    response.json({ success: true, data: result });
  } catch (error) {
    response.json({
      success: false,
      error: error,
    });
  }
};

const getAllUsers = async (request, response) => {
  try {
    const result = await User.find();
    console.log(result);
    response.json({ success: true, data: result });
  } catch (error) {
    response.json({
      success: false,
      error: error,
    });
  }
};

export { createUser, getAllUsers };
