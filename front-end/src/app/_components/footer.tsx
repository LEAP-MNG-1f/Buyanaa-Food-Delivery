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
            <button>Нүүр</button>

            <button>Холбоо барих</button>

            <button>Хоолны цэс</button>
            <button>Үйлчилгээний нөхцөл</button>
            <button>Хүргэлтийн бүс</button>
            <button>Нууцлалын бодлого</button>
          </div>
          <div className="flex gap-3 p-[5px] items-center">
            <button>
              <FacebookIcon />
            </button>
            <button>
              <InstagramIcon />
            </button>
            <button>
              <TwitterIcon />
            </button>
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
