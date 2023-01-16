import { Stack } from "@mui/material";
import React from "react";
import Navbar from "../Components/Navbar";

const Header = () => {
  return (
    <Stack sx={{marginBottom:"10vh"}}>
      <Navbar />
    </Stack>
  );
};

export default Header;
