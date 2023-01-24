import {
  Alert,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  Stack,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useFormik } from "formik";
import React from "react";
import { useSelector } from "react-redux";
import { useTheme } from "styled-components";
import CountrySelect from "../../Components/CountrySelect";
import { selectedLanguage } from "../../Context/LanguageSlice";
import countriesList from "../../Seeds/Forms/country";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import axios from "axios";

const Contact = ({ modale = false }) => {
  const { palette, width } = useTheme();
  const { language } = useSelector(selectedLanguage);
  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "First name must be at least 2 characters")
      .required("First name is required"),
    lastName: Yup.string()
      .min(2, "Last name must be at least 2 characters")
      .required("Last name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string()
      .matches(
        /^\d{3}-\d{3}-\d{4}$/,
        "Invalid phone number example: 050-643-0832"
      )
      .required("Phone number is required"),
    organization: Yup.string()
      .min(3, "Organization name must be at least 3 characters")
      .required("Organization is required"),
    request: Yup.string()
      .min(5, "Request must be at least 10 characters")
      .required("Request is required"),
    message: Yup.string()
      .min(10, "Message must be at least 10 characters")
      .required("Message is required"),
  });
  const [country, setCountry] = React.useState();
  const form = React.useRef();
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    organization: "",
    request: "",
    country: "",
    message: "",
  };

  const Submit = (formData, { resetForm }) => {
    formData.country = country;

    try {
      axios
        .post(
          "https://api.sendinblue.com/v3/contacts",
          {
            email: formData.email,
            listIds: [6], // replace with your list ID
            attributes: {
              FIRSTNAME: formData.firstName,
              LASTNAME: formData.lastName,
              PHONE: formData.phone,
              ORGANIZATION: formData.organization,
              TYPE_OF_REQUEST: formData.request,
              COUNTRY: formData.country,
              MESSAGE: formData.message,
            },
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
              process.env.REACT_APP_EMAILJS_TEMPLATEID,
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
                resetForm();
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
        .catch((values) => {
          setOpen({
            state: true,
            content: "error",
            message: values.response.data.message,
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

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: Submit,
  });

  const [open, setOpen] = React.useState({ state: false, type: "" });
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen({ state: false, type: "", message: "" });
  };

  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      sx={{
        margin: modale === true ? "20px auto" : "10vh auto auto auto",
      }}
      spacing={2}
    >
      <div id="contact"></div>
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
      <Stack
        sx={{ width: width }}
        justifyContent={"center"}
        alignItems="center"
      >
        <Box
          sx={{
            background: palette.secondary.dark,
            width: { xs: "95%", md: "65%" },
            padding: modale === true ? "auto" : "35px 0",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            rowGap: "20px",
          }}
          component="form"
          onSubmit={formik.handleSubmit}
          ref={form}
        >
          <Typography variant="h3">{language.contact.title}</Typography>

          <Stack
            direction={{ xs: "column", md: "row" }}
            justifyContent="space-around"
            alignItems={"center"}
            sx={{ width: "80%" }}
            spacing={2}
          >
            <TextField
              variant="outlined"
              label={language.contact.form.firstName}
              sx={{ width: "100%" }}
              error={formik.touched.firstName && formik.errors.firstName}
              helperText={formik.touched.firstName && formik.errors.firstName}
              name="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
            />
            <TextField
              variant="outlined"
              label={language.contact.form.lastName}
              sx={{ width: "100%" }}
              error={formik.touched.lastName && formik.errors.lastName}
              helperText={formik.touched.lastName && formik.errors.lastName}
              name="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
            />
          </Stack>
          <Stack
            direction={{ xs: "column", md: "row" }}
            justifyContent="space-around"
            alignItems={"center"}
            sx={{ width: "80%" }}
            spacing={2}
          >
            <TextField
              variant="outlined"
              label={language.contact.form.email}
              sx={{ width: "100%" }}
              error={formik.touched.email && formik.errors.email}
              helperText={formik.touched.email && formik.errors.email}
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            <TextField
              variant="outlined"
              label={language.contact.form.phone}
              sx={{ width: "100%" }}
              name="phone"
              error={formik.touched.phone && formik.errors.phone}
              helperText={formik.touched.phone && formik.errors.phone}
              value={formik.values.phone}
              onChange={formik.handleChange}
            />
          </Stack>
          <TextField
            sx={{ width: "80%" }}
            variant="outlined"
            label={language.contact.form.organisation}
            error={formik.touched.organization && formik.errors.organization}
            helperText={
              formik.touched.organization && formik.errors.organization
            }
            name="organization"
            value={formik.values.organization}
            onChange={formik.handleChange}
          />
          <FormControl sx={{ width: "80%" }} component="div">
            <InputLabel id="demo-simple-select-label">
              {language.contact.form.typeOfRequest.title}
            </InputLabel>
            <Select
              sx={{ width: "100%" }}
              onChange={formik.handleChange}
              value={formik.values.request}
              name="request"
              error={formik.touched.request && formik.errors.request}
            >
              {language.contact.form.typeOfRequest.content.map((item) => {
                return (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>

          <Box sx={{ width: "80%" }}>
            <CountrySelect
              items={countriesList}
              title={language.contact.form.country}
              selectCountry={(value) => setCountry(value.name.common)}
            />
          </Box>
          <Box sx={{ width: "80%" }}>
            <TextField
              id="story"
              name="message"
              error={formik.touched.message && formik.errors.message}
              helperText={formik.touched.message && formik.errors.message}
              label={language.contact.form.message}
              value={formik.values.message}
              onChange={formik.handleChange}
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
            type="submit"
          >
            {language.contact.form.send}
          </Button>
        </Box>
      </Stack>
    </Stack>
  );
};

export default Contact;
