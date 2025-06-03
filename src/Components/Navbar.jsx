import {
  AppBar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
} from "@mui/material";
import React from "react";
import { useTheme } from "styled-components";
import logoWithoutName from "../Assets/Icons/LogoWithName.svg";
import MenuIcon from "@mui/icons-material/Menu";
import Redirect from "../Helpers/Redirect";
import Routes from "../Router/Routes";
import { useDispatch, useSelector } from "react-redux";
import { selectedLanguage } from "../Context/LanguageSlice";
import { changeState, selectedSidebar } from "../Context/SidebarSlice";
import LanguageApp from "./LanguageApp";

const Navbar = () => {
  const { palette, width } = useTheme();
  const language = useSelector(selectedLanguage).language;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const sidebardState = useSelector(selectedSidebar).sidebard.status;

  const dispatch = useDispatch();

  const handleChange = React.useCallback(() => {
    dispatch(changeState({ status: !sidebardState }));
    console.log(sidebardState);
  }, [dispatch, sidebardState]);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
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
      <AppBar
        sx={{ background: palette.primary.main, zIndex: "999" }}
        component="nav"
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "relative",
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

          <IconButton
            sx={{
              display: { sm: "block", md: "none" },
            }}
            onClick={handleChange}
          >
            <MenuIcon
              size="large"
              fontSize="large"
              sx={{ color: palette.secondary.main }}
            />
          </IconButton>

          <Stack
            direction={"row"}
            justifyContent="flex-end"
            alignItems={"center"}
            width="80%"
            sx={{ display: { xs: "none", md: "flex" } }}
            spacing={4}
          >
            <Stack
              direction={"row"}
              justifyContent="center"
              alignItems={"center"}
              spacing={1}
            >
              <Redirect link={Routes.HomeRouteLink}>
                {" "}
                <Button sx={{ color: palette.secondary.main }}>
                  {language.appbar.navLink.about}
                </Button>
              </Redirect>
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                sx={{ color: palette.secondary.main }}
              >
                {language.appbar.navLink.product}
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                {Object.entries(language.products).map((items, key) => {
                  console.log(items + ' ' + key);
                  const item = items[1];
                  return (
                    <Redirect link={item.link} key={key}>
                      <MenuItem onClick={handleClose}>{item.title}</MenuItem>
                    </Redirect>
                  );
                })}
              </Menu>
              <Redirect link={Routes.NewsRouteLink}>
                <Button sx={{ color: palette.secondary.main }}>
                  {" "}
                  {language.appbar.navLink.news}
                </Button>
              </Redirect>
              <Redirect link={Routes.ContactRouteLink}>
                <Button sx={{ color: palette.secondary.main }}>
                  {" "}
                  {language.appbar.navLink.contact}
                </Button>
              </Redirect>
            </Stack>
            <Stack>
              <a href={"#contact"} style={{ textDecoration: "none" }}>
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
                  {language.appbar.button}
                </Button>
              </a>
            </Stack>

            <LanguageApp small={true} />
          </Stack>
        </Toolbar>
      </AppBar>
    </Stack>
  );
};

export default Navbar;
