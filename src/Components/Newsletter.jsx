import { Alert, Button, Snackbar, Stack, TextField } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useTheme } from "styled-components";
import { selectedLanguage } from "../Context/LanguageSlice";
import emailjs from "@emailjs/browser";
import axios from "axios";

const Newsletter = () => {
  const { palette } = useTheme();
  const { language } = useSelector(selectedLanguage);
  const [email, setEmail] = React.useState("");
  const [open, setOpen] = React.useState({ state: false, type: "success" });
  const form = React.useRef();
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen({ state: false, type: "", message: "" });
  };

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    try {
      axios
        .post(
          "https://api.sendinblue.com/v3/contacts",
          {
            email: email,
            listIds: [7], // replace with your list ID
          },
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              "api-key": process.env.REACT_APP_SENDINBLUE_API_KEY,
            },
          }
        )
        .then((values) => {
          emailjs
            .sendForm(
              process.env.REACT_APP_EMAILJS_SERVICEID,
              process.env.REACT_APP_EMAILJS_TEMPLATEID2,
              form.current,
              process.env.REACT_APP_EMAILJS_PUBLICKEY
            )
            .then(
              (result) => {
                setOpen({
                  state: true,
                  content: "success",
                  message: "your form has been saved",
                });
              },
              (error) => {
                setOpen({
                  state: true,
                  content: "error",
                  message: "Server error make sure to fill in the fields",
                });
              }
            );
        })
        .catch((value) => {
          setOpen({
            state: true,
            content: "error",
            message: value.response.data.message,
          });
        });
    } catch (error) {
      setOpen({
        state: true,
        content: "error",
        message: "Server error make sure to fill in the fields",
      });
    }
  };

  return (
    <Stack
      sx={{ width: "100%" }}
      spacing={2}
      component="form"
      onSubmit={handleSubmit}
      ref={form}
    >
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar
          open={open.state}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity={open.content}
            sx={{ width: "100%" }}
          >
            {open.message}
          </Alert>
        </Snackbar>
      </Stack>

      <TextField
        type={"email"}
        required
        placeholder="exemple@gmail.com"
        onChange={handleChange}
        name="email"
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
          "&:hover": {
            background: palette.secondary.main,
            color: palette.primary.dark,
          },
        }}
      >
        {language.contact.form.send}{" "}
      </Button>
    </Stack>
  );
};

export default Newsletter;
