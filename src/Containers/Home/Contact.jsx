import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import { useTheme } from "styled-components";
import CountrySelect from "../../Components/CountrySelect";
import { selectedLanguage } from "../../Context/LanguageSlice";
import countriesList from "../../Seeds/Forms/country";

const Contact = ({ modale = false }) => {
  const { palette, width } = useTheme();
  const { language } = useSelector(selectedLanguage);
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      sx={{
        margin: modale === true ? "20px auto" : "10vh auto auto auto",
      }}
      spacing={2}
    >
      <Stack
        sx={{ width: width }}
        component="form"
        justifyContent={"center"}
        alignItems="center"
      >
        <Box
          sx={{
            background: palette.secondary.dark,
            width: "65%",
            padding: modale === true ? "auto" : "35px 0",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            rowGap: "20px",
          }}
        >
          <Typography variant="h3">{language.contact.title}</Typography>

          <Stack
            direction={"row"}
            justifyContent="space-around"
            alignItems={"center"}
            sx={{ width: "80%" }}
            spacing={2}
          >
            <TextField
              variant="outlined"
              label={language.contact.form.firstName}
              sx={{ width: "100%" }}
            />
            <TextField
              variant="outlined"
              label={language.contact.form.lastName}
              sx={{ width: "100%" }}
            />
          </Stack>
          <Stack
            direction={"row"}
            justifyContent="space-around"
            alignItems={"center"}
            sx={{ width: "80%" }}
            spacing={2}
          >
            <TextField
              variant="outlined"
              label={language.contact.form.email}
              sx={{ width: "100%" }}
            />
            <TextField
              variant="outlined"
              label={language.contact.form.phone}
              sx={{ width: "100%" }}
            />
          </Stack>
          <TextField
            sx={{ width: "80%" }}
            variant="outlined"
            label={language.contact.form.organisation}
          />
          <FormControl sx={{ width: "80%" }} component="div">
            <InputLabel id="demo-simple-select-label">
              {language.contact.form.typeOfRequest.title}
            </InputLabel>
            <Select sx={{ width: "100%" }}>
              {language.contact.form.typeOfRequest.content.map((item) => {
                return <MenuItem key={item}>{item}</MenuItem>;
              })}
            </Select>
          </FormControl>

          <Box sx={{ width: "80%" }}>
            <CountrySelect
              items={countriesList}
              title={language.contact.form.country}
              selectCountry={(value) => console.log(value)}
            />
          </Box>
          <Box sx={{ width: "80%" }}>
            <TextField
              id="story"
              name="story"
              label={language.contact.form.message}
              sx={{
                width: "100%",
              }}
              InputProps={{
                inputComponent: TextareaAutosize,
                inputProps: {
                  style: {
                    width: "100%",
                    height: "150px",
                    borderColor: palette.secondary.main,
                    borderSize: "2px",
                    borderRadius: "5px",
                  },
                },
              }}
            />
          </Box>
          <Button
            variant="contained"
            sx={{
              width: "80%",
              background: palette.primary.main,
              "&:hover": {
                background: palette.primary.dark,
              },
            }}
          >
            {language.contact.form.send}
          </Button>
        </Box>
      </Stack>
    </Stack>
  );
};

export default Contact;
