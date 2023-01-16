import { AppBar, IconButton, Stack, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "styled-components";
import logoWithoutName from "../Assets/Icons/LogoWithName.svg";
import MenuIcon from "@mui/icons-material/Menu";
import Redirect from "../Helpers/Redirect";
import Routes from "../Router/Routes";
import CreateModal from "./Modal/CreateModal";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const { palette, width } = useTheme();
  return (
    <Stack
      className="Navbar"
      justifyContent={"center"}
      alignItems={"center"}
      direction="row"
      sx={{
        width: width,
        margin: "auto",
      }}
    >
      <AppBar sx={{ background: palette.primary.main }} component="nav">
        <Toolbar
          sx={{
            display: "felx",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Redirect link={Routes.HomeRouteLink}>
            <IconButton
              sx={{
                width: "70px",
                height: "auto",
                mr: 2,
                display: { sm: "none" },
              }}
            >
              <img
                src={logoWithoutName}
                alt="cool lion energies"
                style={{ height: "100%", width: "100%" }}
              />
            </IconButton>
          </Redirect>
          <CreateModal
            ButtonContent={
              <IconButton>
                <MenuIcon
                  size="large"
                  fontSize="large"
                  sx={{ color: palette.secondary.main }}
                />
              </IconButton>
            }
            ModalContent={Sidebar}
            position="right"
          />
        </Toolbar>
      </AppBar>
    </Stack>
  );
};


export default Navbar;
