import { Outlet } from "react-router-dom";
import { useTheme } from "styled-components";
import Footer from "./Containers/Footer";
import Header from "./Containers/Header";

function App() {
  const { palette } = useTheme();
  return (
    <div
      className="App"
      sx={{
        background: palette.secondary.main,
      }}
    >
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
