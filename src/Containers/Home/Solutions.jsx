import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useTheme } from "styled-components";
import { selectedLanguage } from "../../Context/LanguageSlice";
import Redirect from "../../Helpers/Redirect";

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
        <Typography
          variant="h2"
          sx={{ color: palette.secondary.light, textAlign: "center" }}
        >
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

const SolutionContent = ({
  inverse = false,
  image,
  title,
  text,
  button,
  link,
}) => {
  const { palette, width } = useTheme();
  const sens = inverse === false ? "row" : "row-reverse";
  return (
    <Stack
      direction={{ xs: "column-reverse", md: sens }}
      justifyContent="space-between"
      alignItems={{ xs: "center", md: "flex-start" }}
      sx={{
        width: width,
        height: "530px",
        padding: "15px 10px",
        marginTop: { xs: "100px", md: "auto" },
      }}
    >
      <Stack
        sx={{ width: { xs: "90%", md: "48%" }, height: "100%" }}
        alignItems={inverse === false ? "flex-start" : "flex-end"}
        justifyContent={"space-around"}
      >
        <Stack spacing={2}>
          <Typography
            variant="h4"
            sx={{
              color: palette.secondary.light,
              textAlign: { xs: "center", md: "inherit" },
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              fontSize: "1.3rem",
              color: palette.secondary.light,
              textAlign: { xs: "center", md: "inherit" },
            }}
          >
            {text}
          </Typography>
        </Stack>
        <Stack
          sx={{
            width: "100%",
            direction: "row",
            justifyContent: { xs: "center", md: "flex-start" },
            alignItems: { xs: "center", md: "flex-start" },
            marginTop: { xs: "10px", md: "auto" },
            transform:{xs:'none',md:'translate(0px,-100px)'}
          }}
        >
          <Redirect link={link}>
            <Button
              sx={{
                background: palette.secondary.light,
                color: palette.primary.main,
                "&:hover": {
                  background: palette.secondary.main,
                },
                width: { xs: "80vw", md: "auto" },
              }}
            >
              {button}
            </Button>
          </Redirect>
        </Stack>
      </Stack>
      <Stack
        sx={{
          width: { xs: "90%", md: "50%" },
          height: "100%",
          marginBottom: { xs: "5vh", md: "auto" },
        }}
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
