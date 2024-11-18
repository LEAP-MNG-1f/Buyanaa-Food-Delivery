import { DeliveryCardIcon1 } from "../svg/deliveryCardIcon_1";
import DeliveryCard, { DeliveryCardType } from "./deliveryCard";

export const DeliveryCardComponent = () => {
  const deliveryData: DeliveryCardType[] = [
    {
      _id: "1",
      image: "<DeliveryCardIcon1 />",
      description: "Хүргэлтийн төлөв хянах",
      text: "Захиалга бэлтгэлийн явцыг хянах",
    },
    {
      _id: "2",
      image: "./deliveryCardIcon_2.tsx",
      description: "Шуурхай хүргэлт",
      text: "Захиалга бэлтгэлийн явцыг хянах",
    },
    {
      _id: "3",
      image: "./deliveryCardIcon_3.tsx",
      description: "Эрүүл, баталгаат орц",
      text: "Захиалга бэлтгэлийн явцыг хянах",
    },
    {
      _id: "4",
      image: "./deliveryCardIcon_1.tsx",
      description: "Хоолны өргөн сонголт",
      text: "Захиалга бэлтгэлийн явцыг хянах",
    },
  ];

  return (
    <div className=" h-[500px] flex items-center justify-center">
      <div className="w-[1200px] border">
        <DeliveryCard cards={deliveryData} />
      </div>
    </div>
  );
};
