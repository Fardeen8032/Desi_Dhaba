import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Gallery from "./pages/Gallery/Gallery";
import Menu from "./pages/Menu/Menus";



const App = () => {

  return (
    <>
      <div className="app">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/menu" element={<Menu/>} />

        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
