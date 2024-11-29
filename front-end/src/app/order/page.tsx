import { BulletIcon } from "../svg/bulletIcon";
import { OrderCheckIcon } from "../svg/orderCheckIcon";

import AddressCard from "./addressCard";
import OrderCard from "./orderCard";

export default function Page() {
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
          <AddressCard />
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
          <OrderCard />
        </div>
      </div>
      <div></div>
    </div>
  );
}
