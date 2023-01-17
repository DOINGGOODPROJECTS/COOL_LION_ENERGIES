import React from "react";
import InverseWaves from "../Components/InverseWaves";
import Waves from "../Components/Waves";
import Partner from "../Containers/Home/Partner";
import Slider from "../Containers/Home/Slider";
import Solutions from "../Containers/Home/Solutions";


const Home = () => {
  return (
    <>
      <Slider />
      <Waves />
      <Partner />
      <Solutions/>
      <InverseWaves />
    </>
  );
};








export default Home;
