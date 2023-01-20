import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useTheme } from "styled-components";
import contact from "../Assets/Imgs/contact.jpg";
import { selectedLanguage } from "../Context/LanguageSlice";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import PlaceIcon from "@mui/icons-material/Place";
import Contact from "../Containers/Home/Contact";

const ContactPage = () => {
  const { palette, width } = useTheme();
  const { language } = useSelector(selectedLanguage);
  return (
    <Stack justifyContent={"center"} alignItems="center">
      <Box sx={{ height: "auto", width: "100%", position: "relative" }}>
        <img
          src={contact}
          alt="contactImage"
          style={{ height: "100%", width: "100%" }}
        />
        <Typography
          variant="h2"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
          }}
        >
          {language.contact.title}
        </Typography>
      </Box>
      <Stack
        sx={{ width: width, marginTop: "10vh",marginBottom:"5vh" }}
        direction="row"
        spacing={2}
        justifyContent="space-between"
        alignItems={"flex-start"}
      >
        <Box
          sx={{
            border: "1px solid",
            borderColor: palette.primary.main,
            borderRadius: "10px",
            width: "45%",
          }}
        >
          <List>
            <ListItem>
              {" "}
              <ListItemIcon>
                <PhoneIcon sx={{ color: palette.primary.main }} />
              </ListItemIcon>{" "}
              +225 07 08 06 48 48 | 27 22 20 17 64
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <PlaceIcon sx={{ color: palette.primary.main }} />
              </ListItemIcon>
              Angré Djorobite Rond Point Cité SIR en bas Îlot 253 BIS Villa Lot
              2446, Abidjan-Côte d’Ivoire{" "}
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <EmailIcon sx={{ color: palette.primary.main }} />
              </ListItemIcon>
              client@coollionenergies.com
            </ListItem>
          </List>
        </Box>
        <Box sx={{ width: "50%", height: "300px" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3972.1491642187493!2d-3.9248939999999997!3d5.394229!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc7ab777333c2e665!2zNcKwMjMnMzguMCJOIDPCsDU1JzMwLjAiVw!5e0!3m2!1sen!2sus!4v1674206444957!5m2!1sen!2sus"
            width="100%"
            height="350"
            style={{ border: "none" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title='le localisation'
          ></iframe>
        </Box>
      </Stack>
      <Contact/>
    </Stack>
  );
};

export default ContactPage;
