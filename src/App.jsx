import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Sidebar from "react-sidebar";
import { useTheme } from "styled-components";
import SidebarSlide from "./Components/SidebarSlide";
import Footer from "./Containers/Footer";
import Header from "./Containers/Header";
import { changeState, selectedSidebar } from "./Context/SidebarSlice";
import React from "react";


function App() {
  const { palette } = useTheme();
  const sidebardState = useSelector(selectedSidebar).sidebard.status;
  const [siderbarStateValue, setSiderbarStateValue] =
    React.useState(sidebardState);
  const dispatch = useDispatch();
  const handleChange = React.useCallback(() => {
    dispatch(changeState({ status: !sidebardState }));
    setSiderbarStateValue(!sidebardState);
  }, [dispatch, sidebardState]);

  React.useEffect(() => {
    setSiderbarStateValue(sidebardState);
  }, [sidebardState]);


  return (
    <div
      className="App"
      sx={{
        background: palette.secondary.main,
      }}
    >
      <Header />
      <Sidebar
        sidebar={<SidebarSlide />}
        styles={{
          sidebar: {
            background: "white",
            height: "1000px",
            zIndex: 10000,
            position: "fixed",
          },
          content: { height: "10000px" },
        }}
        open={siderbarStateValue === true}
        onSetOpen={handleChange}
      >
        <p>d</p>
      </Sidebar>
     
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
