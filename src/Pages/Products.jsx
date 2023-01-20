import { Box } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import { selectedLanguage } from "../Context/LanguageSlice";

const Products = ({ path }) => {
  const { language } = useSelector(selectedLanguage);
  const content = language.products[path];
  return ;
};

export default Products;
