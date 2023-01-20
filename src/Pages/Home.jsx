import { IconButton } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "react-sidebar";
import InverseWaves from "../Components/InverseWaves";
import SidebarSlide from "../Components/SidebarSlide";
import Waves from "../Components/Waves";
import Contact from "../Containers/Home/Contact";
import Partner from "../Containers/Home/Partner";
import Slider from "../Containers/Home/Slider";
import Solutions from "../Containers/Home/Solutions";
import News from "../Containers/News";
import { changeState, selectedSidebar } from "../Context/SidebarSlice";

const Home = () => {
  const sidebardState = useSelector(selectedSidebar).sidebard.status;
  const [siderbarStateValue, setSiderbarStateValue] =
    React.useState(sidebardState);
  const dispatch = useDispatch();
  const handleChange = React.useCallback(() => {
    dispatch(changeState({ status: !sidebardState }));
    setSiderbarStateValue(!sidebardState);
  }, [dispatch, sidebardState]);
  
  React.useEffect(() => {
    setSiderbarStateValue(sidebardState)
  },[sidebardState])
  return (
    <>
      <Sidebar
        sidebar={<SidebarSlide />}
        styles={{
          sidebar: {
            background: "white",
            height: "1000px",
            zIndex: 10000,
          },
          content: { height: "10000px" },
        }}
        open={siderbarStateValue === true}
        onSetOpen={handleChange}
      ></Sidebar>
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
