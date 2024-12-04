"use client";
import { useEffect, useState } from "react";
import { BulletIcon } from "../svg/bulletIcon";
import { OrderCheckIcon } from "../svg/orderCheckIcon";

import AddressCard from "./addressCard";
import OrderCard from "./orderCard";
import { useFoodContext } from "../context";

export type TOrderAddress = {
  district: string;
  khoroo: string;
  apartment: string;
  additionalInfo: string;
  phone: number;
  paymentMethod: {
    cash: boolean;
    card: boolean;
  };
};

export default function Page() {
  const { cartFoods } = useFoodContext();
  const BACKEND_ENDPOINT = "http://localhost:8000/api/orders";
  const [allField, setAllField] = useState(false);
  const [datas, setDatas] = useState<TOrderAddress>({
    district: "",
    khoroo: "",
    apartment: "",
    additionalInfo: "",
    phone: 0,
    paymentMethod: {
      cash: false,
      card: false,
    },
  });

  useEffect(() => {
    // Check if all fields are filled
    const isAllFieldFilled = Object.values(datas).every((value) => {
      if (typeof value === "object") {
        // If it's an object (like the paymentMethod), check its properties
        return Object.values(value).some((subValue) => subValue);
      }
      return value !== "" && value !== 0; // Make sure value is not empty or 0
    });

    setAllField(isAllFieldFilled);
  }, [datas]); // Trigger the effect when `datas` changes

  return (
    <div className="flex justify-center">
      <div className="w-[1200px] flex justify-around pt-12 pb-16">
        <div className="flex flex-col gap-6">
          {allField ? (
            <div className="w-[432px] gap-4 flex items-center h-[100px] px-6 py-4">
              <OrderCheckIcon />
              <div className="flex flex-col gap-1">
                <p className="text-sm font-normal text-[#8B8E95]">Алхам 1</p>
                <p className="text-xl">Хаягийн мэдээлэл оруулах</p>
                <p className="text-base text-[var(--green)]">Оруулсан</p>
              </div>
            </div>
          ) : (
            <div className="w-[432px] gap-4 flex items-center h-[100px] px-6 py-4">
              <BulletIcon />
              <div className="flex flex-col gap-1">
                <p className="text-sm font-normal text-[#8B8E95]">Алхам 1</p>
                <p className="text-xl">Хаягийн мэдээлэл оруулах</p>
                <p className="text-base text-[#0468C8]">Хүлээгдэж байна</p>
              </div>
            </div>
          )}
          <AddressCard datas={datas} setDatas={setDatas} />
        </div>
        <div className="flex flex-col gap-6">
          <div className="w-[432px] gap-4 flex items-center h-[100px] px-6 py-4">
            <BulletIcon />
            <div className="flex flex-col gap-1">
              <p className="text-sm font-normal text-[#8B8E95]">Алхам 2</p>
              <p className="text-xl">Захиалга баталгаажуулах</p>
              <p className="text-base text-[#0468C8]">Хүлээгдэж байна</p>
            </div>
          </div>
          <OrderCard datas={datas} />
        </div>
      </div>
      <div></div>
    </div>
  );
}
