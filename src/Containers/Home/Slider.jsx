import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "styled-components";
import Redirect from "../../Helpers/Redirect";

const Slider = () => {
  return <Stack></Stack>;
};
export const SliderContent = ({ title, text, button, image, link }) => {
  const { palette } = useTheme();
  return (
    <Stack
      direction={{ xs: "column-reverse", md: "row" }}
      justifyContent="space-between"
      alignItems={"center"}
      spacing={2}
      sx={{
        width: "80%",
        height: "530px",
        padding: "15px 10px",
      }}
    >
      <Stack
        sx={{
          width: { sm: "100%", md: "48%" },
          height: "100%",
          marginBottom: { xs: "20px", md: "0" },
        }}
        alignItems="center"
        justifyContent={"space-around"}
      >
        <Typography
          variant={"h2"}
          sx={{
            color: palette.primary.main,
            display:{xs:'none',md:'block'}
          }}
        >
          {title}
        </Typography>
        <Typography
          variant={"h4"}
          sx={{
            color: palette.primary.main,
            display:{xs:'block',md:'none'}
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
        sx={{ width: { xs: "100%", md: "50%" }, height: "100%" }}
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
