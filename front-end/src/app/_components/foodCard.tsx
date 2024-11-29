import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { FoodCardListProps, FoodCardType } from "./foodCardComponent";
import ShoppingCartDrawer from "./shoppingCartDrawer";
import { TFoodObject } from "./Types";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-paper": {
    minWidth: "981px", // Minimum width
    maxWidth: "none", // Disable max width
    minHeight: "564px", // Minimum height
    height: "auto", // Allow auto height
    display: "flex",
    flexDirection: "column",
    borderRadius: "16px", // Column direction to fit contents
  },
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
  width: "auto", // Set dialog width to auto
  minWidth: "981px", // Set minimum width
  maxWidth: "unset", // Allow dialog to expand
  height: "auto",
}));

export default function FoodCard({
  image,
  name,
  ingredient,
  price,
}: TFoodObject) {
  const [open, setOpen] = React.useState(false);
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const toggleDrawer = (open: boolean) => {
    setOpenDrawer(open);
  };
  return (
    <div>
      <Button onClick={handleClickOpen} className="!p-0">
        <div className="w-[282px] ">
          <div className="h-[186px] rounded-2xl overflow-hidden shadow-xl">
            <img src={image} className="w-full h-full object-cover " />
          </div>

          <div className="pt-[14px]">
            <p className="text-lg text-black text-start font-semibold">
              {name}
            </p>
            <div className="flex gap-4">
              {/* {food.discount && (
                <p className="text-[var(--green)]">{food.discount}% OFF</p>
              )} */}
              <p className="text-lg font-semibold text-[var(--green)]">
                ₮ {price}
              </p>
            </div>
          </div>
        </div>
      </Button>
      <BootstrapDialog onClose={handleClose} open={open}>
        <DialogContent>
          <div className="max-w-[981px] max-h-[564px] flex justify-between p-4 rounded-[16px]">
            <div className="w-[500px] h-[500px]">
              <img
                src={image}
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div className="max-w-[384px] flex flex-col justify-center">
              <DialogActions>
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={(theme) => ({
                    position: "absolute",
                    right: 28,
                    top: 28,
                    color: theme.palette.grey[500],
                  })}
                >
                  <CloseIcon />
                </IconButton>
                <div className="flex flex-col gap-8 justify-center">
                  <div className="flex flex-col gap-[2px]">
                    <p className="text-[28px] font-bold">{name}</p>
                    <p className="text-lg font-semibold text-[var(--green)]">
                      ₮ {price}
                    </p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <p className="text-lg font-semibold">Орц</p>
                    <p className="text-base font-normal text-[#767676]">
                      {ingredient}
                    </p>
                  </div>
                  <p className="text-lg font-semibold">Тоо</p>
                  <div className="flex gap-5">
                    <button className="w-[45px] h-[40px] bg-[var(--green)] text-white rounded-[10px] text-sm font-black px-[10px]">
                      -
                    </button>
                    <div className="w-full flex justify-center items-center">
                      1
                    </div>
                    <button className="w-[45px] h-[40px] bg-[var(--green)] text-white rounded-[10px] text-sm font-black px-[10px]">
                      +
                    </button>
                  </div>
                  <Button
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
                  </Button>
                </div>
              </DialogActions>
            </div>
          </div>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
