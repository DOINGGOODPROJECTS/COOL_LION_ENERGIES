import { Button, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import { useTheme } from "styled-components";
import { selectedLanguage } from "../../Context/LanguageSlice";
import "./products.css";
import Redirect from "../../Helpers/Redirect";
import Contact from "../../Containers/Home/Contact";

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
            display: { xs: "none", md: "block" },
          }}
        >
          {content.title}
        </Typography>
        <Typography
          variant="h4"
          sx={{
            color: palette.primary.main,
            textAlign: "center",
            display: { xs: "block", md: "none" },
          }}
        >
          {content.title}
        </Typography>
        {/* <Typography
          variant="h2"
          sx={{
            color: palette.primary.main,
            textAlign: "center",
          }}
          className="productTitle"
        >
          {content.title}
        </Typography> */}
      </Box>
      <Stack justifyContent={"center"} alignItems="center">
        <img src={content.image} alt={content.title} style={{ width: "80%" }} />
      </Stack>
      <Stack
        justifyContent={"center"}
        alignItems="flex-start"
        spacing={2}
        sx={{ display: { xs: "none", md: "flex" } }}
      >
        <Typography variant="h6" sx={{ textAlign: "justify", width: "100%" }}>
          {content.text}
        </Typography>
        <Typography variant="h6" sx={{ textAlign: "start" }}>
          {content.subTitle}
        </Typography>
      </Stack>

      <Stack
        justifyContent={"center"}
        alignItems="center"
        spacing={2}
        sx={{ display: { xs: "flex", md: "none" } }}
      >
        <Typography sx={{ textAlign: "justify", width: "95%" }}>
          {content.text}
        </Typography>
        <Typography sx={{ textAlign: "start" }}>{content.subTitle}</Typography>
      </Stack>
      {content?.choose !== undefined && (
        <Stack spacing={2} sx={{ paddingTop: "0vh", paddingBottom: "5vh" }}>
          <Typography
            variant="h4"
            sx={{
              color: palette.primary.main,
              textAlign: "center",
              marginBottom: "5vh",
            }}
          >
            {content?.choose?.title}
          </Typography>
          <Stack
            direction={{ xs: "column", md: "row" }}
            justifyContent="space-around"
            alignItems={"center"}
          >
            {content?.choose?.case.map((item) => (
              <Typography
                variant="h6"
                key={item}
                sx={{ width: { xs: "95%", md: "45%" } }}
              >
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
        sx={{ paddingBottom: "15vh" }}
      >
        <Box sx={{ width: "100%" }}>
          <Redirect link={path != 'agristock' ? "mailto:richards@coollionenergies.com" : "https://github.com/DOINGGOODPROJECTS/COOL-AGRISTOCK" } target={true}>
            <Button
              variant="contained"
              size="large"
              sx={{
                width: "100%",
                color: palette.secondary.light,
                background: palette.primary.main,
                "&:hover": {
                  background: palette.primary.dark,
                },
              }}
            >
              <Typography>{ path != 'agristock' ? language.products.button[0] : language.products.button[2] }</Typography>
            </Button>
          </Redirect>
        </Box>
      </Stack>
      <Contact />
    </Stack>
  );
};

export default Products;
