"use client";
import React, { useState } from "react";
import LocationIcon from "../svg/locationIcon";
import { ArrowDown } from "../svg/arrowDown";
import { TOrderAddress } from "./page";

const districts = [
  "Баянзүрх дүүрэг",
  "Хан-Уул дүүрэг",
  "Баянгол дүүрэг",
  "Сонгинохайрхан дүүрэг",
  "Чингэлтэй дүүрэг",
];

type SetDatas = (
  newData: TOrderAddress | ((prevData: TOrderAddress) => TOrderAddress)
) => void;

const khoroos = [
  "1-р хороо",
  "2-р хороо",
  "3-р хороо",
  "4-р хороо",
  "5-р хороо",
  "6-р хороо",
  "7-р хороо",
];

const apartments = [
  "Нархан хотхон",
  "26-р байр",
  "Хоймор хотхон",
  "45-р байр",
  "Зайсан хотхон",
];

interface AddressSelectProps {
  value: string;
  onChange: (value: string) => void;
  options: string[];
  placeholder: string;
}
export default function AddressCard({
  datas,
  setDatas,
}: {
  datas: TOrderAddress;
  setDatas: SetDatas;
}) {
  function AddressSelect({
    value,
    onChange,
    options,
    placeholder,
  }: AddressSelectProps) {
    const [isOpen, setIsOpen] = useState(false);

    const handleOptionClick = (option: string) => {
      onChange(option);
      setIsOpen(false); // Close the menu after selection
    };

    return (
      <div className="relative mb-4 ">
        <div>
          <LocationIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4" />
          <div
            onClick={() => setIsOpen(!isOpen)}
            className={`w-[384px] h-12 flex items-center pl-10 pr-4 bg-[#F7F7F8] border border-[#ECEDF0] rounded-md cursor-pointer
            hover:bg-[var(--green)]`}
          >
            <span className="flex-grow">{value || placeholder}</span>
            <ArrowDown fill="black" />
          </div>
        </div>
        {isOpen && (
          <div className="absolute z-10 w-full mt-1 bg-white border border-[#ECEDF0] rounded-md shadow-lg">
            {options.map((option) => (
              <div
                key={option}
                onClick={() => handleOptionClick(option)}
                className="px-4 py-2 hover:bg-[var(--green)] cursor-pointer"
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="w-[432px] p-6 bg-white rounded-2xl shadow-lg">
        <p className="text-sm pl-2 mb-6">Хаяг аа оруулна уу</p>

        <div className="space-y-4">
          <AddressSelect
            placeholder="Дүүрэг сонгоно уу"
            value={datas.district}
            onChange={(value) =>
              setDatas((prevDatas) => ({
                ...prevDatas,
                district: value,
              }))
            }
            options={districts}
          />

          <AddressSelect
            placeholder="Хороо сонгоно уу"
            value={datas.khoroo}
            onChange={(value) =>
              setDatas((prevDatas) => ({
                ...prevDatas,
                khoroo: value,
              }))
            }
            options={khoroos}
          />

          <AddressSelect
            placeholder="Байр, гудамж сонгоно уу"
            value={datas.apartment}
            onChange={(value) =>
              setDatas((prevDatas) => ({
                ...prevDatas,
                apartment: value,
              }))
            }
            options={apartments}
          />
        </div>

        <div className="space-y-8 pt-10">
          <div>
            <p className="text-sm mb-1">Нэмэлт мэдээлэл</p>
            <textarea
              className="w-[384px] h-28 px-4 py-2 bg-[#F7F7F8] border border-[#ECEDF0] rounded-md
             focus:outline-none focus:ring-2 focus:ring-green-200"
              placeholder="Орц, давхар, орцны код ..."
              value={datas.additionalInfo}
              onChange={(e) =>
                setDatas((prevDatas) => ({
                  ...prevDatas,
                  additionalInfo: e.target.value, // Use e.target.value to get the updated text
                }))
              }
            />
          </div>

          <div>
            <p className="mb-1">Утасны дугаар*</p>
            <input
              type="tel"
              placeholder="Утасны дугаараа оруулна уу"
              className="w-[384px] h-12 px-4 bg-[#F7F7F8] border border-[#ECEDF0] rounded-md
                       focus:outline-none focus:ring-2 focus:ring-green-200"
              value={datas.phone}
              // onChange={(e) => setPhone(e.target.value)}
              onChange={(e) =>
                setDatas((prevDatas) => ({
                  ...prevDatas,
                  phone: parseInt(e.target.value) || 0, // Use e.target.value to get the updated text
                }))
              }
            />
          </div>

          <div>
            <p className="mb-2">Төлбөр төлөх</p>
            <div className="flex justify-between">
              <label className="flex items-center gap-2 w-[176px]">
                <input
                  type="checkbox"
                  checked={datas.paymentMethod.cash} // Bind to cash boolean
                  onChange={(e) =>
                    setDatas((prevDatas) => ({
                      ...prevDatas,
                      paymentMethod: {
                        ...prevDatas.paymentMethod,
                        cash: e.target.checked, // Update cash flag
                      },
                    }))
                  }
                  className="rounded"
                />
                <span className="text-[#8B8E95]">Бэлнээр</span>
              </label>
              <label className="flex items-center gap-2 w-[176px]">
                <input
                  type="checkbox"
                  checked={datas.paymentMethod.card} // Bind to card boolean
                  onChange={(e) =>
                    setDatas((prevDatas) => ({
                      ...prevDatas,
                      paymentMethod: {
                        ...prevDatas.paymentMethod,
                        card: e.target.checked, // Update card flag
                      },
                    }))
                  }
                  className="rounded"
                />
                <span className="text-[#8B8E95]">Картаар</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
