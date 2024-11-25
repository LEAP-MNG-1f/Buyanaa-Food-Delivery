import Link from "next/link";
import { LogoIcon } from "../svg/LogoIcon";
import { FacebookIcon } from "../svg/facebookIcon";
import { InstagramIcon } from "../svg/instagramIcon";
import { TwitterIcon } from "../svg/twitterIcon";

export const Footer = () => {
  return (
    <div
      className="flex  w-full justify-center"
      style={{ background: "url('./ingredients.png'), var(--green)" }}
    >
      <div className="w-[1200px] h-[545px] flex justify-center items-center">
        <div className="w-full flex flex-col items-center gap-10 ">
          <div className="text-white text-xl font-bold flex justify-center gap-2">
            <LogoIcon fill="#FFF" />
            Food Delivery
          </div>
          <div className="flex justify-between w-full text-white underline underline-offset-4 font-semibold text-base">
            <Link href={"/"}>
              <button>Нүүр</button>
            </Link>
            <Link href={""}>
              <button>Холбоо барих</button>
            </Link>
            <Link href={"/menu"}>
              <button>Хоолны цэс</button>
            </Link>
            <Link href={"/terms-and-conditions"}>
              <button>Үйлчилгээний нөхцөл</button>
            </Link>
            <Link href={"/delivery-area"}>
              <button>Хүргэлтийн бүс</button>
            </Link>
            <Link href={"/privacy-policy"}>
              <button>Нууцлалын бодлого</button>
            </Link>
          </div>
          <div className="flex gap-3 p-[5px] items-center">
            <Link href={""}>
              <FacebookIcon />
            </Link>
            <Link href={""}>
              <InstagramIcon />
            </Link>
            <Link href={""}>
              <TwitterIcon />
            </Link>
          </div>
          <div className="w-full">
            <p className="border-b-[1px]"></p>
          </div>
          <div className="flex flex-col items-center gap-2 text-white text-sm">
            <h1 className="">© 2024 Pinecone Foods LLC</h1>
            <h1>Зохиогчийн эрх хуулиар хамгаалагдсан.</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
