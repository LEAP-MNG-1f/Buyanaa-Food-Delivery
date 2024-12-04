import { useFoodContext } from "../context";
import { ShoppingBagIcon } from "../svg/ShoppingBagIcon";
import { TOrderAddress } from "./page";

const OrderCard = ({ datas }: { datas: TOrderAddress }) => {
  const { cartFoods } = useFoodContext();
  // const { orders } = useFoodContext();
  const BACKEND_ENDPOINT = "http://localhost:8000/api/orders";

  const handleOnSubmit = async (event: any) => {
    event.preventDefault();
    const orderData = {
      userId: "674921a9d9755e027fc120ae",
      orderNumber: 1,
      foodIds: "674d235586b384d8258efa5c",
      totalPrice: 38000,
      process: "Active",
      district: datas.district,
      Khoroo: datas.khoroo,
      Apartment: datas.apartment,
    };
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderData),
    };
    const response = await fetch(BACKEND_ENDPOINT, options);
    const data = await response.json();
  };
  return (
    <div className="w-[432px] p-6 h-[612px] bg-white rounded-2xl shadow-lg">
      <div className="flex flex-col justify-between h-full">
        {cartFoods.map((cartFood) => {
          return (
            <div
              key={cartFood._id}
              className=" border-t-[1px] border-b-[1px] border-[#D6D8DB] py-4 flex"
            >
              <div className="flex gap-5">
                <div className="w-[184px] h-[121px]">
                  <img
                    src={cartFood.image}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="flex flex-col w-[184px] h-[121px] gap-2 justify-center">
                  <div className="flex gap-[60px]">
                    <div className="flex flex-col gap-[2px]">
                      <p className="text-[18px] font-semibold">Healthy Bowl</p>
                      <p className="text-[18px] font-semibold text-[var(--green)]">
                        ₮ {cartFood.price}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm font-normal text-[#767676]">
                    {cartFood.ingredient}
                  </p>
                </div>
              </div>
            </div>
          );
        })}

        <div className="h-[48px] flex justify-between items-center">
          <div className="">
            <p className="text-lg font-normal text-[#5E6166]">Нийт төлөх дүн</p>
            <p className="text-lg font-bold text-[#121316]">34,800₮</p>
          </div>
          <button
            onClick={handleOnSubmit}
            className="w-[187px] h-12  bg-[#EEEFF2] hover:bg-[var(--green)] text-[#1C20243D] hover:text-white rounded-[4px] text-base font-normal"
          >
            Захиалах
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
