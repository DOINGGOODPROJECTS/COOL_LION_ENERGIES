import { Outlet } from "react-router-dom";
import Footer from "./Containers/Footer";
import Header from "./Containers/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
