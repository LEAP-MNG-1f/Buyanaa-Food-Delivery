import { DeliveryCardIcon1 } from "../svg/deliveryCardIcon_1";
import { DeliveryCardIcon2 } from "../svg/deliveryCardIcon_2";
import { DeliveryCardIcon3 } from "../svg/deliveryCardIcon_3";
import DeliveryCard, { DeliveryCardType } from "./deliveryCard";

export const DeliveryCardComponent = () => {
  const deliveryData: DeliveryCardType[] = [
    {
      _id: "1",
      image: DeliveryCardIcon1,
      description: "Хүргэлтийн төлөв хянах",
      text: "Захиалга бэлтгэлийн явцыг хянах",
    },
    {
      _id: "2",
      image: DeliveryCardIcon2,
      description: "Шуурхай хүргэлт",
      text: "Захиалга бэлтгэлийн явцыг хянах",
    },
    {
      _id: "3",
      image: DeliveryCardIcon3,
      description: "Эрүүл, баталгаат орц",
      text: "Захиалга бэлтгэлийн явцыг хянах",
    },
    {
      _id: "4",
      image: DeliveryCardIcon1,
      description: "Хоолны өргөн сонголт",
      text: "Захиалга бэлтгэлийн явцыг хянах",
    },
  ];

  return (
    <div className=" h-[380px] flex items-center justify-center">
      <div className="w-[1200px]">
        <DeliveryCard cards={deliveryData} />
      </div>
    </div>
  );
};
