import { AppBar, Button, IconButton, Stack, Toolbar } from "@mui/material";
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
                width: { xs: "70px", md: "90px", lg: "90px" },
                height: "auto",
                mr: 2,
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
              <IconButton
                sx={{
                  display: { sm: "block", md: "none" },
                }}
              >
                <MenuIcon
                  size="large"
                  fontSize="large"
                  sx={{ color: palette.secondary.main }}
                />
              </IconButton>
            }
            ModalContent={Sidebar}
            g
            position="left"
          />
          <Stack
            direction={"row"}
            justifyContent="space-between"
            alignItems={"center"}
            width="50%"
          >
            <Stack
              direction={"row"}
              justifyContent="center"
              alignItems={"center"}
            >
              <Redirect link={Routes.HomeRouteLink}>
                {" "}
                <Button sx={{ color: palette.secondary.main }}>About Us</Button>
              </Redirect>
              <Button sx={{ color: palette.secondary.main }}>
                Produts and Services
              </Button>
              <Button sx={{ color: palette.secondary.main }}>News</Button>
              <Button sx={{ color: palette.secondary.main }}>Contacts</Button>
            </Stack>
            <Stack>
              <Button
                size="large"
                variant="contained"
                sx={{
                  background: palette.secondary.main,
                  color: palette.primary.main,
                  "&:hover": {
                    background: palette.secondary.main,
                    color: palette.primary.dark,
                  },
                }}
              >
                {" "}
                BECOME A PATNER
              </Button>
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>
    </Stack>
  );
};

export default Navbar;
