import { Stack } from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";
import { useSelector } from "react-redux";
import { useTheme } from "styled-components";
import InverseWaves from "../Components/InverseWaves";
import Waves from "../Components/Waves";
import Contact from "../Containers/Home/Contact";
import Partner from "../Containers/Home/Partner";
import { SliderContent } from "../Containers/Home/Slider";
import Solutions from "../Containers/Home/Solutions";
import News from "../Containers/News";
import { selectedLanguage } from "../Context/LanguageSlice";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Home = () => {
  const language = useSelector(selectedLanguage).language;
  const { width } = useTheme();
  return (
    <>
      {/* <Slider /> */}
      <Carousel NextIcon={<ChevronRightIcon />} PrevIcon={<ChevronLeftIcon />}>
        {language.home.map((item, key) => {
          return (
            <Stack
              justifyContent="center"
              alignItems="center"
              sx={{ width: width }}
              key={item.title}
            >
              <SliderContent {...item} />
            </Stack>
          );
        })}
      </Carousel>
      <Waves />
      <Partner />
      <Solutions />
      <InverseWaves />
      <News />
      <Contact />
    </>
  );
};

export default Home;
