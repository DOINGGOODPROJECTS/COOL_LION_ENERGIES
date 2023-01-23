import {  Button, Stack, TextField } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useTheme } from "styled-components";
import { selectedLanguage } from "../Context/LanguageSlice";

const Newsletter = () => {
  const { palette } = useTheme();
  const { language } = useSelector(selectedLanguage);
  const [email, setEmail] = React.useState("");

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(email);
  };

  return (
    <Stack
      sx={{ width: "100%" }}
      spacing={2}
      component="form"
      onSubmit={handleSubmit}
    >
      <TextField
        type={"email"}
        required
        placeholder="exemple@gmail.com"
        onChange={handleChange}
        sx={{
          marginTop: "10px",
          borderColor: palette.secondary.light,
          background: palette.secondary.light,
          color: palette.primary.main,
          outline: "none",
          border: "none",
        }}
      />
      <Button
        variant={"contained"}
        type="submit"
        sx={{
          background: palette.secondary.light,
          color: palette.primary.main,
        }}
      >
        {language.contact.form.send}{" "}
      </Button>
    </Stack>
  );
};

export default Newsletter;
