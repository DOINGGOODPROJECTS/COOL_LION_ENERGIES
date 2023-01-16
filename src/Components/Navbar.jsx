import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";

const Navbar = () => {
  return (
    <div className="Navbar">
      <AppBar>
        <Toolbar>
          <IconButton size="small">
            <Typography>COOL LION ENERGIES </Typography>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
