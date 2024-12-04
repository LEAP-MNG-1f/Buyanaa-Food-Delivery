"use client";
import { useState } from "react";
import { BulletIcon } from "../svg/bulletIcon";
import { OrderCheckIcon } from "../svg/orderCheckIcon";

import AddressCard from "./addressCard";
import OrderCard from "./orderCard";
import { useFoodContext } from "../context";

export default function Page() {
  const { cartFoods } = useFoodContext();
  console.log(cartFoods);
  const BACKEND_ENDPOINT = "http://localhost:8000/api/orders";

  const [address, setAddress] = useState([]);

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    console.log("ajilla");
    const orderData = {
      userId: "674921a9d9755e027fc120ae",
      orderNumber: 1,
      foodIds: "6749251594d68b5ee157a243",
      totalPrice: 38000,
      process: "Active",
      district: "Баянгол дүүрэг",
      Khoroo: "1-р хороо",
      Apartment: "Зайсан хотхон",
    };
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderData),
    };
    const response = await fetch(BACKEND_ENDPOINT, options);
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="flex justify-center">
      <div className="w-[1200px] flex justify-around pt-12 pb-16">
        <div className="flex flex-col gap-6">
          {/* <div className="w-[432px]  gap-4 flex items-center h-[100px] px-6 py-4">
            <BulletIcon />
            <div className="flex flex-col gap-1">
              <p className="text-sm font-normal text-[#8B8E95]">Алхам 1</p>
              <p className="text-xl">Хаягийн мэдээлэл оруулах</p>
              <p className="text-base text-[#0468C8]">Хүлээгдэж байна</p>
            </div>
          </div> */}
          <div className="w-[432px]  gap-4 flex items-center h-[100px] px-6 py-4">
            <OrderCheckIcon />
            <div className="flex flex-col gap-1">
              <p className="text-sm font-normal text-[#8B8E95]">Алхам 1</p>
              <p className="text-xl">Хаягийн мэдээлэл оруулах</p>
              <p className="text-base text-[var(--green)]">Оруулсан</p>
            </div>
          </div>
          <AddressCard setAddress={setAddress} />
        </div>
        <div className="flex flex-col gap-6">
          <div className="w-[432px]  gap-4 flex items-center h-[100px] px-6 py-4">
            <BulletIcon />
            <div className="flex flex-col gap-1">
              <p className="text-sm font-normal text-[#8B8E95]">Алхам 2</p>
              <p className="text-xl">Захиалга баталгаажуулах</p>
              <p className="text-base text-[#0468C8]">Хүлээгдэж байна</p>
            </div>
          </div>
          <OrderCard address={address} />
        </div>
      </div>
      <div></div>
    </div>
  );
}
