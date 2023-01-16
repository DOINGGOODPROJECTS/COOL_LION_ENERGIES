import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "styled-components";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { palette } from "@mui/system";

const Home = () => {
  const { width, palette } = useTheme();
  return (
    <>
      <Slider />
      <Waves />
      <Partner />
      <InverseWaves/>
    </>
  );
};

const Slider = () => {
  const { palette, width } = useTheme();
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

const Waves = () => {
  return (
    <Box sx={{ transform: "translate(0,10px)" }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#4267b2"
          fill-opacity="1"
          d="M0,0L30,21.3C60,43,120,85,180,138.7C240,192,300,256,360,266.7C420,277,480,235,540,229.3C600,224,660,256,720,272C780,288,840,288,900,261.3C960,235,1020,181,1080,149.3C1140,117,1200,107,1260,96C1320,85,1380,75,1410,69.3L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
        ></path>
      </svg>
    </Box>
  );
};
const InverseWaves = () => {
  return (
    <Box sx={{ transform: "rotate(180deg) translate(0,10px)" }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#4267b2"
          fill-opacity="1"
          d="M0,0L30,21.3C60,43,120,85,180,138.7C240,192,300,256,360,266.7C420,277,480,235,540,229.3C600,224,660,256,720,272C780,288,840,288,900,261.3C960,235,1020,181,1080,149.3C1140,117,1200,107,1260,96C1320,85,1380,75,1410,69.3L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
        ></path>
      </svg>
    </Box>
  );
};

const Partner = () => {
  const { width, palette } = useTheme();
  return (
    <Stack sx={{ width: "100%", background: palette.primary.main }}>
      <Stack
        sx={{ margin: "10px auto 20px auto ", width: width }}
        justifyContent="center"
        alignItems={"center"}
        spacing={5}
      >
        <Typography variant="h3" color={"white"}>
          Your Ideal Partner
        </Typography>
        <Stack spacing={1} sx={{ width: "80%" }}>
          <Typography variant="h6" color={"white"}>
            COOL LION ENERGIES is a specialist in Côte d’Ivoire majoring in the
            construction, assembly and provision of storage infrastructures and
            refrigerated storage powered by clean energy. Our solutions provide
            a wide range of support in different sectors, in particular
            agriculture, agri-food, industries and trade.
          </Typography>
          <Typography variant="h6" color={"white"}>
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

export default Home;
