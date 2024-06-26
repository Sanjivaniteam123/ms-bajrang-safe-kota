import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { Outlet } from "react-router-dom";
import Buttons from "./Components/Buttons/Buttons";

function App() {
  return (
    <>
      <Navbar />
      <Buttons />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
