import { MenuItem, Select, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { useDispatch } from "react-redux";
import { useTheme } from "styled-components";
import { changeLanguage } from "../Context/LanguageSlice";

const LanguageApp = ({ small = false }) => {
  const [language, setLanguage] = React.useState("french");
  const dispatch = useDispatch();
  const handleLanguage = React.useCallback(
    (event) => {
      setLanguage(event.target.value);
      dispatch(changeLanguage(event.target.value));
    },
    [dispatch]
  );
  const { palette} = useTheme();
  return (
    <Select
      size="small"
      sx={{
        width: small === true ? "50px" : "150px",
        marginBottom: "10px",
        borderColor: palette.secondary.light,
        background: palette.secondary.light,
      }}
      value={language}
      onChange={handleLanguage}
      fontSize="small"
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
  );
};

export default LanguageApp;
