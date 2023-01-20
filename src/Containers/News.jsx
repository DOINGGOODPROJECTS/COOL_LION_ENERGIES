import { IconButton, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import educarriereImg from "../Assets/Icons/educarriere.png";
import ClimateImg from "../Assets/Icons/Climate.png";
import raconteurImg from "../Assets/Icons/raconteur.png";
import Redirect from "../Helpers/Redirect";
import { useSelector } from "react-redux";
import { selectedLanguage } from "../Context/LanguageSlice";

const News = () => {
  const { width } = useTheme();
  const { language } = useSelector(selectedLanguage);
  return (
    <Stack
      sx={{ width: "100%", margin: "auto" }}
      justifyContent="center"
      alignItems={"center"}
      spacing={5}
    >
      <Typography variant="h3" sx={{ textAlign: "center" }}>
        {language.news.title}
      </Typography>
      <Stack
        direction={"row"}
        justifyContent="space-between"
        alignItems={"center"}
        sx={{ width: width, flexWrap: "wrap" }}
        spacing={{ xs: 5, md: 15 }}
      >
        <Redirect
          target={true}
          link={
            "https://educarriere.ci/managers-mois/manager_mois_interview.php?MngId=mjX556lhf457AVv794gKI966 "
          }
        >
          <IconButton sx={{ width: "250px" }}>
            <img
              src={educarriereImg}
              alt="educarrier"
              style={{ width: "100%", height: "100%" }}
            />
          </IconButton>
        </Redirect>
        <Redirect
          target={true}
          link={
            "https://www.climate-kic.org/innovation-spotlight/africa-climaccelerator-start-up-spotlight-cool-lion/ "
          }
        >
          <IconButton sx={{ width: "250px" }}>
            <img
              src={ClimateImg}
              alt="climate"
              style={{ width: "100%", height: "100%" }}
            />
          </IconButton>
        </Redirect>{" "}
        <Redirect
          target={true}
          link={
            "https://www.raconteur.net/climate-clean-tech-startups-africa-cop27/ "
          }
        >
          <IconButton sx={{ width: "250px" }}>
            <img
              src={raconteurImg}
              alt="raconteur"
              style={{ width: "100%", height: "100%" }}
            />
          </IconButton>
        </Redirect>
      </Stack>
    </Stack>
  );
};

export default News;
