import {
  Box,
  Button,
  Divider,
  IconButton,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useTheme } from "styled-components";
import { Stack } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage, selectedLanguage } from "../Context/LanguageSlice";
import Routes from "../Router/Routes";
import Redirect from "../Helpers/Redirect";
const Footer = () => {
  const { palette, width } = useTheme();
  const [language, setLanguage] = React.useState("english");
  const dispatch = useDispatch();
  const ContentLanguage = useSelector(selectedLanguage).language;
  const handleLanguage = React.useCallback(
    (event) => {
      setLanguage(event.target.value);
      dispatch(changeLanguage(event.target.value));
    },
    [dispatch]
  );
  return (
    <Box
      sx={{
        minHeight: "60vh",
        width: width,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        margin: "10vh auto 0 auto",
        flexWrap: "wrap",
      }}
    >
      <Box
        sx={{
          width: "100%",
          backgroundColor: palette.primary.main,
          color: palette.secondary.main,
          height: "100%",
          borderRadius: "10px",
          display: "flex",
          flexWrap: "wrap",

          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: "10vh 0 0 0",
          rowGap: "50px",
        }}
      >
        <Box
          sx={{
            width: "90%",
            height: "90%",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",

            alignItems: "flex-start",
            flexDirection: "row",
            rowGap: "30px",
            columnGap: "20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignitems: "center",
              flexWrap: "wrap",

              flexDirection: "column",
            }}
          >
            <FooterBlock
              Title={"PAGES"}
              Items={[
                {
                  title: ContentLanguage.appbar.navLink.about,
                  link: Routes.HomeRouteLink,
                },
                {
                  title: ContentLanguage.appbar.navLink.news,
                  link: Routes.NewsRouteLink,
                },
                {
                  title: ContentLanguage.appbar.navLink.contact,
                  link: Routes.ContactRouteLink,
                },
              ]}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignitems: "center",
              flexWrap: "wrap",

              flexDirection: "column",
            }}
          >
            <FooterBlock
              Title={"CONTACT"}
              Items={[
                {
                  title: "+225 07 08 06 48 48",
                  link: Routes.HomeRouteLink,
                },
                {
                  title:
                    "Angré Djorobite Rond Point Cité SIR en bas Îlot 253 BIS Villa Lot 2446, Abidjan-Côte d’Ivoire ",
                  link: Routes.OurSolutionRouteLink,
                },
                {
                  title: "client@coollionenergies.com",
                  link: Routes.NewsRouteLink,
                  noCap: true,
                },
              ]}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignitems: "center",
              flexWrap: "wrap",

              flexDirection: "column",
            }}
          >
            <FooterBlock
              Title={ContentLanguage.appbar.navLink.product}
              Items={[
                {
                  title: ContentLanguage.products.emergency.title,
                  link: Routes.EmergencyRouteLink,
                },
                {
                  title: ContentLanguage.products.clim.title,
                  link: Routes.ClimRouteLink,
                },
                {
                  title: ContentLanguage.products.sheds.title,
                  link: Routes.ShedsRouteLink,
                },
                {
                  title: ContentLanguage.products.buildings.title,
                  link: Routes.BuildingsRouteLink,
                },
                {
                  title: ContentLanguage.products.support.title,
                  link: Routes.SupportRouteLink,
                },
              ]}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignitems: "center",
              flexWrap: "wrap",

              flexDirection: "column",
            }}
          >
            <Typography sx={{ fontWeight: "bold", fontSize: "1.3rem" }}>
              {ContentLanguage.footer.partner.title}
            </Typography>
            <Typography sx={{ color: palette.secondary.light }}>
              {ContentLanguage.footer.newsLetter}
            </Typography>

            <TextField
              sx={{
                marginTop: "10px",
                borderColor: palette.secondary.light,
                background: palette.secondary.light,
                color: palette.primary.main,
                outline: "none",
                border: "none",
              }}
            />
          </Box>
        </Box>

        <Box sx={{ width: "90%" }}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                flexDirection: "row",
                columnGap: { xs: "auto", sm: "10px" },
                rowGrap: "10px",
                flexWrap: "wrap",
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {ContentLanguage.footer.follow}
              </Typography>
              <Redirect
                link={"https://www.twitter.com/coollionenergies"}
                target={true}
              >
                <IconButton size="medium" color="secondary" variant="contained">
                  <TwitterIcon
                    fontSize="medium"
                    sx={{ color: palette.secondary.light }}
                  />
                </IconButton>
              </Redirect>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                flexDirection: "row",
                columnGap: { xs: "auto", sm: "10px" },
                rowGrap: "10px",
                flexWrap: "wrap",
              }}
            >
              <Select
                size="small"
                sx={{
                  width: "150px",
                  marginBottom: "10px",
                  borderColor: palette.secondary.light,
                  background: palette.secondary.light,
                }}
                value={language}
                onChange={handleLanguage}
              >
                <MenuItem value="english">
                  <Stack direction="row" spacing={2}>
                    <img
                      src="https://flagcdn.com/us.svg"
                      alt="english"
                      style={{ width: "30px", height: "20px" }}
                    />
                    <Typography>English</Typography>
                  </Stack>
                </MenuItem>
                <MenuItem value="french">
                  <Stack direction="row" spacing={2}>
                    <img
                      src="https://flagcdn.com/fr.svg"
                      alt="Français"
                      style={{ width: "30px", height: "20px" }}
                    />
                    <Typography>Français</Typography>
                  </Stack>
                </MenuItem>
              </Select>
            </Box>
          </Box>
          <Divider color={palette.secondary.main} />
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontSize: "0.8em", margin: "10px 0 10px 0" }}>
              © Cool Lion Energies ®.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const FooterItems = ({ Items }) => {
  return (
    <>
      {Items.map((item, key) => {
        return (
          <Redirect link={item.link} key={key}>
            <Typography
              sx={{
                "&:hover": { textDecoration: "underline" },
                textTransform: item?.noCap === false ? "capitalize" : "none",
                cursor: "pointer",
                maxWidth: "250px",
              }}
            >
              {item.title}
            </Typography>
          </Redirect>
        );
      })}
    </>
  );
};

const FooterBlock = ({ Title, Items }) => {
  return (
    <>
      <Typography sx={{ fontWeight: "bold", fontSize: "1.3rem" }}>
        {Title}
      </Typography>
      <FooterItems Items={Items} />
    </>
  );
};

export default Footer;
