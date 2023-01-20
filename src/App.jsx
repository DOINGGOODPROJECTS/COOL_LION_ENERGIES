import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Sidebar from "react-sidebar";
import { useTheme } from "styled-components";
import SidebarSlide from "./Components/SidebarSlide";
import Footer from "./Containers/Footer";
import Header from "./Containers/Header";
import { changeState, selectedSidebar } from "./Context/SidebarSlice";
import React from "react";
import Carousel from "react-material-ui-carousel";
import { selectedLanguage } from "./Context/LanguageSlice";
import { Box, Paper, Stack } from "@mui/material";
import { SliderContent } from "./Containers/Home/Slider";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

function App() {
  const { palette } = useTheme();
  const sidebardState = useSelector(selectedSidebar).sidebard.status;
  const [siderbarStateValue, setSiderbarStateValue] =
    React.useState(sidebardState);
  const dispatch = useDispatch();
  const handleChange = React.useCallback(() => {
    dispatch(changeState({ status: !sidebardState }));
    setSiderbarStateValue(!sidebardState);
  }, [dispatch, sidebardState]);

  React.useEffect(() => {
    setSiderbarStateValue(sidebardState);
  }, [sidebardState]);

  const language = useSelector(selectedLanguage).language;
  const { width } = useTheme();
  return (
    <div
      className="App"
      sx={{
        background: palette.secondary.main,
      }}
    >
      <Header />
      <Sidebar
        sidebar={<SidebarSlide />}
        styles={{
          sidebar: {
            background: "white",
            height: "1000px",
            zIndex: 10000,
            position: "fixed",
          },
          content: { height: "10000px" },
        }}
        open={siderbarStateValue === true}
        onSetOpen={handleChange}
      >
        <p>d</p>
      </Sidebar>
      <Carousel NextIcon={<ChevronRightIcon />} PrevIcon={<ChevronLeftIcon />}>
        {language.home.map((item, key) => {
          return (
            <Stack
              justifyConten="center"
              alignItems="center"
              sx={{ width: width }}
              key={item.title}
            >
              <SliderContent {...item} />
            </Stack>
          );
        })}
      </Carousel>
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
