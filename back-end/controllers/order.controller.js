import { Order } from "../model/order.model.js";

const createOrder = async (request, response) => {
  console.log(request.body, "shineer irsen data");

  try {
    const result = await Order.create(request.body);
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
