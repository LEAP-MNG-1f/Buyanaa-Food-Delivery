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

// type Anchor = "top" | "left" | "bottom" | "right";

export default function ShoppingCartDrawer() {
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
          <div className="p-[26px] w-[538px]">
            <div className="flex items-center gap-[171px] pb-[30px]">
              <LeftArrow />{" "}
              <div className="text-lg font-semibold">Таны сагс</div>
            </div>
            <div className=" border-t-[1px] border-b-[1px] border-[#D6D8DB] py-6 flex">
              <div className="flex p-4 gap-5">
                <div className="w-[245px] h-[150px]">
                  <img
                    src={"/smoothieBowl.png"}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="flex flex-col w-[245px] h-[150px] gap-2 justify-center">
                  <div className="flex items-center gap-[60px]">
                    <div className="flex flex-col gap-[2px]">
                      <p className="text-[18px] font-semibold">Healthy Bowl</p>
                      <p className="text-[18px] font-semibold text-[var(--green)]">
                        ₮ 38800
                      </p>
                    </div>
                    <CloseIcon />
                  </div>

                  <div className="flex flex-col gap-3">
                    <p className="text-sm font-normal text-[#767676]">
                      Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр{" "}
                    </p>
                  </div>
                  <div className="flex gap-[8px] justify-start">
                    <button className="w-[45px] h-[40px] bg-[var(--green)] text-white rounded-[10px] text-sm font-black px-[10px]">
                      -
                    </button>
                    <div className="flex items-center px-[18px]">1</div>
                    <button className="w-[45px] h-[40px] bg-[var(--green)] text-white rounded-[10px] text-sm font-black px-[10px]">
                      +
                    </button>
                  </div>
                </div>
              </div>
              {/* <Button
                    autoFocus
                    variant="contained"
                    onClick={handleClose}
                    sx={{
                      backgroundColor: "var(--green)",
                      fontSize: "14px",
                      fontWeight: "400",
                    }}
                  >
                    Сагслах
                  </Button> */}
            </div>
          </div>
        </Box>
      </Drawer>
    </div>
  );
}
