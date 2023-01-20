import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useTheme } from "styled-components";
import { useSelector } from "react-redux";
import { selectedLanguage } from "../../Context/LanguageSlice";
import Redirect from "../../Helpers/Redirect";

const Slider = () => {
  const [sliderState, setSliderState] = React.useState(0);
  const language = useSelector(selectedLanguage).language;

  const { palette, width } = useTheme();

  const handleNext = React.useCallback(() => {
    if (sliderState !== undefined && sliderState !== null && sliderState < 3) {
      setSliderState((state) => state + 1);
    }
    console.log(sliderState);
  }, [sliderState]);

  const handlePrev = React.useCallback(() => {
    if (sliderState !== undefined && sliderState !== null && sliderState > 0) {
      setSliderState((state) => state - 1);
    }

    console.log(sliderState);
  }, [sliderState]);
  return (
    <Stack
      sx={{ margin: "auto", width: width }}
      direction={"row"}
      justifyContent={"space-between"}
      alignitems={"center"}
    >
      <Stack justifyContent={"center"} alignItems="center">
        <IconButton size="large" onClick={handlePrev}>
          <ChevronLeftIcon
            fontSize="large"
            sx={{ color: palette.primary.main }}
          />
        </IconButton>
      </Stack>
      {language.home.map((item, key) => {
        return (
          key === sliderState && <SliderContent {...item} key={item.title} />
        );
      })}
      <Stack justifyContent={"center"} alignItems="center">
        <IconButton size="large" onClick={handleNext}>
          <ChevronRightIcon
            fontSize="large"
            sx={{ color: palette.primary.main }}
          />
        </IconButton>
      </Stack>
    </Stack>
  );
};
const SliderContent = ({ title, text, button, image, link }) => {
  const { palette } = useTheme();
  return (
    <Stack
      direction={{ sm: "column", md: "row" }}
      justifyContent="space-between"
      alignItems={"center"}
      sx={{
        width: "100%",
        height: "530px",
        padding: "15px 10px",
      }}
    >
      <Stack
        sx={{
          width: { sm: "100%", md: "42%" },
          height: "100%",
          marginBottom: { xs: "20px", md: "0" },
        }}
        alignItems="flex-start"
        justifyContent={"space-around"}
      >
        <Typography
          variant="h2"
          sx={{
            color: palette.primary.main,
          }}
        >
          {title}
        </Typography>
        <Box>
          <Typography variant="h6">{text}</Typography>
          <Redirect link={link}>
            <Button
              variant="outlined"
              sx={{
                borderColor: palette.primary.main,
                color: palette.primary.main,
                marginTop: "15px",
              }}
              
            >
              {button}
            </Button>
          </Redirect>
        </Box>
      </Stack>
      <Stack
        sx={{ width: { sm: "100%", md: "55%" }, height: "100%" }}
        justifyContent="center"
        alignItems="center"
      >
        <img
          src={image}
          alt="les information"
          style={{
            width: "100%",
          }}
        />
      </Stack>
    </Stack>
  );
};

export default Slider;
