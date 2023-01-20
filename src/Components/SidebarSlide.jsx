import {
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  useTheme,
} from "@mui/material";
import React from "react";
import Redirect from "../Helpers/Redirect";
import Routes from "../Router/Routes";
import ImageWithoutName from "../Assets/Icons/LogoWithoutName.svg";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";

const SidebarSlide = () => {
  const { palette } = useTheme();
  return (
    <Box
      sx={{
        height:'100vh',
        width: "70vw",
        padding: "0 10px",
      }}
    >
      <Stack
        justifyContent={"center"}
        alignItems="center"
        direction={"row"}
        sx={{ marginBottom: "20px" }}
      >
        <Redirect link={Routes.HomeRouteLink}>
          <IconButton
            sx={{
              width: "120px",
              height: "auto",
              mr: 2,
              display: { sm: "none" },
            }}
          >
            <img
              src={ImageWithoutName}
              alt="cool lion energies"
              style={{ height: "100%", width: "100%" }}
            />
          </IconButton>
        </Redirect>
      </Stack>
      <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <nav aria-label="main mailbox folders">
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary="Drafts" />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
      </Box>
    </Box>
  );
};

export default SidebarSlide;
