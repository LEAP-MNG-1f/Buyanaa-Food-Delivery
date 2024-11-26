import { BulletIcon } from "../svg/bulletIcon";
import AddressCard from "./addressCard";

export default function Page() {
  return (
    <div className="flex justify-center">
      <div className="w-[1200px] flex justify-between">
        <div className="flex flex-col gap-6">
          <div className="w-[432px] border gap-4 flex items-center px-6 py-4">
            <BulletIcon />
            <div className="flex flex-col gap-1">
              <p className="text-sm font-normal text-[#8B8E95]">Алхам 1</p>
              <p className="text-xl">Хаягийн мэдээлэл оруулах</p>
              <p className="text-base text-[#0468C8]">Хүлээгдэж байна</p>
            </div>
          </div>
          <AddressCard />
        </div>
        <div className="w-[432px] border gap-4 flex items-center px-6 py-4">
          <BulletIcon />
          <div className="flex flex-col gap-1">
            <p className="text-sm font-normal text-[#8B8E95]">Алхам 2</p>
            <p className="text-xl">Захиалга баталгаажуулах</p>
            <p className="text-base text-[#0468C8]">Хүлээгдэж байна</p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
