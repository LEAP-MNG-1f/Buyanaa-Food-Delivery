"use client";
import { useEffect, useState } from "react";

export default function Page() {
  const [orders, setOrders] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/orders");
      const data = await response.json();
      console.log(data);
      setOrders(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      <div className="bg-white rounded-lg shadow">
        {/* Header */}
        <div className="grid grid-cols-5 gap-4 p-4 bg-gray-50 rounded-t-lg font-semibold text-gray-700">
          <p className="p-6">Order name </p>
          <p className="p-6">Buyer info</p>
          <p className="p-6">Payment</p>
          <p className="p-6">Address</p>
          <p className="p-6">Delivery state</p>
        </div>
        <div className="divide-y divide-gray-200">
          {orders.map((order) => {
            return (
              <div
                key={order._id}
                className="grid grid-cols-5 gap-4 p-4 hover:bg-gray-50"
              >
                <div space-y-1 className="p-6">
                  <p>{order?._id}</p>
                  <p>{order?.foodIds}</p>
                </div>
                <div space-y-1 className="p-6">
                  <p>Phone</p>
                  <p>Name</p>
                </div>
                <div className="flex p-6">
                  <div>
                    <p>{order.price}</p>
                    <p>
                      {new Date(order.createdDate).toLocaleString("en-GB", {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: false,
                      })}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <span
                      className={`inline-flex w-[67px] justify-center items-center px-2 py-1 rounded-full text-xs ${
                        order.paid
                          ? "bg-[#C1E6CF] text-[#0A4E22]"
                          : "bg-[#FCBABE] text-[#670E13]"
                      }`}
                    >
                      {order.paid ? "Paid" : "Not Paid"}
                    </span>
                  </div>
                </div>
                <div space-y-1 className="p-6">
                  <p>{order.district}</p>
                  <p>{order.Khoroo}</p>
                  <p>{order.Apartment}</p>
                </div>
                <div className="flex items-center">
                  <span
                    className={`inline-flex items-center px-2 py-1 rounded-full text-xs ${
                      order.process === "Progress"
                        ? "bg-[#FDF4B6] text-[#695C08]"
                        : order.process === "Delivered"
                        ? "bg-[#C1E6CF] text-[#0A4E22]"
                        : order.process === "Active"
                        ? "bg-[#C1E6CF] text-[#0A4E22]"
                        : order.process === "Waiting"
                        ? "bg-[#ECEDF0] text-[#1F2126]"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {order.process || "Pending"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
