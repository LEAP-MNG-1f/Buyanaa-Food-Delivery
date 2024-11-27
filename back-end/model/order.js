import mongoose from "mongoose";
const roleEnum = {
  values: ["Active", "Waiting", "Progress", "Delivered"],
};

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.SchemaTypes.ObjectId, ref: "User", required: true },
  orderNumber: { type: Number, required: true },
  foodIds: { type: Array, ref: "Food", required: true },
  totalPrice: { type: Number, required: true },
  process: { type: String, enum: roleEnum, default: "Active" },
  createdDate: { type: Date, required: true },
  district: { type: String, required: true },
  Khoroo: { type: String, required: true },
  Apartment: { type: String, required: true },
});

export const Order = mongoose.model("Order", orderSchema);
