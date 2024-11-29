import { Order } from "../model/order.model.js";

const createOrder = async (request, response) => {
  try {
    const result = await Order.create({
      userId: "674921a9d9755e027fc120ae",
      orderNumber: 1,
      foodIds: "6749251594d68b5ee157a243",
      totalPrice: 38000,
      process: "Active",
      district: "Баянгол дүүрэг",
      Khoroo: "1-р хороо",
      Apartment: "Зайсан хотхон",
    });
    response.json({ success: true, data: result });
  } catch (error) {
    response.json({ success: false, error: error });
  }
};

const getAllOrder = async (request, response) => {
  try {
    const result = await Order.find().populate("userId").populate("foodIds");
    response.json({ success: true, data: result });
  } catch (error) {
    response.json({ success: false, error: error });
  }
};

export { createOrder, getAllOrder };
