import { Stack, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useTheme } from "styled-components";
import { selectedLanguage } from "../../Context/LanguageSlice";

const Partner = () => {
  const { width, palette } = useTheme();
  const { language } = useSelector(selectedLanguage);
  return (
    <Stack
      sx={{ width: "100%", background: palette.primary.main, rowGap: "100px" }}
    >
      <Stack
        sx={{ margin: "0 auto 20px auto ", width: width }}
        justifyContent="center"
        alignItems={"center"}
        spacing={5}
      >
        <Typography variant="h3" color={"white"}>
          {language.partner.title}
        </Typography>
        <Stack spacing={2} sx={{ width: "100%" }}>
          <Typography variant="h6" color={"white"} sx={{ textAlign: "center" }}>
            {language.partner.text}
          </Typography>
          <Typography variant="h6" color={"white"} sx={{ textAlign: "center" }}>
            {language.partner.subTitle}
          </Typography>
        </Stack>
      </Stack>
      <Stack
        sx={{ margin: "10px auto 20px auto ", width: width }}
        justifyContent="center"
        alignItems={"center"}
      >
        <iframe
          width="100%"
          height="530"
          src="https://www.youtube.com/embed/7f91fGZj3TM"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <Typography variant="h6" color={"white"}>
          {language.video.text}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Partner;
