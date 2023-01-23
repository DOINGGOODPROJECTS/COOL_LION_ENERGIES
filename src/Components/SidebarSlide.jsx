import { Box, Button, IconButton, Menu, MenuItem, Stack } from "@mui/material";
import React from "react";
import Redirect from "../Helpers/Redirect";
import Routes from "../Router/Routes";
import ImageWithoutName from "../Assets/Icons/LogoWithoutName.svg";
import { useDispatch, useSelector } from "react-redux";
import { selectedLanguage } from "../Context/LanguageSlice";
import { useTheme } from "styled-components";
import { changeState, selectedSidebar } from "../Context/SidebarSlice";

const SidebarSlide = () => {
  const { palette } = useTheme();
  const language = useSelector(selectedLanguage).language;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const sidebardState = useSelector(selectedSidebar).sidebard.status;
  const dispatch = useDispatch();

  const handleChange = React.useCallback(() => {
    dispatch(changeState({ status: !sidebardState }));
  }, [dispatch, sidebardState]);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box
      sx={{
        height: "100vh",
        width: "70vw",
        padding: "0 10px",
      }}
    >
      <Stack
        justifyContent={"center"}
        alignItems="center"
        direction={"row"}
        sx={{ marginBottom: "20px" }}
      >
        <Redirect link={Routes.HomeRouteLink}>
          <IconButton
            sx={{
              width: "120px",
              height: "auto",
              mr: 2,
              display: { sm: "none" },
            }}
            onClick={handleChange}
          >
            <img
              src={ImageWithoutName}
              alt="cool lion energies"
              style={{ height: "100%", width: "100%" }}
            />
          </IconButton>
        </Redirect>
      </Stack>
      <Stack
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        spacing={15}
      >
        <Stack justifyContent="center" alignItems={"center"} spacing={1}>
          <Redirect link={Routes.HomeRouteLink}>
            {" "}
            <Button sx={{ color: palette.primary.main }} onClick={handleChange}>
              {language.appbar.navLink.about}
            </Button>
          </Redirect>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            sx={{ color: palette.primary.main }}
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
            sx={{ zIndex: 10000000000 }}
          >
            {Object.entries(language.products).map((items, key) => {
              const item = items[1];
              return (
                key >= 1 && (
                  <Redirect link={item.link} key={key}>
                    <MenuItem onClick={handleClose}>{item.title}</MenuItem>
                  </Redirect>
                )
              );
            })}
          </Menu>
          <Button sx={{ color: palette.primary.main }} onClick={handleChange}>
            {" "}
            {language.appbar.navLink.news}
          </Button>
          <Redirect link={Routes.ContactRouteLink}>
            <Button sx={{ color: palette.primary.main }} onClick={handleChange}>
              {" "}
              {language.appbar.navLink.contact}
            </Button>
          </Redirect>
        </Stack>
        <Stack>
          <Button
            size="large"
            variant="contained"
            sx={{
              background: palette.primary.main,
              color: palette.secondary.main,
              "&:hover": {
                background: palette.primary.main,
                color: palette.primary.dark,
              },
            }}
            onClick={handleChange}
          >
            {" "}
            {language.appbar.button}
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default SidebarSlide;
