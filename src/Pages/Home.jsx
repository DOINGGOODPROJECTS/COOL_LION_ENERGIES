import React from "react";
import InverseWaves from "../Components/InverseWaves";
import { IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import SidebarSlide from "../Components/SidebarSlide";
import Sidebar from "react-sidebar";
import { changeState, selectedSidebar } from "../Context/SidebarSlice";
import Waves from "../Components/Waves";
import Contact from "../Containers/Home/Contact";
import Partner from "../Containers/Home/Partner";
import Slider from "../Containers/Home/Slider";
import Solutions from "../Containers/Home/Solutions";
import News from "../Containers/News";

const Home = () => {
 
  return (
    <>
      
      <Slider />
      <Waves />
      <Partner />
      <Solutions />
      <InverseWaves />
      <News />
      <Contact />
    </>
  );
};

export default Home;
