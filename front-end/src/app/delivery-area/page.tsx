"use client";
import { useStateContext } from "../context";
import { StarIcon } from "../svg/starIcon";
import DeliveryCardA from "./deliveryCardA";
import DeliveryCardB from "./deliveryCardB";

export default function Page() {
  const { quantity } = useStateContext();
  console.log(quantity);
  return (
    <div className="flex justify-center">
      <div className="w-[1200px] py-14">
        <div>
          {" "}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2040.2547139188011!2d106.91629243920093!3d47.91863489280507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d96924423920d8d%3A0x458ba9ebf806cbfd!2z0KHSr9GF0LHQsNCw0YLQsNGA0YvQvSDQotCw0LvQsdCw0LksINCj0LvQsNCw0L3QsdCw0LDRgtCw0YA!5e1!3m2!1smn!2smn!4v1732527408472!5m2!1smn!2smn"
            width="1200"
            height="600"
            loading="lazy"
          ></iframe>
        </div>
        <div className="flex gap-3 items-center pt-12 pb-9 ">
          <StarIcon />
          <h1 className="text-[22px] font-bold">Хүргэлтийн бүс дэх хаягууд</h1>
        </div>
        <div className="flex justify-between">
          <DeliveryCardA />
          <DeliveryCardB />
        </div>
      </div>
    </div>
  );
}
