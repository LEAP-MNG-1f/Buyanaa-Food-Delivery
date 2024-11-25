"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { LogInIcon } from "../svg/LoginIcon";
import { ShoppingBagIcon } from "../svg/ShoppingBagIcon";
import { LogoIcon } from "../svg/LogoIcon";
import Link from "next/link";
import ShoppingCartDrawer from "./shoppingCartDrawer";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

export const Header = () => {
  return (
    <Container
      disableGutters
      className="flex h-[56px] items-center justify-center"
    >
      <div className=" w-[1200px]">
        <div className="flex justify-between">
          <div className="flex items-center">
            <div className="pr-6 ">
              <LogoIcon />
            </div>
            <Link href={"/"}>
              <Typography
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontWeight: 700,
                  fontSize: "14px",
                  "&: hover": { color: "var(--green)" },
                  "&: focus": { color: "var(--green)" },
                  paddingX: 2,
                  paddingY: 1,
                  boxSizing: "border-box",
                }}
              >
                НҮҮР
              </Typography>
            </Link>
            <Link href={"/menu"}>
              <Typography
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontWeight: 700,
                  fontSize: "14px",
                  "&: hover": { color: "var(--green)" },
                  "&: focus": { color: "var(--green)" },
                  paddingX: 2,
                  paddingY: 1,
                  boxSizing: "border-box",
                }}
              >
                ХООЛНЫ ЦЭС
              </Typography>
            </Link>
            <Link href={"/delivery-area"}>
              <Typography
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontWeight: 700,
                  fontSize: "14px",
                  "&: hover": { color: "var(--green)" },
                  "&: focus": { color: "var(--green)" },
                  paddingX: 2,
                  paddingY: 1,
                  boxSizing: "border-box",
                }}
              >
                ХҮРГЭЛТИЙН БҮС
              </Typography>
            </Link>
          </div>
          <div className="flex gap-2">
            <div className="flex items-center">
              <ShoppingCartDrawer />
            </div>

            <Button
              sx={{
                color: "black",
                fontWeight: 700,
                fontSize: 14,
                paddingX: 2,
                paddingY: 1,
                boxSizing: "border-box",
              }}
            >
              <div className="flex gap-2 items-center">
                <LogInIcon />
                Нэвтрэх
              </div>
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};
