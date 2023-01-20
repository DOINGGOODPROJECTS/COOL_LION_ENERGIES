import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { useTheme } from "styled-components";

const Reseaux = () => {
  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);


  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      sx={{ marginTop: "15vh", width: "100%" }}
    >
      <Box sx={{ width: '70%' }}>
        <a
          class="twitter-timeline"
          href="https://twitter.com/CoolEnergies?ref_src=twsrc%5Etfw"
        >
          Tweets by CoolEnergies
        </a>{" "}
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charset="utf-8"
        ></script>
      </Box>
    </Stack>
  );
};

export default Reseaux;
