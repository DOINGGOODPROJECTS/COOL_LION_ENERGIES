import { Stack, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "styled-components";

const Partner = () => {
  const { width, palette } = useTheme();
  return (
    <Stack sx={{ width: "100%", background: palette.primary.main }}>
      <Stack
        sx={{ margin: "0 auto 20px auto ", width: width }}
        justifyContent="center"
        alignItems={"center"}
        spacing={5}
      >
        <Typography variant="h3" color={"white"}>
          Your Ideal Partner
        </Typography>
        <Stack spacing={1} sx={{ width: "100%" }}>
          <Typography variant="h6" color={"white"} sx={{ textAlign: "center" }}>
            COOL LION ENERGIES is a specialist in Côte d’Ivoire majoring in the
            construction, assembly and provision of storage infrastructures and
            refrigerated storage powered by clean energy. Our solutions provide
            a wide range of support in different sectors, in particular
            agriculture, agri-food, industries and trade.
          </Typography>
          <Typography variant="h6" color={"white"} sx={{ textAlign: "center" }}>
            We have been awarded as the best small infrastructure innovation by
            the African Union Development Agency.
          </Typography>
        </Stack>
      </Stack>
      <Stack
        sx={{ margin: "10px auto 20px auto ", width: width }}
        justifyContent="center"
        alignItems={"center"}
      >
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/7f91fGZj3TM"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <Typography variant="h6" color={"white"}>
          We preserve what is valuable to you
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Partner;
