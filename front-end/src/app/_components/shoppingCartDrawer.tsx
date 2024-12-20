import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { ShoppingBagIcon } from "../svg/ShoppingBagIcon";
import { LeftArrow } from "../svg/leftArrow";
import { CloseIcon } from "../svg/closeIcon";
import { useFoodContext } from "../context";
import { useRouter } from "next/navigation";
// type Anchor = "top" | "left" | "bottom" | "right";

export default function ShoppingCartDrawer() {
  const router = useRouter();

  const handleOrder = async (event: any) => {
    event.preventDefault();
    router.push("/order");
  };

  const { cartFoods, totalPrice } = useFoodContext();

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (open: boolean) => {
    setOpen(open);
  };

  return (
    <div>
      <Button onClick={() => toggleDrawer(true)}>
        <div className="flex gap-2 items-center">
          <ShoppingBagIcon />
          <p className="font-bold text-sm text-black">Сагс</p>
        </div>
      </Button>
      <Drawer anchor="right" open={open} onClose={() => toggleDrawer(false)}>
        <Box
          sx={{ width: "534px" }} // Width of the drawer
          role="presentation"
          onClick={() => toggleDrawer(false)} // Close on click
          onKeyDown={() => toggleDrawer(false)} // Close on keyboard events
        >
          <div className="p-[26px] w-[538px] flex flex-col justify-between h-screen">
            <div className="">
              <div className="flex items-center gap-[171px] pb-[30px]">
                <LeftArrow />{" "}
                <div className="text-lg font-semibold">Таны сагс</div>
              </div>
              {cartFoods.map((cartFood) => {
                return (
                  <div
                    key={cartFood._id}
                    className=" border-t-[1px] border-b-[1px] border-[#D6D8DB] py-6 flex"
                  >
                    <div className="flex p-4 gap-5">
                      <div className="w-[245px] h-[150px]">
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
                      <div className="flex flex-col w-[245px] h-[150px] gap-2 justify-center">
                        <div className="flex gap-[60px]">
                          <div className="flex flex-col gap-[2px]">
                            <p className="text-[18px] font-semibold">
                              {cartFood?.name}
                            </p>
                            <p className="text-[18px] font-semibold text-[var(--green)]">
                              ₮ {cartFood?.price}
                            </p>
                          </div>
                          <button className="flex items-start mt-2">
                            <CloseIcon />
                          </button>
                        </div>

                        <div className="flex flex-col gap-3">
                          <p className="text-sm font-normal text-[#767676]">
                            {cartFood.ingredient}
                          </p>
                        </div>
                        <div className="flex gap-[8px] justify-start">
                          {/* <button className="w-[45px] h-[40px] bg-[var(--green)] text-white rounded-[10px] text-sm font-black px-[10px]">
                            -
                          </button> */}
                          <div className="flex items-center px-[18px]">
                            {" "}
                            {cartFood?.quantity}
                          </div>
                          {/* <button className="w-[45px] h-[40px] bg-[var(--green)] text-white rounded-[10px] text-sm font-black px-[10px]">
                            +
                          </button> */}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="min-h-[172px] border-t-[1px] border-[#D6D8DB] flex justify-between items-center">
              <div className="">
                <p className="text-lg font-normal text-[#5E6166]">
                  Нийт төлөх дүн
                </p>
                <p className="text-lg font-bold text-[#121316]">
                  {totalPrice}₮
                </p>
              </div>
              <Button
                autoFocus
                variant="contained"
                onClick={handleOrder}
                sx={{
                  width: "256px",
                  height: "48px",
                  backgroundColor: "var(--green)",
                  fontSize: "16px",
                  fontWeight: "400",
                }}
                // onSubmit={handleOnSubmit}
              >
                Захиалах
              </Button>
            </div>
          </div>
        </Box>
      </Drawer>
    </div>
  );
}
