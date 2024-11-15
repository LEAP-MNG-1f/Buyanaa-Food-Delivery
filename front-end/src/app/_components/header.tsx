import { LogoIcon } from "../svg/LogoIcon";

export const Header = () => {
  return (
    <div className="flex justify-center">
      <div className="h-[57px] w-[1210px] border bg-red-800">
        <div>
          <LogoIcon />
          <LogoIcon />
        </div>
      </div>
    </div>
  );
};
