import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "styled-components";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Home = () => {
  const { width, palette } = useTheme();
  return (
    <Stack
      sx={{ margin: "auto", width: width }}
      direction="row"
      justifyContent={"space-between"}
      alignitems={"center"}
    >
      <IconButton size="large">
        <ChevronLeftIcon
          fontSize="large"
          sx={{ color: palette.primary.main }}
        />
      </IconButton>
      <SliderContent />
      <IconButton size="large">
        <ChevronRightIcon
          fontSize="large"
          sx={{ color: palette.primary.main }}
        />
      </IconButton>
    </Stack>
  );
};

const SliderContent = () => {
  const { palette } = useTheme();
  return (
    <Stack
      direction={"row"}
      justifyContent="space-between"
      alignItems={"center"}
      sx={{
        width: "100%",
        height: "530px",
        padding: "15px 10px",
      }}
    >
      <Stack
        sx={{ width: "53%", height: "100%" }}
        alignItems="flex-start"
        justifyContent={"space-around"}
      >
        <Typography variant="h2">
          Lorem ipsum dolor sit amet consectetur.
        </Typography>
        <Box>
          <Typography>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, eum.
          </Typography>
          <Button
            variant="outlined"
            sx={{
              borderColor: palette.primary.main,
              color: palette.primary.main,
              marginTop: "15px",
            }}
          >
            Lorem ipsum dolor
          </Button>
        </Box>
      </Stack>
      <Stack
        sx={{ width: "45%", height: "100%" }}
        justifyContent="center"
        alignItems="center"
      >
        <img
          src=" https://picsum.photos/1000/1000"
          alt="les information"
          style={{
            width: "100%",
            maxHeight: "80%",
          }}
        />
      </Stack>
    </Stack>
  );
};
export default Home;
