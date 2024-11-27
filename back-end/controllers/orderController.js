import { Order } from "../model/order.js";

const createOrder = async (request, response) => {
  const result = await Order.create({
    userId: "aakhfjahf",
    orderNumber: 1,
    foodIds: ["asdsaasd"],
    totalPrice: 38000,
    process: "Active",
    district: "Баянгол дүүрэг",
    Khoroo: "1-р хороо",
    Apartment: "Зайсан хотхон",
  });
  response.json({ success: true, data: result });
};

const getAllOrders = async (request, response) => {
  const result = await Order.findById({
    _id: "674401077cdca8cdb0e9f22c",
  }).populate(userId);
  console.log(result);
  response.json({ success: true, data: result });
};

export { createOrder, getAllOrders };
