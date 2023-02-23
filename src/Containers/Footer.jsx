import { Box, Divider, IconButton, Typography } from "@mui/material";
import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useTheme } from "styled-components";
import { useSelector } from "react-redux";
import { selectedLanguage } from "../Context/LanguageSlice";
import Routes from "../Router/Routes";
import Redirect from "../Helpers/Redirect";
import LanguageApp from "../Components/LanguageApp";
import Newsletter from "../Components/Newsletter";
const Footer = () => {
  const { palette, width } = useTheme();
  const ContentLanguage = useSelector(selectedLanguage).language;
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
                  title: "Cote d'Ivoire",
                  type: "title",
                },
                {
                  title: "+225 07 08 06 48 48",
                  target: true,
                  link: "tel:+225 07 08 06 48 48",
                },
                {
                  title:
                    "Angré Djorobite Rond Point Cité SIR en bas Îlot 253 BIS Villa Lot 2446, Abidjan-Côte d’Ivoire ",
                  link: Routes.OurSolutionRouteLink,
                },
                {
                  title: "client@coollionenergies.com",
                  link: "mailto:client@coollionenergies.com",
                  noCap: true,
                  target: true,
                },
                {
                  title: "________________________",
                  link: Routes.HomeRouteLink,
                },
                {
                  title: "Rwanda",
                  type: "title",
                },
                {
                  title: "+250 789 628 067",
                  link: "tel:+250 789 628 067",
                  target: true,
                },
                {
                  title: "1 KN 78 St, Kigali, Rwanda",
                  link: Routes.OurSolutionRouteLink,
                },
                {
                  title: "client@coollionenergies.com",
                  link: "mailto:client@coollionenergies.com",
                  noCap: true,
                  target: true,
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

            <Newsletter />
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
              <LanguageApp />
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
        return item?.type !== undefined ? (
          <Typography sx={{ fontWeight: "bold", fontSize: "1.1rem" }}>
            {item.title}
          </Typography>
        ) : (
          <Redirect
            link={item.link}
            key={item.link}
            target={item?.target !== undefined ? item?.target : false}
          >
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
