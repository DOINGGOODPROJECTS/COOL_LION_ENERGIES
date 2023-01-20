import { Box } from "@mui/material";
import React from "react";

const Reseaux = () => {
    
  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <Box sx={{marginTop:'15vh'}}>
         <a class="twitter-timeline" href="https://twitter.com/CoolEnergies?ref_src=twsrc%5Etfw">Tweets by CoolEnergies</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

    </Box>
  );
};

export default Reseaux;
