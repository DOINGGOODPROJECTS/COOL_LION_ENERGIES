import {
  Box,
  Divider,
  IconButton,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useTheme } from "styled-components";
import { Stack } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage, selectedLanguage } from "../Context/LanguageSlice";
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
                "About us",
                "How Cool Lion Finance works",
                "FAQS",
                "Partner With Us",
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
              Title={"EXPLORE"}
              Items={["Happening Now", "Almost Funded"]}
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
              Title={"LEND"}
              Items={["Make a loan, change a life.", "Lend now"]}
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
              BORROW
            </Typography>
            <Typography color="secondary">
              Loans for entrepreneurs doing amazing things.
            </Typography>
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
                Follow Us
              </Typography>
              <IconButton size="medium" color="secondary" variant="contained">
                <TwitterIcon
                  fontSize="medium"
                  sx={{ color: palette.secondary.light }}
                />
              </IconButton>{" "}
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
              © 2023- 2024 Cool Lion Energies ®.
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
      {Items.map((item) => {
        return (
          <Typography
            key={item}
            sx={{
              "&:hover": { textDecoration: "underline" },
              textTransform: "capitalize",
            }}
          >
            {item}
          </Typography>
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
