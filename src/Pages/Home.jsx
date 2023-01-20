import React from "react";
import InverseWaves from "../Components/InverseWaves";
import Waves from "../Components/Waves";
import Contact from "../Containers/Home/Contact";
import Partner from "../Containers/Home/Partner";
import Slider from "../Containers/Home/Slider";
import Solutions from "../Containers/Home/Solutions";
import News from "../Containers/News";

const Home = () => {
 
  return (
    <>
      {/* <Slider /> */}
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
