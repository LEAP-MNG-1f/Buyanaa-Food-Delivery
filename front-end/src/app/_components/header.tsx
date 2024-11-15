import { LogoIcon } from "../svg/LogoIcon";

export const Header = () => {
  return (
    <div className="flex justify-center">
      <div className="h-[57px] w-[1210px] border bg-red-600">
        <div>
          <LogoIcon />
        </div>
      </div>
    </div>
  );
};
