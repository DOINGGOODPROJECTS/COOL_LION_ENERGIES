import { Button, ListItem, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import { useTheme } from "styled-components";
import { selectedLanguage } from "../../Context/LanguageSlice";
import "./products.css";

const Products = ({ path }) => {
  const { language } = useSelector(selectedLanguage);
  const content = language.products[path];
  const { palette, width } = useTheme();
  return (
    <Stack sx={{ width: width, margin: "25vh auto" }} spacing={2}>
      <Box>
        <Typography
          variant="h2"
          sx={{
            color: palette.primary.main,
            textAlign: "center",
          }}
        >
          {content.title}
        </Typography>
        <Typography
          variant="h2"
          sx={{
            color: palette.primary.main,
            textAlign: "center",
          }}
          className="productTitle"
        >
          {content.title}
        </Typography>
      </Box>
      <Stack justifyContent={"center"} alignItems="center">
        <img src={content.image} alt={content.title} style={{ width: "80%" }} />
      </Stack>
      <Stack justifyContent={"center"} alignItems="flex-start" spacing={2}>
        <Typography variant="h6" sx={{ textAlign: "justify", width: "100%" }}>
          {content.text}
        </Typography>
        <Typography variant="h6" sx={{ textAlign: "start" }}>
          {content.subTitle}
        </Typography>
      </Stack>
      {content?.choose !== undefined && (
        <Stack spacing={2} sx={{ paddingTop: "0vh", paddingBottom: "10vh" }}>
          <Typography
            variant="h4"
            sx={{ color: palette.primary.main, textAlign: "center" }}
          >
            {content?.choose?.title}
          </Typography>
          <Stack
            direction={"row"}
            justifyContent="space-around"
            alignItems={"center"}
          >
            {content?.choose?.case.map((item, key) => (
              <Typography variant="h6" key={key} sx={{ width: "45%" }}>
                <li>{item}</li>
              </Typography>
            ))}
          </Stack>
        </Stack>
      )}
      <Stack
        direction={"row"}
        justifyContent="space-around"
        alignItems={"center"}
        sx={{ paddingTop: "10vh" }}
      >
        <Button variant="contained" size="large" sx={{ width: "45%" }}>
          <Typography>{language.products.button[0]}</Typography>
        </Button>
        <Button variant="outlined" size="large" sx={{ width: "45%" }}>
          <Typography>{language.products.button[1]}</Typography>
        </Button>
      </Stack>
    </Stack>
  );
};

export default Products;
