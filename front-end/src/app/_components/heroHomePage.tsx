import { HeroPattern } from "../svg/HeroPattern";

export const HeroHomePage = () => {
  return (
    <div
      style={{ background: "url('./ingredients.png'), var(--green)" }}
      className=" h-[778px] w-full bg- flex justify-center"
    >
      <div className="flex justify-between items-center border border-black w-[1200px]">
        <div className="w-[384px]">
          <h1 className="text-[55px] font-semibold leading-[49px] w-13 text-white">
            Pinecone Food delivery
          </h1>
          <div className="border-b border-white opacity-50 w-full mt-8 mb-8"></div>
          <p className="text-white text-[22px] font-bold leading-[26px]">
            Horem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="w-1/2 relative">
          <img src="./heroMeal1.png" className="w-[443px] h-[438px]" alt="" />
          <img
            src="./heroMeal2.png"
            className="absolute right-0 bottom-0 w-[313px] h-[313px]"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
