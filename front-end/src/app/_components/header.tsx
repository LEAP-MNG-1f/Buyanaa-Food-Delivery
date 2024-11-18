import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { LogInIcon } from "../svg/LoginIcon";
import { ShoppingBagIcon } from "../svg/ShoppingBagIcon";
import { LogoIcon } from "../svg/LogoIcon";

const pages = ["ХООЛНЫ ЦЭС", "ХҮРГЭЛТИЙН БҮС"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

export const ResponsiveAppBar = () => {
  return (
    <Container className="!bg-white !p-0">
      <Toolbar
        className="!w-[1210px] !border !border-black"
        sx={{ boxSizing: "border-box" }}
      >
        <div className="pr-6 ">
          <LogoIcon />
        </div>
        <Typography
          href="/"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "var(--green)",
            textDecoration: "none",
            paddingX: 2,
            paddingY: 1,
            boxSizing: "border-box",
          }}
        >
          НҮҮР
        </Typography>

        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          {pages.map((page) => (
            <Button
              key={page}
              sx={{
                my: 2,
                fontWeight: 700,
                fontSize: 14,
                color: "black",
                display: "block",
                paddingX: 2,
                paddingY: 1,
                boxSizing: "border-box",
              }}
            >
              {page}
            </Button>
          ))}
        </Box>
        <div className="flex gap-2">
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
              <ShoppingBagIcon /> Сагс
            </div>
          </Button>

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
      </Toolbar>
    </Container>
  );
};
