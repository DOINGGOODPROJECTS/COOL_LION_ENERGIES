import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useTheme } from "styled-components";
import { selectedLanguage } from "../../Context/LanguageSlice";

const Solutions = () => {
  const { palette } = useTheme();
  const { language } = useSelector(selectedLanguage);
  return (
    <Stack
      sx={{ background: palette.primary.main }}
      justifyContent="center"
      alignItems={"center"}
    >
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ marginTop: "15vh" }}
      >
        <Typography variant="h2" sx={{ color: palette.secondary.light }}>
          {language.solution.title}
        </Typography>
        {language.solution.content.map((item, key) => {
          return (
            <SolutionContent
              inverse={key % 2 === 0}
              key={item.title}
              {...item}
            />
          );
        })}
      </Stack>
    </Stack>
  );
};

const SolutionContent = ({ inverse = false, image, title, text, button }) => {
  const { palette, width } = useTheme();
  return (
    <Stack
      direction={inverse === false ? "row" : "row-reverse"}
      justifyContent="space-between"
      alignItems={"flex-start"}
      sx={{
        width: width,
        height: "530px",
        padding: "15px 10px",
      }}
    >
      <Stack
        sx={{ width: "48%", height: "100%" }}
        alignItems={inverse === false ? "flex-start" : "flex-end"}
        justifyContent={"space-around"}
      >
        <Stack spacing={2}>
          <Typography variant="h4" sx={{ color: palette.secondary.light }}>
            {title}
          </Typography>
          <Typography
            sx={{ fontSize: "1.3rem", color: palette.secondary.light }}
          >
            {text}
          </Typography>
        </Stack>
        <Button
          sx={{
            background: palette.secondary.light,
            color: palette.primary.main,
            "&:hover": {
              background: palette.secondary.main,
            },
          }}
        >
          {button}
        </Button>
      </Stack>
      <Stack
        sx={{ width: "50%", height: "100%" }}
        justifyContent="center"
        alignItems="center"
      >
        <img
          src={image}
          alt="les information"
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "40px",
          }}
        />
      </Stack>
    </Stack>
  );
};

export default Solutions;
