import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { LogInIcon } from "../svg/LoginIcon";
import { ShoppingBagIcon } from "../svg/ShoppingBagIcon";
import { LogoIcon } from "../svg/LogoIcon";

const pages = ["ХООЛНЫ ЦЭС", "ХҮРГЭЛТИЙН БҮС"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

export const ResponsiveAppBar = () => {
  // const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
  //   null
  // );
  // const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
  //   null
  // );

  // const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorElNav(event.currentTarget);
  // };
  // const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  return (
    <AppBar position="static">
      <Container maxWidth="xl" className="bg-white">
        <Toolbar disableGutters>
          {" "}
          <div className="pr-6">
            <LogoIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          </div>
          <Typography
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              // fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "var(--green)",
              textDecoration: "none",
              paddingX: 2,
              paddingY: 1,
            }}
          >
            НҮҮР
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              // onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            {/* <Menu
              id="menu-appbar"
              // anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              // open={Boolean(anchorElNav)}
              // onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                // <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: "center" }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu> */}
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                // onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  fontWeight: 700,
                  fontSize: 14,
                  color: "black",
                  display: "block",
                  paddingX: 2,
                  paddingY: 1,
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
    </AppBar>
  );
};
