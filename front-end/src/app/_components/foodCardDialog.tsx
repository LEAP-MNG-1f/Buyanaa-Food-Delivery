import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import FoodCard, { FoodCardListProps, FoodCardType } from "./foodCard";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-paper": {
    minWidth: "981px", // Minimum width
    maxWidth: "none", // Disable max width
    minHeight: "564px", // Minimum height
    height: "auto", // Allow auto height
    display: "flex",
    flexDirection: "column", // Column direction to fit contents
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

export default function FoodCardDialog({ foodCards }: FoodCardListProps) {
  const [showAll, setShowAll] = useState(false);

  // Function to toggle the visibility of all cards
  const handleToggle = () => {
    setShowAll(!showAll);
  };

  // Determine which food cards to display
  // const displayedCards = showAll ? foodCards : foodCards.slice(0, 4);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        <FoodCard foodCards={foodCards} />
      </Button>
      <BootstrapDialog onClose={handleClose} open={open}>
        <DialogContent>
          <div className="min-w-[981px] h-[564px] flex justify-between">
            <div className="w-[500px] h-[500px]">
              <img
                src="/pancake.png"
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div className="min-w-[384px]">
              <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={(theme) => ({
                  position: "absolute",
                  right: 8,
                  top: 8,
                  color: theme.palette.grey[500],
                })}
              >
                <CloseIcon />
              </IconButton>
              <DialogActions>
                <div className="flex flex-col gap-8 justify-center">
                  <div className="flex flex-col gap-[2px]">
                    <p className="text-[28px] font-bold">Food title</p>
                    <p className="text-lg font-semibold text-[var(--green)]">
                      34800
                    </p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <p className="text-lg font-semibold">Орц</p>
                    <p className="text-base font-normal text-[#767676]">
                      Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр{" "}
                    </p>
                  </div>
                  <p className="text-lg font-semibold">Тоо</p>
                  <div className="flex gap-5">
                    <button className="w-[45px] h-[40px] bg-[var(--green)] text-white rounded-[10px] text-sm font-black px-[10px]">
                      -
                    </button>
                    <div className="w-full flex justify-center">1</div>
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
    </React.Fragment>
  );
}
