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
import { useTheme } from "styled-components";
import CountrySelect from "../../Components/CountrySelect";
import countriesList from "../../Seeds/Forms/country";

const Contact = () => {
  const { palette, width } = useTheme();
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      sx={{ marginTop: "10vh" }}
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
            width: "85%",
            padding: "35px 0",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            rowGap: "20px",
          }}
        >
          <Typography variant="h3">Contact Us</Typography>

          <Stack
            direction={"row"}
            justifyContent="space-around"
            alignItems={"center"}
            sx={{ width: "80%" }}
            spacing={2}
          >
            <TextField
              variant="outlined"
              label={"First name"}
              sx={{ width: "100%" }}
            />
            <TextField
              variant="outlined"
              label={"Last name"}
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
              label={"Email"}
              sx={{ width: "100%" }}
            />
            <TextField
              variant="outlined"
              label={"Phone"}
              sx={{ width: "100%" }}
            />
          </Stack>
          <TextField
            sx={{ width: "80%" }}
            variant="outlined"
            label={"Name of your Organization"}
          />
          <FormControl sx={{ width: "80%" }} component="div">
            <InputLabel id="demo-simple-select-label">
              Type of request
            </InputLabel>
            <Select sx={{ width: "100%" }}>
              <MenuItem>hello</MenuItem>
              <MenuItem>hello</MenuItem>
              <MenuItem>hello</MenuItem>
            </Select>
          </FormControl>

          <Box sx={{ width: "80%" }}>
            <CountrySelect
              items={countriesList}
              selectCountry={(value) => console.log(value)}
            />
          </Box>
          <Box sx={{ width: "80%" }}>
            <TextField
              id="story"
              name="story"
              label={"message"}
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
            Submit
          </Button>
        </Box>
      </Stack>
    </Stack>
  );
};

export default Contact;
