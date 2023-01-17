import React from "react";
import InverseWaves from "../Components/InverseWaves";
import Waves from "../Components/Waves";
import Partner from "../Containers/Home/Partner";
import Slider from "../Containers/Home/Slider";


const Home = () => {
  return (
    <>
      <Slider />
      <Waves />
      <Partner />
      <InverseWaves />
    </>
  );
};








export default Home;
