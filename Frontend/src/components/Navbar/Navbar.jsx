import "./Navbar.css";
import { assets } from "../../assets/assets";
import "remixicon/fonts/remixicon.css";
import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };








  return (
    <>
      <div className="navbar">
        <Link to={"/"}>
          <img src={assets.logo} className="logo" alt="img" />
        </Link>

        <ul className={`navbar-menu ${isMenuOpen ? "open" : ""}`}>
          <Link to={"/"}>
            <li
              onClick={() => setMenu("home")}
              className={menu === "home" ? "active" : ""}
            >
              Home
            </li>
          </Link>
          <Link to={"/about"}>
          <li
            onClick={() => setMenu("about")}
            className={menu === "about" ? "active" : ""}
          >
            About
          </li>
          </Link>
          <Link to={"/gallery"}>
          <li
            onClick={() => setMenu("gallery")}
            className={menu === "gallery" ? "active" : ""}
          >
            Gallery
          </li>
          </Link>

          <Link to={"/menu"}>
          <li
            onClick={() => setMenu("menu")}
            className={menu === "menu" ? "active" : ""}
          >
            Menu
          </li>
          </Link>

          <Link to={"/contact"}>
            <li
              onClick={() => setMenu("contact")}
              className={menu === "contact" ? "active" : ""}
            >
              Contact
            </li>
          </Link>


        </ul>

        <div className="icon" onClick={toggleMenu}>
          <i className={isMenuOpen ? "ri-close-line" : "ri-menu-line"}></i>
        </div>
      </div>
    </>
  );
};

export default Navbar;
